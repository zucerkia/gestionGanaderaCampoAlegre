import { Avatar, Dropdown, MenuProps } from 'antd'
import { Link } from 'react-router-dom'
import { BellAlertIcon } from '@heroicons/react/24/outline'

import NotificationBadge from './Notifications/NotificationBadge'

import { useAuth } from '@/hooks/useAuth'

const Header = () => {
  const { user, logout } = useAuth()

  const items: MenuProps['items'] = [
    {
      label: <Link to='perfil'>Mi perfil</Link>,
      key: '0',
    },
    {
      label: <button onClick={logout}>Cerrar sesión</button>,
      key: '1',
    },
  ]
  return (
    <nav className='sticky top-0 bg-white z-[1]'>
      <div className='shadow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div></div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center md:ml-6 gap-4'>
              <NotificationBadge>
                <BellAlertIcon className='w-5 h-5' />
              </NotificationBadge>
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
