import { BrowserRouter } from 'react-router-dom'
import { usePrivateRoutes } from './privateRoutes'
import { usePublicRoutes } from './publicRoutes'

const { BASE_URL } = import.meta.env

const AppRoutes = () => {
  const PublicRoutes = usePublicRoutes
  const PrivateRoutes = usePrivateRoutes

  const isAuthenticated = true
  return (
    <BrowserRouter basename={BASE_URL}>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  )
}

export { AppRoutes }
