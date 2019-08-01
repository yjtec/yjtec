import React,{Component} from 'react';
import {Form,Card,Input,Button,TreeSelect} from 'antd';
import {connect} from 'dva';
const FormItem =  Form.Item;
const {TextArea} = Input;
const format = data => 
  data.map(item => {
    const result = {
      ...item,
      key:item.id,
      value:item.id
    }
    if(item.children){
      result.children = format(item.children);
    }
    return result;
  }) 
@connect(({loading,menu,access})=>({
  loading:loading.effects['menu/fetchSave'],
  menu:menu,
  access:access
}))
@Form.create()
class AddComponent extends Component{
  state ={

  }
  handleReset = () => {
    const {form:{resetFields}} = this.props;
    resetFields();
  }
  handleSubmit = () => {
    const {
      form:{validateFieldsAndScroll,resetFields},
      dispatch
    } =this.props;
    validateFieldsAndScroll((err,values) => {
      if(err) return;
      dispatch({
        type:"menu/fetchSave",
        payload:values,
        callback:()=>{
          resetFields();
        }
      })
      // onSubmit(err,values);
    })
  }
  render(){
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    const {
      form:{getFieldDecorator},
      loading,
      menu={tree:[]},
      access={list:[]}
    } = this.props;
    
    return(
      <Card 
        title="新增菜单"
        actions={[
          <Button type="primary" loading={loading} onClick={this.handleSubmit}>保存</Button>,
          <Button onClick={this.handleReset}>重置</Button>
        ]}
      >
        <Form {...formItemLayout}>
          <FormItem label="父级">
          {getFieldDecorator('pid',{
            
          })(<TreeSelect treeData={menu.tree} placeholder="不选为顶级" />)}
          </FormItem>
          <FormItem label="名称">
          {getFieldDecorator('title',{
            rules:[{required:true,message:'请输入名称'}],
          })(<Input />)}
          </FormItem>
          <FormItem label="标识">
          {getFieldDecorator('name',{
            rules:[{required:true,message:'请输入标识'}],
          })(<Input />)}
          </FormItem>
          <FormItem label="图标">
          {getFieldDecorator('icon',)(<Input />)}
          </FormItem>
          <FormItem label="路径">
          {getFieldDecorator('path',)(<Input />)}
          </FormItem>
          <FormItem label="权限">
          {getFieldDecorator('access_id',
          )(<TreeSelect treeData={format(access.list)} placeholder="选择绑定一个权限" />)}
          </FormItem>
        </Form>
      </Card>
    )
  }
}
// AddComponent.defaultProps = {
//   onSubmit:()=>{}
// }

export default AddComponent;