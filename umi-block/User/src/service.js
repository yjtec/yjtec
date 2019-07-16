import request from 'yjtec-request';
import {
  stringify
} from 'qs';
export async function query($params) {
  return request(`/api/user?${stringify($params)}`);
}
export async function fetchSave(params) {
  return request('/api/user', {
    method: 'post',
    data: params,
    requestType: 'form',
  })
}

export async function fetchDelete(id){
  return request(`/api/user/${id}`,{
    method:'delete'
  });
}