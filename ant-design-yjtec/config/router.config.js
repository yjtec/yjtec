export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      
    ],
  }, // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      {
        path: '/',
        redirect: '/welcome/one',
        authority: ['admin', 'user'],
      },
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'smail',
        routes: [
          {
            path: '/welcome/one',
            name: 'analysis',
            icon: 'smail',
            component: './Welcome',
          },
        ],
      },
    ],
  },
];
