import ProLayout,{
  PageHeaderWrapper
} from '@yjtec/pro-layout';
import styles from './BasicLayout.less';
import React, { Component } from 'react';
class BasicLayout extends Component{
  render(){
    const {children} =this.props;
    return (
      <React.Fragment>
        <ProLayout
          {...this.props}
        >
          {children}
          
        </ProLayout>
      </React.Fragment>
    )
  }
}
export default BasicLayout;