import path from 'path';
export default {
  plugins: [
    ['umi-plugin-react', {
      dva: true,
      locale: true,
      antd: true
    }],
    ['umi-plugin-block-dev', {
      layout: 'ant-design-pro-user'
    }]
  ]
}