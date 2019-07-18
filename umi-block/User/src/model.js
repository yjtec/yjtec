import { query,fetchSave,fetchDelete,fetchPut,fetchOne} from './service';
import {message} from 'antd';
export default { 
  namespace:'BLOCK_NAME_CAMEL_CASE',
  state:{
    data:[],
    pagination:{page:1,pageSize:10,total:0},
    one:[],
    handleItem:{
      disable:{label:'禁用',value:'-1'},
      enable:{label:'启用',value:'1'}
    }
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
    *fetchSave({payload,callback},{call,put,select}){
      const re = yield call(fetchSave,payload);
      if(re){
        if(callback) callback();
        yield put({
          type:'fetch'
        })
      }
      
    },
    *fetchOne({payload},{call,put}){
      const re = yield call(fetchOne,payload);
      yield put({
        type:'saveOne',
        payload:re
      })
    },
    *fetchDelete({payload},{call,put,select}){
      const re = yield call(fetchDelete,payload);
      yield put({
        type:'fetch'
      })
    },
    *fetchPut({payload},{call,put,select}){
      const re = yield call(fetchPut,payload.id,payload.data);
      if(re){
        yield put({
          type:'fetch'
        })
      }
    }
  },

  reducers: {
    saveFetch(state, {payload}) {
      return {
        ...state,
        data: payload.data,
        pagination:{
          page:Number(payload.current_page),
          total:Number(payload.total),
          pageSize:Number(payload.per_page)
        }
      };
    },
    saveOne(state,{payload}){
      const one = payload;
      return {...state,one}
    }
  }
}