import React,{Component} from 'react';
import {connect} from 'dva';
import { TreeSelect } from 'antd';
const { SHOW_PARENT } = TreeSelect;

@connect(({ loading, BLOCK_NAME_CAMEL_CASE }) => ({
  role: BLOCK_NAME_CAMEL_CASE.role,
  loading: loading.effects['BLOCK_NAME_CAMEL_CASE/fetchRole'],
}))
export default class Role extends Component{
  state={
    value:[]
  }
  componentDidMount(){
    console.log(this.props);
  }
  onChange = value => {
    const {onChange} = this.props;
    this.setState({value:value});
    if(onChange) onChange(value);
  }
  render(){
    const {role} = this.props;
    const tProps = {
      treeData:role,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      treeDefaultExpandAll:true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: '100%',
      },
    };
    return(
      <div>
        <TreeSelect {...tProps} placeholder="选择角色" />
      </div>
    )
  }
}