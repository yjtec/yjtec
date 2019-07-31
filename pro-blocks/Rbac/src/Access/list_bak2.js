import React,{Component,Fragment} from 'react';
import styles from '../style.less';
import {connect} from 'dva';
import {Button,Collapse,Menu,Dropdown,Icon,Spin,Tree,Row,Col} from 'antd';
import Item from './List';
console.log(Item);
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
function Title(props){
  return (
    <div>
      <span>
        {props.title}({props.name})
      </span>
      <MoreMenu {...props} />
    </div>  
  )
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
  renderList = (data,level = 0) => {
    const {onChange} = this.props;
    return data.map(item => {
      const tProps = {
        ...item,
        onDelete:()=>this.handleDelete(item.id),
        onAdd: () => onChange(true,'1',item.id)
      }
      if(item.children){
        return(
          <Fragment>
            {level == 0 && 
              <Item.App.NotEmpty 
                key={item.id}
                title={item.title}
                render={this.renderList(item.children,++level)} 
              />
            }
          </Fragment>
        )
        // return (
        //   <div key={item.id}>
        //     <div>
        //     <Title 
        //       {...item}
        //       onDelete={()=>this.handleDelete(item.id)}
        //       onAdd= {()=> onChange(true,level,item.id)}
        //     />
        //     </div>
        //     <div>{this.renderList(item.children,++level)}</div>
        //   </div>
        // );
      }
      return(
        <Fragment>
          {level == 1 && <Item.App.Empty key={item.id} {...tProps} />}
        </Fragment>
      )
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
          <div>{this.renderList(list)}</div>
         )}
      </div>
    )
  }
}