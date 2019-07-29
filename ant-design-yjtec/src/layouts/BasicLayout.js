import ProLayout,{PageHeaderWrapper} from '@yjtec/pro-layout';
import styles from './BasicLayout.less';
import React, { Component } from 'react';
import logo from '../assets/logo.svg';
class BasicLayout extends Component{
  render(){
    const {children} =this.props;
    return (
      <React.Fragment>
        <ProLayout
          {...this.props}
          logo={logo}
        >
          {children}
          
        </ProLayout>
      </React.Fragment>
    )
  }
}
export default BasicLayout;