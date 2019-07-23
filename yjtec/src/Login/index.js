import React,{Component} from 'react';
import {Form,Tabs} from 'antd';
import styles from './index.less';
import LoginTab from './LoginTab';
import LoginItem from './LoginItem';
import LoginSubmit from './LoginSubmit';
import LoginContext from './loginContext';
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      type:props.defaultActiveKey
    }
  }
  getContext = () => {
    const {form} = this.props;
    return {
      form
    }
  }
  render(){
    const {children} = this.props;
    const TabChildren = [];
    const otherChildren = [];
    React.Children.forEach(children,item => {
      if(!item){
        return;
      }
      //console.log(item);
      if(item.type.typeName === 'LoginTab'){
        TabChildren.push(item);
      }else{
        otherChildren.push(item);
      }
    })
    return (
      <LoginContext.Provider value={this.getContext()}>
        <div className={styles.login}>
          <Form>
            <React.Fragment>
              <Tabs 
                animated={false}
                className={styles.tabs}
                >
                {TabChildren}
              </Tabs>
              {otherChildren}
            </React.Fragment>
          </Form>
        </div>
      </LoginContext.Provider>
    )
  }
}
Login.Tab = LoginTab;
Login.Submit = LoginSubmit;
Object.keys(LoginItem).forEach(item => {
  Login[item] = LoginItem[item]
})
export default Form.create()(Login);