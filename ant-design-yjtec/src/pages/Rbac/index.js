import React,{Component} from 'react';
import {Card} from 'antd';
export default class RBAC extends Component{
  render(){
    const {children} = this.props;
    return (
      <Card>
        {children}
      </Card>
    );
  }
}
