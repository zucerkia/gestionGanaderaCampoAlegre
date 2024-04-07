import { Navigate, useRoutes } from 'react-router-dom'

import AuthLayout from '@/layouts/AuthLayout'
import { LoginPage, RegisterPage } from '@/pages/auth'

export const usePublicRoutes = () => {
  const publicRoutes = useRoutes([
    {
      path: 'auth/*',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
        {
          path: '*',
          element: <Navigate to='/auth/login' />,
        },
      ],
    },
    {
      path: '404',
      element: '404',
    },
    {
      path: '*',
      element: <Navigate to='/auth' />,
    },
  ])

  return publicRoutes
}
