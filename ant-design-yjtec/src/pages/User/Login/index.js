import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import { Checkbox, Alert, Icon } from 'antd';
import styles from './index.less';
import Login from '@/components/Login';
const {Tab,UserName,Password,Mobile,Submit,Captcha} = Login;
@connect(({ login, loading })=>({
  login,
  submitting:loading.effects['login/login']
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
        type: 'login/login',
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
            type: 'login/getCaptcha',
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
    const {login,submitting} = this.props;
    const {status,type:loginType} = login;
    console.log(this.props);
    const {type,autoLogin} = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {this.loginForm = form}}
        >
          <Tab key="account" tab={formatMessage({id:'login.login.tab-login-credentials'})}>
            {status == 'error' &&
              loginType == 'account' &&
              !submitting &&
               this.renderMessage(formatMessage({ id: 'login.login.message-invalid-credentials' }))
            }
            <UserName
              name="account"
              placeholder={`${formatMessage({ id: 'login.login.userName' })}`}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'login.userName.required' }),
                },
              ]}
            />
            <Password
                name="password"
                placeholder={`${formatMessage({ id: 'login.login.password' })}`}
                rules={[
                  {
                    required: true,
                    message: formatMessage({ id: 'login.password.required' }),
                  },
                ]}
              />
          </Tab>
          <Tab key="mobile" tab={formatMessage({ id: 'login.login.tab-login-mobile' })}>
            <Mobile
              name="mobile"
              placeholder={formatMessage({ id: 'login.phone-number.placeholder' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'login.phone-number.required' }),
                },
                {
                  pattern: /^1\d{10}$/,
                  message: formatMessage({ id: 'login.phone-number.wrong-format' }),
                },
              ]}
            />
            <Captcha
              name="captcha"
              placeholder={formatMessage({ id: 'login.verification-code.placeholder' })}
              countDown={5}
              onGetCaptcha={this.onGetCaptcha}
              getCaptchaButtonText={formatMessage({ id: 'login.form.get-captcha' })}
              getCaptchaSecondText={formatMessage({ id: 'login.captcha.second' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'login.verification-code.required' }),
                },
              ]}
            />
          </Tab>
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              <FormattedMessage id="login.login.remember-me" />
            </Checkbox>
            {/*<a style={{ float: 'right' }} href="">
              <FormattedMessage id="login.login.forgot-password" />
            </a>*/}
          </div>
          <Submit loading={submitting}>
            <FormattedMessage id="login.login.login" />
          </Submit>
          <div className={styles.other}>
            <FormattedMessage id="login.login.sign-in-with" />
            <Icon type="alipay-circle" className={styles.icon} theme="outlined" />
            <Icon type="taobao-circle" className={styles.icon} theme="outlined" />
            <Icon type="weibo-circle" className={styles.icon} theme="outlined" />
            <Link className={styles.register} to="/user/register">
              <FormattedMessage id="login.login.signup" />
            </Link>
          </div>
        </Login>
      </div>
    )
  }
}

export default LoginPage;