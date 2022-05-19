import request from './request'
export const getOrganization = (query) => {
  return request({
    url: `api/v1/organization/list`,
    method: 'get',
    params: query,
    needJwt: true,
  })
}
export const getOrganizationAdd = (data) => {
  console.log('data', data);
  return request({
    url: `api/v1/organization/add`,
    method: 'post',
    params: data,
    needJwt: true,
  })
}