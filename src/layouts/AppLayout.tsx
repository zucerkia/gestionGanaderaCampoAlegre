import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const AppLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className='lg:pl-72'>
        <Header />
        <main className='py-6 bg-dark-white min-h-[calc(100vh-4rem)]'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
