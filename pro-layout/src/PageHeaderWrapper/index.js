import './index.less';
const prefixedClassName = 'ant-pro-page-header-wrap';
const PageHeaderWrapper = props => {
  const {children} = props;
  return(
    <div style={{margin:'-24px -24px 0'}}>
       <div className={`${prefixedClassName}-page-header-warp`}>
        {children}
      </div>
    </div>
  )
}
export default PageHeaderWrapper;