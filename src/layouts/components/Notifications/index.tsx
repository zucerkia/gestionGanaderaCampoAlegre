import { Tabs, type TabsProps } from 'antd'
import Notification from './NotificationItem'

const VaccineNotifications = () => (
  <ul role='list' className='divide-y divide-gray-100'>
    <Notification.VaccineItem
      title='Vacuna'
      cow='Lola'
      date='2023/01/24'
      vaccine='Brucelosis'
    />
  </ul>
)

const ProductNotifications = () => (
  <ul role='list' className='divide-y divide-gray-100'>
    <Notification.ProductItem
      title='Producto escaso'
      date={Date()}
      product='queso'
    />
  </ul>
)

const Notifications = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Ganado',
      children: <VaccineNotifications />,
    },
    {
      key: '2',
      label: 'Inventario',
      children: <ProductNotifications />,
    },
  ]

  return (
    <section>
      <Tabs defaultActiveKey='1' items={items} />
    </section>
  )
}

export default Notifications
