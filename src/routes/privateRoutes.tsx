import { Navigate, useRoutes } from 'react-router-dom'

import AppLayout from '@/layouts/AppLayout'
import { CattlePage, DashboardPage, InventoryPage, UsersPage } from '@/pages'

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
          path: 'registros/:id',
          element: <p>detalle</p>,
        },
        {
          path: 'inventario',
          element: <InventoryPage />,
        },
        {
          path: 'usuarios',
          element: <UsersPage />,
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
