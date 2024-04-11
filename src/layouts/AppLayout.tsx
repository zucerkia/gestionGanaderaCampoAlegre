import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <main className='py-6 lg:pl-72 bg-dark-white min-h-dvh'>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
