export default {
  cjs: 'babel',
  esm: 'babel',
  umd:false,
  entry: 'src/components/index.js',
  extraBabelPlugins:[
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
  ]
}