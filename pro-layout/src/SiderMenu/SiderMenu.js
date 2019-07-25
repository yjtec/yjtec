import './index.less';
import React,{Component} from 'react';
import {Layout} from 'antd';
import classNames from 'classnames';
import BaseMenu from './BaseMenu';
const {Sider} = Layout;
export const defaultRenderLogo = logo => {
  if(typeof logo === 'string' ){
    return <img src={logo} alt="logo" />
  }
  if(typeof logo == 'function'){
    return logo();
  }

  return logo;
}
export default class SiderMenu extends Component{

  render(){
    const {
      theme,
      siderWidth = 256,
      title,
      logo
    } = this.props;
    const siderClassName = classNames('ant-pro-sider-menu-sider', {
      light: theme === 'light',
    });
    return(
      <Sider
        width={siderWidth}
        className={siderClassName}
      >
        <div className="ant-pro-sider-menu-logo" id="logo">
          <a>
            {defaultRenderLogo(logo)}
            <h1>{title}景在线系统</h1>
          </a>
        </div>
        <BaseMenu
          {...this.props}
          mode="inline"
          theme="dark"
          style={{padding:'16px 0',width:'100%'}}
        />
      </Sider>
    )
  }
}