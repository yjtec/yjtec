import React,{Component,Fragment} from 'react';
import styles from '../style.less';
import {Button,Collapse,Menu,Dropdown,Icon,Spin,Tree,Row,Col} from 'antd';
const {TreeNode}  = Tree;
import Add from './add';
import List from './list';
import {connect} from 'dva';
const { Panel } = Collapse;

function MoreMenu(props){
  return(
    <Dropdown overlay={
      <Menu>
        <Menu.Item onClick={props.onAdd}>新增</Menu.Item>
        <Menu.Item>编辑</Menu.Item>
        <Menu.Item onClick={props.onDelete}>删除</Menu.Item>
      </Menu>
    }>
      <a className="ant-dropdown-link" href="#">
        更多<Icon type="down" />
      </a>
    </Dropdown>    
  )
}
function App(props){
  const {item} = props;
  return(
    <div>
      <div>
        <span>
          {item.title}({item.name})
        </span>
        <MoreMenu {...props} />
      </div>
      <div>
      {props.children}
      </div>
    </div>
  )
}

function Method(props){
  const renderTreeNodes = data => {
    return data.map(item => {
      if(item.children){
        return (
          <TreeNode title={
            <div>
              <span className={styles.title} >
                {item.title}({item.name})
              </span>
              <MoreMenu {...props} />
            </div>
          } 
          key={item.id}
          >
            {renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode 
        title={
          <div>
            <span className={styles.title} >
              {item.title}({item.name})
            </span>
            <MoreMenu {...props} />
          </div>
        } 
        key={item.id} 
      />
    })
  }
  return (
    <Col span={8}>
        <Tree>
          {renderTreeNodes([props.item])}
        </Tree>
    </Col>
  )
}

function Module(props){
  const app = props.item;
  const {children} = props;
  return(
    <Collapse bordered={false}>
      <Panel
        header={
          <div>
            <span className={styles.title} >
              {app.title}({app.name})
            </span>
            <MoreMenu {...props} />
          </div>
        }
      >
      {children}
      </Panel>
    </Collapse>
  );  
}
@connect(({loading,access})=>({
  loading:loading.effects['access/fetch'],
  access:access
}))
export default class AccessList extends Component{
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch({
      type:'access/fetch'
    })
  }
  handleDelete = id => {
    const {dispatch} = this.props;
    dispatch({
      type:'access/fetchDelete',
      payload:id
    })
  }
  render(){
    const {
      loading,
      access:{list},
      onChange
    } = this.props;
    return(
      <div>
        {loading ? <Spin /> :( 
          <div>
            {list.map(app => 
              <App 
                item={app} 
                key={app.id} 
                onDelete={()=>this.handleDelete(app.id)}
                onAdd= {()=> onChange(true,'1',app.id)}
              >
                <Fragment>
                  {app.children && (
                    <Fragment>
                      {app.children.map(m =>
                        <Module
                          item={m}
                          key={m.id}
                          onDelete={()=>this.handleDelete(m.id)}
                          onAdd= {()=> onChange(true,'2',m.id)}
                        >
                          <Fragment>
                            {m.children && ( 
                              <Row>
                                {m.children.map(method =>
                                  <Method 
                                    item={method}
                                    key={method.id}
                                    onDelete={()=>this.handleDelete(method.id)}
                                    onAdd= {()=> onChange(true,'3',method.id)}
                                  />
                                )}
                              </Row>
                            )}
                          </Fragment>
                        </Module>
                      )}
                    </Fragment>
                  ) }
                </Fragment>
              </App>
            )}
          </div>
        ) }
      </div>
    )
  }
}