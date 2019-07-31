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
        path: '/welcome',
        name: 'welcome',
        icon: 'smail',
        authority: ['admin', 'user', 'bbb'],
      },
      {
        name: 'rbac',
        path: '/rbac',
        component: './Rbac',
        routes: [
          {
            name: 'role',
            path: '/rbac/role',
            component: './Rbac/Role',
          },
          {
            name: 'rbac',
            path: '/rbac',
            component: './Rbac',
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
