import request from 'yjtec-request';
export async function fetchLogin(data){
  return request(`/api/login`,{
    method:'post',
    data:data,
    alert:0
  })
}