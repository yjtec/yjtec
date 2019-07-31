import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import { Checkbox, Alert, Icon } from 'antd';
import styles from './index.less';
import Login from '@/components/Login';
const {Tab,UserName,Password,Mobile,Submit,Captcha} = Login;
@connect(({ userLogin, loading })=>({
  userLogin,
  submitting:loading.effects['userLogin/login']
}))
class LoginPage extends Component{
  state={
    type:'account',
    autoLogin:true
  }
  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }
  onTabChange = type => {
    this.setState({ type });
  }
  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'userLogin/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  }
  onGetCaptcha = () => {
    return new Promise((resolve,reject) => { 
      this.loginForm.validateFields(['mobile'],{},(err,values) => {
        if(err){
          reject(err);
        }else{
          const {dispatch} = this.props;
          dispatch({
            type: 'userLogin/getCaptcha',
            payload: values.mobile,
          })
          .then(resolve)
          .catch(reject);
        }
      })
    })
  }
  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  )
  render(){
    const {userLogin,submitting} = this.props;
    const {status,type:loginType} = userLogin;
    const {type,autoLogin} = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {this.loginForm = form}}
        >
          <Tab key="account" tab={formatMessage({id:'user-login.login.tab-login-credentials'})}>
            {status == 'error' &&
              loginType == 'account' &&
              !submitting &&
               this.renderMessage(formatMessage({ id: 'user-login.login.message-invalid-credentials' }))
            }
            <UserName
              name="account"
              placeholder={`${formatMessage({ id: 'user-login.login.userName' })}`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'user-login.userName.required' }),
                },
              ]}
            />
            <Password
                name="password"
                placeholder={`${formatMessage({ id: 'user-login.login.password' })}`}
                rules={[
                  {
                    required: true,
                    message: formatMessage({ id: 'user-login.password.required' }),
                  },
                ]}
              />
          </Tab>
          <Tab key="mobile" tab={formatMessage({ id: 'user-login.login.tab-login-mobile' })}>
            <Mobile
              name="mobile"
              placeholder={formatMessage({ id: 'user-login.phone-number.placeholder' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'user-login.phone-number.required' }),
                },
                {
                  pattern: /^1\d{10}$/,
                  message: formatMessage({ id: 'user-login.phone-number.wrong-format' }),
                },
              ]}
            />
            <Captcha
              name="captcha"
              placeholder={formatMessage({ id: 'user-login.verification-code.placeholder' })}
              countDown={5}
              onGetCaptcha={this.onGetCaptcha}
              getCaptchaButtonText={formatMessage({ id: 'user-login.form.get-captcha' })}
              getCaptchaSecondText={formatMessage({ id: 'user-login.captcha.second' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'user-login.verification-code.required' }),
                },
              ]}
            />
          </Tab>
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="user-login.login.remember-me" />
            </Checkbox>
            {/*<a style={{ float: 'right' }} href="">
              <FormattedMessage id="user-login.login.forgot-password" />
            </a>*/}
          </div>
          <Submit loading={submitting}>
            <FormattedMessage id="user-login.login.login" />
          </Submit>
          <div className={styles.other}>
            <FormattedMessage id="user-login.login.sign-in-with" />
            <Icon type="alipay-circle" className={styles.icon} theme="outlined" />
            <Icon type="taobao-circle" className={styles.icon} theme="outlined" />
            <Icon type="weibo-circle" className={styles.icon} theme="outlined" />
            <Link className={styles.register} to="/user/register">
              <FormattedMessage id="user-login.login.signup" />
            </Link>
          </div>
        </Login>
      </div>
    )
  }
}

export default LoginPage;