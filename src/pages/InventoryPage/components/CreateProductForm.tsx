import { Control, Input, Select } from '@/components/form'
import { Button, Form } from 'antd'
import { NewProduct } from '../models'
import { useModal } from '@/hooks'

type Props = {
  onSubmit: (product: NewProduct) => void
}
const ProductsForm = ({ onSubmit }: Props) => {
  const [form] = Form.useForm<NewProduct>()
  const { closeModal } = useModal()

  const handleSubmit = (values: NewProduct) => {
    try {
      onSubmit(values)
      form.resetFields()
      closeModal()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Form form={form} layout='vertical' onFinish={handleSubmit}>
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
