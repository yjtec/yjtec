import React,{Component} from 'react';
import styles from './style.less';
import {Card,Menu,Icon} from 'antd';
import Link from 'umi/link';
import {connect} from 'dva';
const {SubMenu} = Menu
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
