import { fetchLogin, getCaptcha } from '@/services/userlogin';
export default {
  namespace: 'userLogin',

  state: {
    status: undefined,
  },
  effects:{
    *login({payload},{call,put}){
      const re = yield call(fetchLogin,payload);
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
        status:payload.errcode === 0 ? 'ok' :'error',
        type:payload.type
      }
    }
  }

}