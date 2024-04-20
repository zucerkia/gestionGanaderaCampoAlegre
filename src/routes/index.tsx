import { BrowserRouter } from 'react-router-dom'
import { usePrivateRoutes } from './privateRoutes'
import { usePublicRoutes } from './publicRoutes'
import { useAuth } from '@/hooks/useAuth'

const { BASE_URL } = import.meta.env

const AppRoutes = () => {
  const PublicRoutes = usePublicRoutes
  const PrivateRoutes = usePrivateRoutes
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter basename={BASE_URL}>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  )
}

export { AppRoutes }
