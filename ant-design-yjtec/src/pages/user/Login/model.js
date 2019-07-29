import { fetchLogin, getCaptcha } from '@/services/user';
export default {
  namespace: 'user',

  state: {
    status: undefined,
  },
  effects:{
    *login({payload},{call,put}){
      const re = yield call(fetchLogin,payload);
      // if(re.errcode == 0){
      //   yield put(route)
      // }
      yield put({
        type:'saveLogin',
        payload:re
      })
    },
    *getCaptcha({payload},{call,put}){
      yield call(getCaptcha,payload);
      
      //yield put(routerRedux.replace('/'));
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