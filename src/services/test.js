import { request, config } from 'utils'
const { api } = config
const { test } = api

export async function query (params) {
  return request({
    url: test,
    method: 'get',
    data: params,
  })
}
