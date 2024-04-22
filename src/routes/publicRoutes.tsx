import { Navigate, useRoutes } from 'react-router-dom'

import AuthLayout from '@/layouts/AuthLayout'
import { ForgotPasswordPage, LoginPage, RegisterPage } from '@/pages/auth'

export const usePublicRoutes = () => {
  const publicRoutes = useRoutes([
    {
      path: '/auth/*',
      element: <AuthLayout />,
      children: [
        {
          path: 'iniciar-sesion',
          element: <LoginPage />,
        },
        {
          path: 'crear-cuenta',
          element: <RegisterPage />,
        },
        {
          path: 'recuperar-contrasena',
          element: <ForgotPasswordPage />,
        },
        {
          path: '*',
          element: <Navigate to='/auth/iniciar-sesion' />,
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
