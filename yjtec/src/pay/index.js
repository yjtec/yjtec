import React from 'react';
import {Radio,Form,Input} from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { TextArea } = Input;
class Index extends React.Component{
  state ={
    type:'1'
  }
  typeData = {
    1:'支付宝',
    2:'微信'
  }
  componentDidMount(){
    const {value} = this.props;
    if(value){
      this.setState({
        ...value
      })
    }
  }
  typeChange = e => {
    this.setState({
      type:e.target.value,
    })
  }
  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    },() => {
      const {onChange} = this.props;
      const {type,appid} = this.state;
      const values = {
        type:type,
        appid:appid
      };

      if(type == 1){
        const {public_key,private_key} = this.state;
        values.public_key = public_key;
        values.private_key = private_key;
      }else{
        const {mch_id,secret,partner_key,cert,key} = this.state;
        values.mch_id = mch_id;
        values.partner_key = partner_key;
        values.cert = cert;
        values.key = key;
        values.secret= secret;
      }
      if(onChange) onChange(values);
    })
    
  }
  render(){
    const typeData = this.typeData;
    const {type} = this.state;
    return(
      <div>
        <RadioGroup onChange={this.typeChange} value={type}>
        {Object.keys(typeData).map(key => (
          <Radio key={key} value={key}>{typeData[key]}</Radio>
        ))}
        </RadioGroup>
        <FormItem style={{ marginBottom: 0 }}>
          <Input placeholder="appid" name="appid" value={this.state.appid} onChange={this.handleChange}  />
        </FormItem>
        {type == 2 && ( 
          <span>
            <FormItem style={{ marginBottom: 0 }}>
              <Input placeholder="mch_id" name="mch_id" value={this.state.mch_id} onChange={this.handleChange} />
            </FormItem>
            <FormItem style={{ marginBottom: 0 }}>
              <Input placeholder="secret" name="secret" value={this.state.secret} onChange={this.handleChange} />
            </FormItem>            
            <FormItem style={{ marginBottom: 0 }}>
              <Input placeholder="partner_key" name="partner_key" value={this.state.partner_key} onChange={this.handleChange} />
            </FormItem>
            <FormItem style={{ marginBottom: 0 }}>
              <TextArea rows={3} placeholder="cert" name="cert" value={this.state.cert} onChange={this.handleChange} />
            </FormItem>
            <FormItem style={{ marginBottom: 0 }}>
              <TextArea rows={3} placeholder="key" name="key" value={this.state.key} onChange={this.handleChange} />
            </FormItem>
          </span>
        )}
        {type == 1 && ( 
          <span>
            <FormItem style={{ marginBottom: 0 }}>
              <TextArea rows={3} placeholder="public_key" value={this.state.public_key} name="public_key" onChange={this.handleChange} />
            </FormItem>
            <FormItem style={{ marginBottom: 0 }}>
              <TextArea rows={3} placeholder="private_key" value={this.state.private_key} name="private_key" onChange={this.handleChange} />
            </FormItem>
          </span>
        )}
      </div>
    )
  }
}
export default Index;