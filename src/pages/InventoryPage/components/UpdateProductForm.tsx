import { Button, Form } from 'antd'

import { Control, Input, Select, InputNumber } from '@/components/form'

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
        <Control label='Nombre' name='name'>
          <Input />
        </Control>
        <Control label='Marca' name='brand'>
          <Input />
        </Control>
        <Control label='Acción' name='action'>
          <Select
            options={[
              { value: 1, label: 'Sumar al inventario' },
              { value: 2, label: 'Restar del inventario' },
            ]}
          />
        </Control>
        <Control
          label='Cantidad'
          name='quantity'
          rules={[
            {
              type: 'integer',
              min: 0,
            },
          ]}
        >
          <InputNumber />
        </Control>
      </div>
      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Actualizar
      </Button>
    </Form>
  )
}

export default UpdateProductForm
