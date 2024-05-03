import { PropsWithChildren } from 'react'
import { Badge, Drawer } from 'antd'

import Notifications from '.'

import { useToggle } from '@/hooks'

const NotificationsBadge = ({ children }: PropsWithChildren) => {
  const { isActive, toggle } = useToggle(false)
  return (
    <>
      <button onClick={toggle}>
        <Badge count='3' size='small'>
          {children}
        </Badge>
      </button>
      <Drawer title='Notificaciones' open={isActive} onClose={toggle}>
        <Notifications />
      </Drawer>
    </>
  )
}

export default NotificationsBadge
