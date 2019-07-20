export default {
  plugins: [
    ['umi-plugin-block-dev', {
      layout: 'ant-design-pro',
      menu:{
        name:'权限管理',
        icon:'tool',
        routes:[
          {path:'/',redirect:'/role'},
          {path:'/role',component:'./Role/'},
          {path:'/access',component:'./Access/'},
        ]
      }
    }],
    ['umi-plugin-react', {
      dva: true,
      locale: true,
      antd: true,
    }]
  ],
  "proxy": {
    "/api": {
      "target": "http://localhost:8000/api",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }

}
