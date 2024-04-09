import { Form, FormItemProps } from 'antd'
import clsx from 'clsx'

const Label = ({ className, children, ...props }: FormItemProps) => (
  <Form.Item className={clsx('font-medium', className)} {...props}>
    {children}
  </Form.Item>
)

export default Label
