import { Select as AntDSelect, type SelectProps } from 'antd'
import { DefaultOptionType } from 'antd/es/select'

const Select = (props: SelectProps) => <AntDSelect {...props} />
export type SelectOptions = DefaultOptionType[]

export default Select
