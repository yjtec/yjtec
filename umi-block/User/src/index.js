import React,{Component} from 'react';
import styles from './style.less';
import {Card,Button} from 'antd';
import {connect} from 'dva';
import Add from './add';
import List from './list';
import Operator from './operator';
@connect(({ loading, BLOCK_NAME_CAMEL_CASE }) => ({
  data: BLOCK_NAME_CAMEL_CASE,
  loading: loading.effects['BLOCK_NAME_CAMEL_CASE/fetch'],
}))
class PAGE_NAME_UPPER_CAMEL_CASE extends Component{
  constructor(props) {
    super(props);
    this.state ={
      visible:false,
      selectedRows:[],
      search:{}
    }
  }
  componentDidMount(){
    this.handleFetch({});
  }
  handleAdd = () => {
    this.setState({visible:true})
  }
  handleCancel = () => {
    this.setState({visible:false})
  }
  handleOk = (values) => {
    const {dispatch} = this.props;
    dispatch({
      type:'BLOCK_NAME_CAMEL_CASE/fetchSave',
      payload:values
    })

    this.setState({
      visible:false
    })
  }
  handleEdit = record => {
    console.log(record);
  }
  handleDelete = id => {
    const {dispatch} = this.props;
    dispatch({
      type:'BLOCK_NAME_CAMEL_CASE/fetchDelete',
      payload:id
    })
  }
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  }
  handleSearch = values =>{
    this.setState({
      search:values
    })
    this.handleFetch({
      ...values,
      page:1
    })
  }
  handleFetch = payload => {
    const {dispatch} = this.props;
    dispatch({
      type:"BLOCK_NAME_CAMEL_CASE/fetch",
      payload:payload
    })
  }
  handlePageChange = (page,pageSize) => {
    const {search} = this.state;
    this.handleFetch({
      page,pageSize,...search
    })
  }
  handleReset = () => {
    this.handleFetch({})
  }
  render(){
    const {visible,selectedRows} = this.state;
    const {data} = this.props;
    //console.log(data);
    return (
      <div className={styles.TableList}>
        <Add 
          visible={visible} 
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        />
        <Card>
          <div className={styles.form}>
          <Operator {...this.props} 
            onSearch={this.handleSearch}
            onReset={this.handleReset}
          />
          </div>
          <div className={styles.operator}>
            <Button onClick={this.handleAdd} type="primary">新建</Button>
            {selectedRows.length > 0 && (
            <span>
              <Button >禁用</Button>
            </span>
            )}
          </div>
          <List 
            {...this.props}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
            onSelectRow={this.handleSelectRows}
            onPageChange={this.handlePageChange}
          />
        </Card>
      </div>
      
    );
  }
}
export default PAGE_NAME_UPPER_CAMEL_CASE;
