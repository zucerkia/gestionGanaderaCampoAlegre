import { Button, Form } from 'antd'

import { Control, Input, DatePicker } from '@/components/form'

import { newCow } from '@/models'

import { requiredInput } from '@/utils/fieldValidations'

type Props = {
  onSubmit: (values: newCow) => void
}
const CattleForm = ({ onSubmit }: Props) => {
  const [form] = Form.useForm<newCow>()

  const handleSubmit = (values: newCow) => {
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
        <h2 className='text-gray-900 fw-bolder mb-3'>Registra tu ganado</h2>
      </div>
      <div className='grid grid-cols-2 gap-x-4'>
        <Control
          className='col-span-2'
          label='Nombre'
          name='name'
          rules={[requiredInput]}
        >
          <Input />
        </Control>
        <Control name='genre' initialValue='female' hidden>
          <Input />
        </Control>
        <Control label='Raza' name='breed' rules={[requiredInput]}>
          <Input />
        </Control>
        <Control
          label='Fecha de nacimiento'
          name='birthday'
          rules={[requiredInput]}
        >
          <DatePicker />
        </Control>
        <Control label='Madre' name='motherName' rules={[requiredInput]}>
          <Input />
        </Control>
        <Control label='Padre' name='fatherName' rules={[requiredInput]}>
          <Input />
        </Control>
      </div>
      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Crear registro
      </Button>
    </Form>
  )
}

export default CattleForm
