import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
import {
    loginOut
} from '@/util/util';
import Storage from '@/util/storage';
// import {
//     getCache,
//     setCache
// } from '@/api/cache';
// 携带cookie
axios.defaults.withCredentials = true;

var loadingInstance = null

// 添加一个响应拦截器
axios.interceptors.response.use(
    function(response) {
        if (response && response.data && response.data.code === 200) {
            const responseURL = response.request.responseURL;
            setCache(responseURL, response.data);
            return response.data || {};
        }
        if (typeof response === 'object') {
            return response;
        }
        Vue.prototype.$notify({
            title: '请求错误',
            type: 'error',
            message: response.data.message || '接口错误'
        });
        return response.data.message || '接口错误';
    },
    function(error) {
        return Promise.reject(error);
    }
);

const request = function({
    url,
    params = {},
    headers = {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    needJwt = true,
    method = 'get',
    noBase = false,
    isPublic = false,
    sendAllResponse = false,
    showLoading = false
}) {
    const BASE_API = process.env.VUE_APP_BASE_API;
    console.log('BASE_API', BASE_API)
    if (!isPublic) {
        // checkLogin();
    }
    let baseUrl = 'http://192.168.0.192:8072' + '/';

    // 标识不用baseUrl
    if (params.noBase || noBase) {
        baseUrl = '';
    }
    let sendUrl = baseUrl + url;
    console.log('sendUrl', sendUrl)

    const hasGetParams = sendUrl.indexOf('?') !== -1;
    if (hasGetParams) {
        sendUrl = sendUrl + '&';
    } else {
        sendUrl = sendUrl + '?';
    }
    method = method.toLocaleLowerCase();
    // 对传入后端的空数据统一处理处理
    if (!(params instanceof Array)) {
        let sendParams = {};
        for (let k in params) {
            if (params[k] || params[k] === 0) {
                sendParams[k] = params[k];
            }
        }
        params = sendParams;
    }
    if (method === 'get') {
        // 对传入后端的空数据统一处理处理
        let sendParams = {};
        for (let k in params) {
            if (params[k] || params[k] === 0) {
                sendParams[k] = params[k];
            }
        }
        params = sendParams;
        params = qs.stringify(params);
        sendUrl += params;
    }
    // jwt
    if (needJwt && !isPublic) {
        const JWT = Storage.get('jwt');
        if (!JWT) {
            Vue.prototype.$notify({
                title: '请求错误',
                type: 'error',
                message: '缺少JWT请重新登录'
            });
            loginOut();
        }
        headers = Object.assign(headers, {
            Authorization: `${JWT}`
        });
    }
    // 缓存层， 避免数据重复请求
    const cacheData = getCache(sendUrl);
    if (cacheData) {
        return new Promise((resolve) => {
            resolve(cacheData);
        });
    }
    if (showLoading) {
        loadingInstance = Vue.prototype.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
    }
    return axios({
            method,
            url: sendUrl,
            data: method === 'get' ? null : params,
            headers
        })
        .then(response => {
            if (sendAllResponse) {
                return response;
            }
            if (response.data) {
                return response.data;
            }
            return response;
        })
        .catch(err => {
            try {
                if (err.response && err.response.data.code === 403) {
                    return err;
                }
                Vue.prototype.$notify({
                    title: '请求错误',
                    type: 'error',
                    message: err.response ? err.response.data.message : err
                });
                // 如果是不需要jwt的接口报错，应该就是tikict错误，需要重新登陆
                // if (!needJwt) {
                //     loginOut(1500);
                // }
            } catch (err) {
                console.log('err', err);
            }
        }).finally(() => {
            if (showLoading) {
                loadingInstance.close()
            }
        });
};

export default request;