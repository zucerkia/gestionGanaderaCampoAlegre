import { Control, Input, Select } from '@/components/form'
import { Button, Form } from 'antd'
import { Product, UpdateProduct } from '../models'

type Props = {
  id: string
  onSubmit: (id: string, values: Partial<Product>) => void
}
const UpdateProductForm = ({ onSubmit, id }: Props) => {
  const [form] = Form.useForm<UpdateProduct>()

  const handleSubmit = (values: UpdateProduct) => {
    try {
      onSubmit(id, values)
      form.resetFields()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Form form={form} layout='vertical' onFinish={handleSubmit}>
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
      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Actualizar
      </Button>
    </Form>
  )
}

export default UpdateProductForm
