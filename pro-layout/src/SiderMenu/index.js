import React from 'react';
import {Drawer} from 'antd';
import SiderMenu from './SiderMenu';
class SiderMenuWrapper extends React.Component{


  render(){
    return(
      <SiderMenu
        className="ant-pro-sider-menu"
        {...this.props}
      />
    )
  }
}

export default SiderMenuWrapper;