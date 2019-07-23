const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname,'/');

const componentDir = 'src';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const cModuleMap = cModuleNames.reduce((prev,name)=>{
  console.log(path.join(rootDir,`${componentDir}/${name}/index.js`));
  //prev[name] = path.join(rootDir,`${componentDir}/${name}/index.js`);
},{});

return false;
module.exports = {
  // 入口处设置为多入口，即每一个组件都作为一个入口，这样输出的可以是拆分后的组件
  entry: {
    index: './src/index.js',
  },
  mode:"development",
  output: {
    filename: '[name]/index.js',
    // output.library 和 output.libraryTarget 一起使用 对外暴露 library 及定义输出组件库格式
    library: ['yjtec', '[name]'], 
    libraryTarget: 'umd',
    publicPath: '/'
  },
}