import { fetchLogin} from './service';
export default { 
  namespace:'BLOCK_NAME_CAMEL_CASE',
  state:{
    
  },
  effects: {
    *login({payload}, { call, put,select }) {
      const re = yield call(fetchLogin,payload);
      console.log(re);
      // yield put({
      //   type:'saveFetch',
      //   payload:format(re)
      // })
    }
  },
  reducers: {
    saveFetch(state, {payload}) {
      return {
        ...state,
        list:payload
      }
    }
  }
}