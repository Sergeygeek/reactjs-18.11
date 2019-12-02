import { Messenger } from 'components/Messenger';
import { AboutPage } from 'pages/AboutPage';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Messenger,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/chats/:id', // http://localhost:8080/chats/1
    exact: true,
    component: Messenger,
  }
]