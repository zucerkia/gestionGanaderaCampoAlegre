import { FormItemProps, Input } from 'antd'
import Label from './Label'

const Password = (props: FormItemProps) => (
  <Label {...props}>
    <Input.Password size='middle' />
  </Label>
)

export default Password
