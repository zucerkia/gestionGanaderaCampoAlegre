import { Navigate, useRoutes } from 'react-router-dom'

import AppLayout from '@/layouts/AppLayout'
import DashboardPage from '@/pages/DashboardPage'
import CattlePage from '@/pages/CattlePage'

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
          path: 'registros',
          element: <CattlePage />,
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
