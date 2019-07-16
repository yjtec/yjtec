import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from '/Volumes/work/yj/yjtec/umi-block/config/src/.umi/LocaleWrapper.jsx'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "component": require('../../node_modules/umi-plugin-block-dev/layouts/ant-design-pro').default,
    "routes": [
      {
        "path": "/",
        "component": require('..').default,
        "exact": false
      },
      {
        "component": () => React.createElement(require('/Volumes/work/yj/yjtec/umi-block/config/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Volumes/work/yj/yjtec/umi-block/config/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
<RendererWrapper0>
          <Router history={history}>
      { renderRoutes(routes, props) }
    </Router>
        </RendererWrapper0>
  );
}
