import clsx from 'clsx'
import { DatePicker as AntDDatePicker, type DatePickerProps } from 'antd'

const DatePicker = ({ className, ...rest }: DatePickerProps) => (
  <AntDDatePicker className={clsx('w-full', className)} {...rest} />
)

export default DatePicker
