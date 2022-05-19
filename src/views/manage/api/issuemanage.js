import request from './request'
export const getIssue = (query) => {
  return request({
    url: `public/api/v1/ccers/${query}`,
    method: 'get',
    needJwt: true,
  })
}