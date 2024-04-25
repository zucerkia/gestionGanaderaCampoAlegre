import { Form, FormItemProps } from 'antd'
import clsx from 'clsx'

import styles from './styles.module.scss'

interface ControlProps extends FormItemProps {
  onlyInfo?: boolean
}

const { infoInput } = styles
const Control = ({
  onlyInfo = false,
  className,
  children,
  ...props
}: ControlProps) => (
  <Form.Item
    className={clsx('font-medium', { [infoInput]: onlyInfo }, className)}
    {...props}
  >
    {children}
  </Form.Item>
)

export default Control
