import pageRoutes from './router.config';
import slash from 'slash2';
import path from 'path';
const plugins = [
  ['umi-plugin-react', {
    antd: true,
    dva: {
      hmr: true
    },
    local: {
      enable: true,
      default: 'zh-CN',
      baseNavigator: true
    }
  }],
  ['umi-plugin-pro-block', {
    moveMock: true,
    moveService: true,
    modifyRequest: true,
    autoAddMenu: true,
  }, ]
];
export default {
  plugins,
  routes: pageRoutes,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (context.resourcePath.includes('node_modules') || context.resourcePath.includes('ant.design.pro.less') || context.resourcePath.includes('global.less')) {
        return localName;
      }
      const match = context.resourcePath.match(/src(.*)/);
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath).split('/').map(a => a.replace(/([A-Z])/g, '-$1')).map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    },
  },
}