export default {
  plugins: [
    ['umi-plugin-block-dev', {
      layout: 'ant-design-pro',
      menu:{
        name:'权限管理',
        icon:'tool',
        component:'./index.js',
        path:'/rbac',
        routes:[
          {path:'/rbac',redirect:'/rbac/role'},
          {
            path:'/rbac/role',
            component:'./Role/',
            name:"role"
          },
          {
            path:'/rbac/access',
            component:'./Access/',
            name:'access'
          },
          {
            path:'/rbac/menu',
            component:'./Menu',
            name:'menu'
          }
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
