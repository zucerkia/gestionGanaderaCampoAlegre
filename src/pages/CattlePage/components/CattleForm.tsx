import { Control, Input, DatePicker } from '@/components/form'
import { Button, Form } from 'antd'
import { CattleRegisterData } from '../models'

type Props = {
  onSubmit: (values: CattleRegisterData) => void
}
const CattleForm = ({ onSubmit }: Props) => {
  const [form] = Form.useForm<CattleRegisterData>()

  const handleSubmit = (values: CattleRegisterData) => {
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
        <h1 className='text-gray-900 fw-bolder mb-3'>Registra tu ganado</h1>
      </div>
      <div className='grid grid-cols-2 gap-x-4'>
        <Control className='col-span-2' label='Nombre' name='name'>
          <Input />
        </Control>
        <Control label='Raza' name='breed'>
          <Input />
        </Control>
        <Control label='Fecha de nacimiento' name='birthdate'>
          <DatePicker />
        </Control>
        <Control label='Madre' name='motherName'>
          <Input />
        </Control>
        <Control label='Padre' name='fatherName'>
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
