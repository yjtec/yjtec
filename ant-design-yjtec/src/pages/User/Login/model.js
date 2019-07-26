import { fetchLogin} from '@/services/User';
export default { 
  namespace:'user',
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