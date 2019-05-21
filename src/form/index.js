import React from 'react';
import {Form,Button} from 'antd';
import FI from './items';
const FormItem = Form.Item;
class Index extends React.Component{
  componentDidMount(){
    
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {form:{validateFieldsAndScroll},onSubmit} = this.props;
    validateFieldsAndScroll((err,values)=>{
      if(!err){
        if(onSubmit){
          onSubmit(values);
        }
      }
    })
  }
  render(){
    const {
      form: { getFieldDecorator, getFieldValue },
      fields,
      submitting
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };
    return(
      <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
        {Object.keys(fields).map((item,i) => {
          let FieldProps = {};
          if(fields[item].rules){
            const {rules} = fields[item];
            FieldProps.rules = fields[item].rules;
            
          }
          return(
            <FormItem key={item} {...formItemLayout} label={fields[item].label} >
              {getFieldDecorator(item,{
                ...FieldProps
              })(
                <FI {...fields[item]}/>
              )}
            </FormItem>            
          )
        })}
        <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
          <Button type="primary" htmlType="submit" loading={submitting}>
            提交
          </Button>
        </FormItem>
      </Form>
    )
  }
}
export default Form.create({
  name:'form',
  mapPropsToFields(props) {
    const {value} = props;
    let obj = {}
    if(value){
      Object.keys(value).map((item,index) => { 
        obj[item] = Form.createFormField({
          value:value[item]
        })
      })
    }
    return {
      ...obj
    };
  }
})(Index);