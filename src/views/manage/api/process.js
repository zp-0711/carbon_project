import request from './request'
export const postRegister = (query) => {
  return request({
    url: `public/api/v1/projects`,
    method: 'post',
    params: query,
    needJwt: true,
  })
}