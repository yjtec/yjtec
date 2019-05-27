import React from 'react';
import {Radio,Form,Input} from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { TextArea } = Input;
class Index extends React.Component{
  state ={
    type:1
  }
  typeChange = e => {
    this.setState({
      type:e.target.value
    })
  }
  render(){
    console.log(this.props);
    const { form:{getFieldDecorator} } = this.props;
    const {type} = this.state;
    return(
      <div>
        <RadioGroup onChange={this.typeChange} value={this.state.type}>
          <Radio value={1}>微信</Radio>
          <Radio value={2}>支付宝</Radio>
        </RadioGroup>
        <FormItem style={{ marginBottom: 0 }}>
          {getFieldDecorator('appid')(
            <Input placeholder="appId" />
          )}
        </FormItem>
        {type == 1 && ( 
          <span>
            <FormItem style={{ marginBottom: 0 }}>
              {getFieldDecorator('mch_id')(
                <Input placeholder="mch_id" />
              )}
            </FormItem>
            <FormItem style={{ marginBottom: 0 }}>
              {getFieldDecorator('partner_key')(
                <Input placeholder="partner_key" />
              )}
            </FormItem>
            <FormItem style={{ marginBottom: 0 }}>
              {getFieldDecorator('cert')(
                <TextArea rows={3} placeholder="cert" />
              )}
            </FormItem>
            <FormItem style={{ marginBottom: 0 }}>
              {getFieldDecorator('key')(
                <TextArea rows={3} placeholder="key" />
              )}
            </FormItem>
          </span>
        )}
        {type == 2 && ( 
          <span>
            <FormItem style={{ marginBottom: 0 }}>
              {getFieldDecorator('public_key')(
                <TextArea rows={3} placeholder="public_key" />
              )}
            </FormItem>
            <FormItem style={{ marginBottom: 0 }}>
              {getFieldDecorator('private_key')(
                <TextArea rows={3} placeholder="private_key" />
              )}
            </FormItem>
          </span>
        )}
      </div>
    )
  }
}
export default Form.create({
  name:'payconfig_form',
  onFieldsChange(props,changedFields){
    //props.onChange(changedFields);
    console.log(changedFields,'onFieldsChange');
  },
  mapPropsToFields(props){
    // console.log(props,'mapPropsToFields');
    // const {value} = props;
    // let obj = {}
    // if(value){
    //   Object.keys(value).map((item,index) => { 
    //     obj[item] = Form.createFormField({
    //       value:value[item]
    //     })
    //   })
    // }
    // return {
    //   ...obj
    // };
  },
  onValuesChange({form,onChange},values){
    console.log(values,'onValuesChange');
    onChange(form.getFieldsValue());
  }
})(Index);