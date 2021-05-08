const express = require('express');
const amiRoute = require('./ami.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/aws',
    route: amiRoute,
  },
];

// const devRoutes = [
//   // routes available only in development mode
//   {
//     path: '/docs',
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'DEV') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
