import clsx from 'clsx'
import { DatePicker as AntDDatePicker, type DatePickerProps } from 'antd'

const DatePicker = ({ className, ...rest }: DatePickerProps) => {
  return <AntDDatePicker className={clsx('w-100', className)} {...rest} />
}

export default DatePicker