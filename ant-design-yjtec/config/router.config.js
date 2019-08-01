export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user/login',
        component: './user/login',
      },
    ],
  }, // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        redirect: '/welcome/one',
      },
      {
        name: 'rbac',
        path: '/rbac',
        component: './Rbac',
        routes: [
          {path:'/rbac',redirect:'/rbac/role'},
          {
            name: 'role',
            path: '/rbac/role',
            component: './Rbac/Role',
          },
          {
            name: 'access',
            path: '/rbac/access',
            component: './Rbac/Access',
          },
          {
            name: 'menu',
            path: '/rbac/menu',
            component: './Rbac/Menu',
          },          
        ],
      },
      {
        name: 'exception/403',
        path: '/exception/403',
        hideInMenu: true,
        component: './Exception/403',
      },
    ],
  },
];
