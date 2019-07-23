import React from 'react';
import {Icon} from 'antd';
import styles from './index.css';
export default {
  UserName:{
    props:{
      size:'large',
      id:'userName',
      prefix:<Icon type="user" className={styles.prefixIcon} />,
      placeholder:'请输入用户名'
    },
    rules:[
      {
        required:true,
        message:'请输入用户名'
      }
    ]
  },
  Password:{
    props:{
      size:'large',
      id:'password',
      prefix:<Icon type="lock" className={styles.prefixIcon} />,
      type:"password",
      placeholder:'请输入密码'
    },
    rules:[{
      required:true,
      message:'请输入没密码'
    }]
  }
}