import { Outlet } from 'react-router-dom'
// import Logo from '@/assets/logo.svg?react'
import Logo from '@/assets/logo.svg?react'

const AuthLayout = () => {
  return (
    <div className='grid grid-cols-2 h-full min-h-screen'>
      <div className='bg-primary flex h-full w-full items-center justify-center'>
        <div className='w-[500px] h-[500px]'>
          <Logo className='w-full h-full fill-white' />
        </div>
      </div>
      <div className='flex'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
