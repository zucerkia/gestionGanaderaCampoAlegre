import { PropsWithChildren } from 'react'
import dayjs from 'dayjs'

type Props = {
  title: string
  date: string
}
type VaccineNotificationProps = Props & {
  cow: string
  vaccine: string
}
type ProductNotificationProps = Props & {
  product: string
}

const NotificationItem = ({
  children,
  title,
  date,
}: PropsWithChildren<Props>) => (
  <li className='py-3 flex gap-y-2 flex-wrap relative hover:bg-gray-50'>
    <div>
      <div className='flex justify-between'>
        <p className='text-sm font-semibold leading-6'>{title}</p>
        <span className='text-xs opacity-60'>
          {dayjs(date).format('MMMM D, YYYY')}
        </span>
      </div>
      {children}
    </div>
  </li>
)

const VaccineItem = ({ cow, vaccine, ...rest }: VaccineNotificationProps) => (
  <NotificationItem {...rest}>
    <p className='text-xs mt-1 leading-5 text-gray-500'>
      Hoy es dia de vacunar a{' '}
      <span className='text-primary font-bold'>{cow}</span> contra la{' '}
      <span className='text-primary font-bold'>{vaccine}</span>. Recuerda hacer
      el registro en el sistema
    </p>
  </NotificationItem>
)

const ProductItem = ({ product, ...rest }: ProductNotificationProps) => (
  <NotificationItem {...rest}>
    <p className='text-xs mt-1 leading-5 text-gray-500'>
      El producto <span className='text-primary font-bold'>{product}</span> está
      llegando a un nivel bajo en el inventario. Por favor revisa el stock.
    </p>
  </NotificationItem>
)

const Notification = {
  VaccineItem,
  ProductItem,
}

export default Notification
