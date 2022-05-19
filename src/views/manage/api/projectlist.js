import request from './request'
export const getProjectlist = (query) => {
  return request({
    url: `public/api/v1/projects`,
    method: 'get',
    params: query,
    needJwt: true,
  })
}
export const getProjectDetail = (id) => {
  return request({
    url: `public/api/v1/projects/${id}`,
    method: 'get',
    needJwt: true,
  })
}
export const getRecordStep = (id) => {
  return request({
    url: `public/api/v1/record`,
    method: 'get',
    params: id,
    needJwt: true,
  })
}
export const getRecordTable = (id) => {
  return request({
    url: `public/api/v1/record/${id}`,
    method: 'get',
    needJwt: true,
  })
}
export const getProcess = (param) => {
  return request({
    url: `public/api/v1/process`,
    method: 'get',
    params: param,
    needJwt: true,
  })
}
// 上报已读
export const getProjectRead = (id) => {
  return request({
    url: `public/api/v1/projects/${id}`,
    method: 'put',
    needJwt: true,
  })
}