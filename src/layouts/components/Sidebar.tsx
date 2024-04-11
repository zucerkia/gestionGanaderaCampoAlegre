import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import Logo from '@/assets/logo-title.svg?react'

const Sidebar = () => {
  return (
    <>
      <div className='lg:flex lg:flex-col md:hidden lg:fixed lg:inset-y-0 lg:z-50 lg:w-72'>
        <div className='p-6 bg-primary overflow-y-auto border-gray-400 border-r-[1px] gap-y-5 flex-col flex-grow flex'>
          <div className='flex h-16 flex-shrink-0 items-center'>
            <Logo className='ml-2 h-7 fill-white' />
          </div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='space-y-1'>
                  <li className=''>
                    <a
                      href=''
                      className='font-semibold leading-6 text-sm p-2 flex gap-x-3 rounded-md bg-primary-dark text-white'
                    >
                      <HomeIcon className='h-6 w-6 flex-shrink-0' />
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href=''
                      className='font-semibold leading-6 text-sm p-2 flex gap-x-3 rounded-md text-dark-white'
                    >
                      <UserIcon className='h-6 w-6 flex-shrink-0' />
                      Team
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div></div>
    </>
  )
}

export default Sidebar
