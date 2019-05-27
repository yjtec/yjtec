import request from 'umi-request';
class Token{
  constructor(key){
    this.inputKey = key;
  }
  set(value){
    localStorage.setItem(this.inputKey,value);
  }
  get(value){
    return localStorage.getItem(this.inputKey);
  }
  remove(){
    localStorage.removeItem(this.inputKey);
  }
  setHeader(token){
    request.interceptors.request.use((url,options) => {
      return ({
        url:url,
        options:{
          ...options,
          headers:{
            ...options.headers,
            token:token
          }
        }
      })
    });    
  }
}
export default Token;