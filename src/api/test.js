import request from "@/util/request"

export default {
    // 添加文章
    login(formData) {
        const req = request({
                method: 'post',
                url: '/user/login',
                data: formData,
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            })
            //返回ture or false
        return req
    },
}