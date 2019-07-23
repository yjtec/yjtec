export default {
  plugins: [
    ['umi-plugin-block-dev', {
      layout: 'ant-design-pro-user'
    }],
    ['umi-plugin-react', {
      dva: true,
      locale: true,
      antd: true,
    }]
  ],
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  "proxy": {
    "/api": {
      "target": "http://localhost:8000/api",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  }

}
