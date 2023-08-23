import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import NotFound from './NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
