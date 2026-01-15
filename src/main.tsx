import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './screens/error';
import HomePage from './screens/home';
import AdminPage from './screens/admin';
import NotFoundPage from './screens/notfound';
import UnAuthPage from './screens/unauth';

const pages = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notfound",
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/unauth",
    element: <UnAuthPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={pages} />
  </StrictMode>,
)
