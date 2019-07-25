import React, { Suspense } from 'react';
import { Layout } from 'antd';
import DocumentTitle from 'react-document-title';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import Context from './RouteContext';
import SiderMenu from './SiderMenu/';
import Header from './Header';
import Footer from './Footer';
import getMenuData from './utils/getMenuData';
const { Content } = Layout;
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};
const renderSiderMenu = props =>{
  return <SiderMenu {...props} />
}
const headerRender = props => {
  if(props.headerRender === false){
    return null;
  }
  return <Header {...props} />;
}

const footerRender = props => {
  if(props.footerRender === false){
    return null;
  }
  if(props.footerRender){
    return props.footerRender({...props},<Footer />);
  }
  return <Footer />
}
class BasicLayout extends React.Component{
  getContext = () => {
    return{

    }
  }
  render(){
    const {
      children,
      route,
      menuData:propsMenuData
    } = this.props;
    const {routes,path} = route;
    const {menuData:defaultMenuData,breadcrumb} = getMenuData(routes,path);
    const menuData = propsMenuData || defaultMenuData;
    return(
      <React.Fragment>
        <DocumentTitle title="adsf">
          <ContainerQuery query={query}>
            {params =>(
              <Context.Provider value={this.getContext()}>
                <div className={classNames(params ,'ant-design-pro','basicLayout')}>
                  <Layout>
                    {renderSiderMenu({
                      menuData,
                      ...{...this.props}
                    })}

                    <Layout
                      style={{
                        minHeight:'100vh'
                      }}
                    >
                      {headerRender({
                        ...this.props
                      })}
                      <Content className="ant-pro-basicLayout-content">
                      {children}
                      </Content>
                      {footerRender({})}
                    </Layout>
                  </Layout>
                </div>
              </Context.Provider>
            )}
          </ContainerQuery>
        </DocumentTitle>
      </React.Fragment>
    )
  }
}
export default BasicLayout;