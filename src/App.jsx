import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Users from './routes/Users';
import User from './routes/User';
import Layout from './routes/Layout';
import PageNotFound from './routes/PageNotFound';
import Albums from './routes/Albums';
import Album from './routes/Album';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/users' replace />,
      },
      {
        path: '/albums',
        id: 'albums',
        element: <Albums />,
      },

      {
        path: '/users',
        id: 'users',
        element: <Users />,
      },
      {
        path: '/users/:userId',
        id: 'user',
        children: [
          {
            path: '/users/:userId',
            element: <User />,
          },
          {
            path: '/users/:userId/albums/:albumId',
            id: 'album',
            element: <Album />,
          },
        ],
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
