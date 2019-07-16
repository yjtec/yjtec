import { query,fetchSave,fetchDelete,fetchPut} from './service';
import {message} from 'antd';

export default { 
  namespace:'BLOCK_NAME_CAMEL_CASE',
  state:{
    data:[],
    pagination:{page:1,pageSize:10,total:0}
  },
  effects: {
    *fetch({payload}, { call, put,select }) {
      const {pagination} = yield select(state => state.BLOCK_NAME_CAMEL_CASE);
      const re = yield call(query,{...pagination,...payload});
      yield put({
        type:'saveFetch',
        payload:re
      })
    },
    *fetchSave({payload},{call,put,select}){
      const re = yield call(fetchSave,payload);
      if(re['errcode'] && re['errcode'] != 0 ){
        message.error(re['errmsg']);
        return false;
      }

      yield put({
        type:'fetch'
      })
    },
    *fetchDelete({payload},{call,put,select}){
      const re = yield call(fetchDelete,payload);
      if(re['errcode'] && re['errcode'] != 0 ){
        message.error(re['errmsg']);
        return false;
      }

      yield put({
        type:'fetch'
      })
    }
  },

  reducers: {
    saveFetch(state, {payload}) {
      return {
        data: payload.data,
        pagination:{
          page:Number(payload.current_page),
          total:Number(payload.total),
          pageSize:Number(payload.per_page)
        }
      };
    },
  }
}