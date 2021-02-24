// import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
// import Home from '../pages/Home/index';
// import About from '../pages/About/index';
// import Login from '../pages/Login/index';
import Test01 from '../components/Home/Test01';
import Test02 from '../components/Home/Test02';

//
import { Home, Login, About } from '../pages/index.js';

const routerConfig = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/home',
        component: Home,
        routes: [
          {
            path: '/home/test01',
            exact: true,
            component: Test01
          },
          {
            path: '/home/test02',
            component: Test02
          }
        ]
      }
    ]
  }
]

export default routerConfig