import { Input } from 'antd'
import { type PasswordProps } from 'antd/es/input'

const Password = (props: PasswordProps) => (
  <Input.Password size='middle' {...props} />
)

export default Password
