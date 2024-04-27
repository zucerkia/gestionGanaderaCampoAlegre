import { type InputNumberProps, InputNumber as AntDInputNumber } from 'antd'
import clsx from 'clsx'

const InputNumber = ({ className, ...rest }: InputNumberProps) => (
  <AntDInputNumber
    className={clsx('w-full', className)}
    size='middle'
    {...rest}
  />
)

export default InputNumber
