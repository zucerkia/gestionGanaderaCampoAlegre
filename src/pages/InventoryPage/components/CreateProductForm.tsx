import { Button, Form } from 'antd'

import { Control, Input, Select, InputNumber } from '@/components/form'

import { NewProduct } from '../models'

import { useModal } from '@/hooks'

import { requiredInput } from '@/utils/fieldValidations'

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
        <Control
          className='col-span-2'
          label='Nombre'
          name='name'
          rules={[requiredInput]}
        >
          <Input />
        </Control>
        <Control
          className='col-span-2'
          label='Marca'
          name='brand'
          rules={[requiredInput]}
        >
          <Input />
        </Control>
        <Control label='Tipo' name='type' rules={[requiredInput]}>
          <Select
            options={[
              { value: 1, label: 'Alimento' },
              { value: 2, label: 'Medicina' },
            ]}
          />
        </Control>
        <Control
          label='Cantidad inicial'
          name='quantity'
          rules={[
            requiredInput,
            // {
            //   type: 'integer',
            // },
            { min: 1, message: 'Debe ser mayor que cero' },
          ]}
        >
          <InputNumber />
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
