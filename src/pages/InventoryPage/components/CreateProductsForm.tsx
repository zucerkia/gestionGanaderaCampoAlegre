import { Control, Input, Select } from '@/components/form'
import { Button, Form } from 'antd'
import { ProductRegisterData } from '../models'

type Props = {
  onSubmit: (values: ProductRegisterData) => void
}
const ProductsForm = ({ onSubmit }: Props) => {
  const [form] = Form.useForm<ProductRegisterData>()

  const handleSubmit = (values: ProductRegisterData) => {
    try {
      console.log(values)
      onSubmit(values)
      form.resetFields()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Form form={form} layout='vertical' onFinish={handleSubmit}>
      <div className='mb-11'>
        <h1 className='text-gray-900 fw-bolder mb-3'>Registra tu producto</h1>
      </div>
      <div className='grid grid-cols-2 gap-x-4'>
        <Control className='col-span-2' label='Nombre' name='name'>
          <Input />
        </Control>
        <Control className='col-span-2' label='Marca' name='brand'>
          <Input />
        </Control>
        <Control label='Tipo' name='type'>
          <Select
            options={[
              { value: 1, label: 'Alimento' },
              { value: 2, label: 'Medicina' },
            ]}
          />
        </Control>
        <Control label='Cantidad inicial' name='quantity'>
          <Input />
        </Control>
      </div>
      <div className='flex justify-end'>
        <Button type='primary' htmlType='submit'>
          Agregar
        </Button>
      </div>
    </Form>
  )
}

export default ProductsForm
