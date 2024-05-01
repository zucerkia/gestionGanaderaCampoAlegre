import { Select, type SelectProps } from 'antd'

const SelectSearch = (props: SelectProps) => (
  <Select
    showSearch
    optionFilterProp='children'
    filterOption={(input, option) =>
      ((option?.label as string) ?? '').includes(input)
    }
    {...props}
  />
)

export default SelectSearch
