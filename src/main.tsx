import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error';
import HomePage from './pages/home';
import AdminPage from './pages/admin';
import NotFoundPage from './pages/notfound';
import UnAuthPage from './pages/unauth';

const router = createBrowserRouter([
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
    <RouterProvider router={router} />
  </StrictMode>,
)
