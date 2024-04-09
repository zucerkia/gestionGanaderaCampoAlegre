import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='grid grid-cols-2 h-full min-h-screen'>
      <div className='bg-primary flex h-full w-full'>
        <p>logo</p>
      </div>
      <div className='flex'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
