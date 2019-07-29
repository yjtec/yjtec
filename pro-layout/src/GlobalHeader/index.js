import './index.less';

import React, { Component } from 'react';
import { Icon } from 'antd';

export default class GlobalHeader extends Component{

  render(){
    console.log(this.props);
    const { isMobile, logo, rightContentRender } = this.props;
    return(
      <div className="ant-pro-global-header">
        {rightContentRender && rightContentRender(this.props)}
      </div>
    )
  }
}