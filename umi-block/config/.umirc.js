export default {
  plugins: [
    ['umi-plugin-block-dev', {
      layout: 'ant-design-pro',
      menu:{
        name:'demo',
        icon:'home'
      }
    }],
    ['umi-plugin-react', {
      dva: true,
      locale: true,
      antd: true,
    }]
  ],
}
