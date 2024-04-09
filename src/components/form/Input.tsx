import { FormItemProps, Input as AntDInput } from 'antd'

import Label from './Label'

const Input = (props: FormItemProps) => (
  <Label {...props}>
    <AntDInput />
  </Label>
)

export default Input
