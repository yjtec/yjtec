import React,{Component,Fragment} from 'react';
import {Form,Input} from 'antd';
const FormItem = Form.Item;
export default class ModuleMethod extends Component{

  render(){
    const {
      form:{getFieldDecorator}
    } = this.props;
    return(
      <Fragment>
        <FormItem label="功能名称">
          {getFieldDecorator('title')(
            <Input />
          )}
        </FormItem>
        <FormItem label="标识">
          {getFieldDecorator('name')(
            <Input  placeholder="非专业人员请谨慎填写"/>
          )}
        </FormItem>
      </Fragment>
    )
  }
}