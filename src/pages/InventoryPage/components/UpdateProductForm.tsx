import { Control, Input, Select } from '@/components/form'
import { Button, Form } from 'antd'
import { ProductRegisterData } from '../models'

type Props = {
  id: string
  onSubmit: (values: ProductRegisterData) => void
}
const UpdateProductForm = ({ onSubmit, id }: Props) => {
  const [form] = Form.useForm<ProductRegisterData>()

  const handleSubmit = (values: ProductRegisterData) => {
    try {
      console.log(values, id)
      onSubmit(values)
      form.resetFields()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Form form={form} layout='vertical' onFinish={handleSubmit}>
      <div className='mb-11'>
        <h1 className='text-gray-900 fw-bolder mb-3'>Actualiza tu producto</h1>
      </div>
      <div className='grid grid-cols-2 gap-x-4'>
        <Control label='Acción' name='action'>
          <Select
            options={[
              { value: 1, label: 'Sumar al inventario' },
              { value: 2, label: 'Restar del inventario' },
            ]}
          />
        </Control>
        <Control label='Cantidad inicial' name='quantity'>
          <Input />
        </Control>
      </div>
      <div className='flex justify-end'>
        <Button type='primary' htmlType='submit'>
          Actualizar
        </Button>
      </div>
    </Form>
  )
}

export default UpdateProductForm
