import React, {Component} from 'react';
import {Form,Button,Input,InputNumber,Select} from 'antd';
import {PayItem} from 'yjtec';
const Option = Select.Option;
class FI extends Component{
  render(){
    const {type,onChange,value} = this.props;
    if(type == 'text'){
      return <Input {...this.props} />
    }
    if(type == 'select'){
      const {options} = this.props;
      return (
        <Select onChange={onChange}>
          {options.map(item => ( 
            <Option key={item.value} value={item.value}>{item.label}</Option>
          ))}
          </Select>
      );
    }

    if(type == 'payconfig'){
      return(
        <PayItem onChange={onChange} value={value} />
      );
    }

    return <div>uns</div>
  }
}

export default FI;