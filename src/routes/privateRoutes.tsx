import { Navigate, useRoutes } from 'react-router-dom'

import AppLayout from '@/layouts/AppLayout'
import {
  CattlePage,
  CattleDetailPage,
  ClinicHistoryPage,
  DashboardPage,
  InventoryPage,
  ProductionPage,
  ProfilePage,
} from '@/pages'

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
          element: <CattleDetailPage />,
        },
        {
          path: 'inventario',
          element: <InventoryPage />,
        },
        {
          path: 'perfil',
          element: <ProfilePage />,
        },
        {
          path: 'historia-clinica',
          element: <ClinicHistoryPage />,
        },
        {
          path: 'produccion',
          element: <ProductionPage />,
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
