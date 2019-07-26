function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';

function formatter(data, parentName) {
  if (!data) {
    return null;
  }

  return data.map(function (item) {
    if (!item.name || !item.path) {
      return null;
    }

    var local = 'menu'; //console.log(parentName);

    var result = _objectSpread({}, item);

    if (item.routes) {
      var children = formatter(item.routes, local);
      result.children = children;
    }

    delete result.routes;
    return result;
  }).filter(function (item) {
    return item;
  });
}

var filterMenuData = function filterMenuData(menuData) {
  if (!menuData) {
    return [];
  }

  return menuData.filter(function (item) {
    return item.name && !item.hideInMenu;
  }).filter(function (item) {
    return item;
  });
};

var memoizeOneFormatter = memoizeOne(formatter, isEqual);

var getBreadcrumbNameMap = function getBreadcrumbNameMap(menuData) {
  if (!menuData) {
    return {};
  }

  var routerMap = {};

  var flattenMenuData = function flattenMenuData(data) {
    data.forEach(function (menuItem) {
      if (menuItem.children) {
        flattenMenuData(menuItem.children);
      } // Reduce memory usage


      routerMap[menuItem.path] = menuItem;
    });
  };

  flattenMenuData(menuData);
  return routerMap;
};

var memoizeOneGetBreadcrumbNameMap = memoizeOne(getBreadcrumbNameMap, isEqual);
export default (function (routes, path) {
  var originalMenuData = memoizeOneFormatter(routes, path);
  var menuData = filterMenuData(originalMenuData);
  var breadcrumb = memoizeOneGetBreadcrumbNameMap(originalMenuData);
  return {
    breadcrumb: breadcrumb,
    menuData: menuData
  };
});