import './Header.less';

import React, { Component } from 'react';
import {Layout} from 'antd';
import GlobalHeader from './GlobalHeader';
const { Header } = Layout;

class HeaderView extends Component {
  renderContent = () => {
    return <GlobalHeader />
  }
  render(){
    return(
      <Header
        style={{padding:0}}
      >
        {this.renderContent()}
      </Header>
    )
  }
}
export default HeaderView;