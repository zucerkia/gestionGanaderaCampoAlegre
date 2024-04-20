import { Avatar, Dropdown, MenuProps } from 'antd'
import { BellAlertIcon } from '@heroicons/react/24/outline'

import { useAuth } from '@/hooks/useAuth'

const Header = () => {
  const { user, logout } = useAuth()

  const items: MenuProps['items'] = [
    {
      label: <button onClick={logout}>Cerrar sesión</button>,
      key: '0',
    },
  ]
  return (
    <nav className='sticky top-0 bg-white'>
      <div className='shadow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div></div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6 gap-4'>
              <BellAlertIcon className='w-5 h-5' />
              <Dropdown menu={{ items }} trigger={['click']}>
                <Avatar className='bg-primary'>
                  {user && user[0].toUpperCase()}
                </Avatar>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
