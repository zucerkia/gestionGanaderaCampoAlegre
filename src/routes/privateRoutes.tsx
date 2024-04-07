import { Navigate, useRoutes } from 'react-router-dom'

import AppLayout from '@/layouts/AppLayout'
import DashboardPage from '@/pages/DashboardPage'

export const usePrivateRoutes = () => {
  const privateRoutes = useRoutes([
    {
      path: '/*',
      element: <AppLayout />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
        {
          path: '*',
          element: <Navigate to='/dashboard' />,
        },
      ],
    },
  ])

  return privateRoutes
}
