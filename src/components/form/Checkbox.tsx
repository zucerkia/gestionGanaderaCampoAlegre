import { Checkbox as AntDCheckbox, type CheckboxProps } from 'antd'

const Checkbox = ({ children, ...rest }: CheckboxProps) => {
  return <AntDCheckbox {...rest}>{children}</AntDCheckbox>
}

export default Checkbox
