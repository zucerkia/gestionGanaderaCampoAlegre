import { Button, Form } from 'antd'

import {
  Control,
  Input,
  DatePicker,
  InputNumber,
  TextArea,
  Select,
} from '@/components/form'

import { newProduction } from '@/models'

import { requiredInput } from '@/utils/fieldValidations'

type Props = {
  onSubmit: (values: newProduction) => void
}
const ProductionForm = ({ onSubmit }: Props) => {
  const [form] = Form.useForm<newProduction>()

  const handleSubmit = (values: newProduction) => {
    try {
      onSubmit(values)
      form.resetFields()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Form form={form} layout='vertical' onFinish={handleSubmit}>
      <div className='mb-11'>
        <h2 className='text-gray-900 fw-bolder mb-3'>Registra tu producción</h2>
      </div>
      <div className='grid grid-cols-2 gap-x-4'>
        <Control label='Vaca' name='cow' rules={[requiredInput]}>
          <Select
            showSearch
            optionFilterProp='children'
            filterOption={(input, option) =>
              ((option?.label as string) ?? '').includes(input)
            }
            options={[
              { value: '01', label: 'vaca 1' },
              { value: '02', label: 'vaca 2' },
            ]}
          />
        </Control>
        <Control
          label='Litros producidos'
          name='producedLiters'
          rules={[requiredInput]}
        >
          <InputNumber />
        </Control>
        <Control
          label='Fecha de producción'
          name='productionDate'
          rules={[requiredInput]}
        >
          <DatePicker />
        </Control>
        <Control label='Calidad' name='quality' rules={[requiredInput]}>
          <Input />
        </Control>
        <Control
          className='col-span-2'
          label='Comentarios'
          name='comments'
          rules={[requiredInput]}
        >
          <TextArea />
        </Control>
      </div>
      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Registrar
      </Button>
    </Form>
  )
}

export default ProductionForm
