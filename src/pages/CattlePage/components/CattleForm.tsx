import { Control, Input, DatePicker } from '@/components/form'
import { Button, Form } from 'antd'

const CattleForm = () => {
  return (
    <Form layout='vertical'>
      <div className='mb-11'>
        <h1 className='text-gray-900 fw-bolder mb-3'>Registro de ganado</h1>
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
        <Control label='Nombre de la mamá' name='name'>
          <Input />
        </Control>
        <Control label='Nombre del papá' name='name'>
          <Input />
        </Control>
      </div>
      <div className='flex justify-end'>
        <Button type='primary' htmlType='submit'>
          Crear registro
        </Button>
      </div>
    </Form>
  )
}

export default CattleForm
