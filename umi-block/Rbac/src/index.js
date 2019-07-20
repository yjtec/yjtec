import React,{Component} from 'react';
import styles from './style.less';
import {Card,Menu,Icon} from 'antd';
import Link from 'umi/link';
import {connect} from 'dva';
const {SubMenu} = Menu
@connect(({ loading, BLOCK_NAME_CAMEL_CASE }) => ({
  data: BLOCK_NAME_CAMEL_CASE,
  loading: loading.effects['BLOCK_NAME_CAMEL_CASE/fetch'],
}))
export default class RBAC extends Component{
  state = {
    key:['role']
  }
  handleClick = e => {
    this.setState({key:[e.key]})
  }
  render(){
    const {children} = this.props;
    const {key} = this.state;
    return (
      <Card>
        <Menu onClick={this.handleClick} selectedKeys={key} mode="horizontal">
          <Menu.Item key="role">
            <Link to="/role">
              <Icon type="inbox" />
              角色
            </Link>
          </Menu.Item>
          <Menu.Item key="menu">
            <Link to="/access">
              <Icon type="tool" />
              权限
            </Link>
          </Menu.Item>
        </Menu>
        {children}
      </Card>
    );
  }
}
