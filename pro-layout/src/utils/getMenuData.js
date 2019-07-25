import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
function formatter(data,parentName){
  if(!data){
    return null;
  }
  return data
    .map(item => {
      if(!item.name || !item.path){
        return null;
      }
      let local = 'menu';
      //console.log(parentName);
      const result ={
        ...item
      }
      if(item.routes){
        const children = formatter(item.routes,local);
        result.children = children;
      }
      delete result.routes;
      return result;
    })
    .filter(item => item);
}
const filterMenuData = menuData => {
  if(!menuData){
    return [];
  }
  return menuData
          .filter(item => item.name && !item.hideInMenu)
          .filter(item => item);
}
const memoizeOneFormatter = memoizeOne(formatter, isEqual);
const getBreadcrumbNameMap = menuData => {
  if (!menuData) {
    return {};
  }
  const routerMap = {};

  const flattenMenuData = data => {
    data.forEach(menuItem => {
      if (menuItem.children) {
        flattenMenuData(menuItem.children);
      }
      // Reduce memory usage
      routerMap[menuItem.path] = menuItem;
    });
  };
  flattenMenuData(menuData);
  return routerMap;
};

const memoizeOneGetBreadcrumbNameMap = memoizeOne(getBreadcrumbNameMap, isEqual);
export default (routes,path) => {
  const originalMenuData = memoizeOneFormatter(routes,path);
  const menuData = filterMenuData(originalMenuData);
  const breadcrumb = memoizeOneGetBreadcrumbNameMap(originalMenuData);
  return {breadcrumb,menuData};
}