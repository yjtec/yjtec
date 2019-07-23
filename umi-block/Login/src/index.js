import React,{Component} from 'react';
import {connect} from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import styles from './style.less';
import {Login} from 'yjtec';
import {Checkbox} from 'antd';
const {Tab,UserName,Password,Submit} = Login;
@connect(({BLOCK_NAME_CAMEL_CASE,loading})=>({
  BLOCK_NAME_CAMEL_CASE,
  submitting:loading.effects['BLOCK_NAME_CAMEL_CASE/login']
}))
class LoginPage extends Component{
  state ={
    type:'account',
    autoLogin:false
  }
  changeAutoLogin = e =>{
    this.setState({
      autoLogin:e.target.checked
    })
  }
  render(){
    const {BLOCK_NAME_CAMEL_CASE,submitting}  = this.props;
    const {type,autoLogin} = this.state;
    return(
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          >
          <Tab key="account" tab={formatMessage({id:'BLOCK_NAME.login.tab-login-credentials'})}>
            <UserName
              name="userName"
              placeholder={`${formatMessage({ id: 'BLOCK_NAME.login.userName'})}`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'BLOCK_NAME.login.userName.required' }),
                },
              ]}
              />
            <Password 
              name="pwd"
              placeholder={`${formatMessage({ id: 'BLOCK_NAME.login.password'})}`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'BLOCK_NAME.login.password.required' }),
                },
              ]}
            />
          </Tab>

          <Tab key="mobile" tab={formatMessage({ id: 'BLOCK_NAME.login.tab-login-mobile' })}>

          </Tab>
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="BLOCK_NAME.login.remember-me" />
            </Checkbox>
          </div>
          
          <Submit loading={submitting}>
            <FormattedMessage id="BLOCK_NAME.login.login" />
          </Submit>
        </Login>
        
      </div>
    )
  }
}
export default LoginPage;