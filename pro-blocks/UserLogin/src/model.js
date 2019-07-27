import { fetchLogin, getCaptcha } from './service';
export default {
  namespace: 'BLOCK_NAME_CAMEL_CASE',

  state: {
    status: undefined,
  },
  effects:{
    *login({payload},{call,put}){
      const re = yield call(fetchLogin,payload);
      console.log(re);
      yield put({
        type:'saveLogin',
        payload:re
      })
    },
    *getCaptcha({payload},{call,put}){
      yield call(getCaptcha,payload);
    }
  },
  reducers:{
    saveLogin(state,{payload}){
      return {
        ...state,
        status:payload.errcode == 0 ? 'ok' :'error',
        type:payload.type
      }
    }
  }

}