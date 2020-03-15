import Home from '../pages/Home/Home';
import Streams from '../pages/Streams/Streams';

export const ROUTES = [
    {
      path: "/",
      key: 'Home',
      exact: true,
      component: Home
    },
    {
      path: "/content",
      key: 'Streams',
      component: Streams
    }
  ];