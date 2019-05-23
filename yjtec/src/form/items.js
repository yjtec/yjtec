import React, {Component} from 'react';
import {Form,Button,Input,InputNumber,Select} from 'antd';
class FI extends Component{
  render(){
    const {type,onChange} = this.props;
    if(type == 'text'){
      return <Input {...this.props} />
    }
  }
}

export default FI;