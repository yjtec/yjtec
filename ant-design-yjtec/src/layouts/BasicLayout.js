import ProLayout,{PageHeaderWrapper} from '@yjtec/pro-layout';
import styles from './BasicLayout.less';
import { formatMessage, FormattedMessage } from 'umi-plugin-locale';
import React, { Component } from 'react';
import RightContent from '@/components/GlobalHeader/RightContent';
import logo from '../assets/logo.svg';
import {connect} from 'dva';
const menuData = [{
  name:'欢迎',
  path:'/welcome',
  icon:'user',
  children:[{
    name:'欢迎您',
    path:'/welcome/one',
    icon:'user'

  }]
}];

@connect((loading)=>({

}))
class BasicLayout extends Component{
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch({
      type:"user/fetchCurrent"
    })
  }
  render(){
    const {children} =this.props;
    return (
      <React.Fragment>
        <ProLayout
          {...this.props}
          logo={logo}
          formatMessage={formatMessage}
          rightContentRender = {(rightProps) => <RightContent {...rightProps} />}
          //menuDataRender={()=>menuData}
        >
          <PageHeaderWrapper>{children}</PageHeaderWrapper>
        </ProLayout>
      </React.Fragment>
    )
  }
}
export default BasicLayout;