import React,{Component} from 'react';
import ItemMap from './map';
import { Form, Input, Button, Row, Col } from 'antd';
import LoginContext from './loginContext';
const FormItem = Form.Item;
class WrapFormItem extends Component{
  render(){
    const {
      form: { getFieldDecorator },
      name,
      customprops
    } = this.props;
    //console.log(this.props);
    return(
      <FormItem>
        {getFieldDecorator(name)(<Input {...customprops} />)}
      </FormItem>
    )
  }
}

const LoginItem = {};
Object.keys(ItemMap).forEach(key => {
  const item = ItemMap[key];
  LoginItem[key] = props => (
    <LoginContext.Consumer>
      {context => (
        <WrapFormItem
          customprops={item.props}
          rules={item.rules}
          {...props}
          type={key}
          form={context.form}
        />
      )}
    </LoginContext.Consumer>
  )
})

export default LoginItem;