import { Button, Form } from 'antd'

import { Control, Password } from '@/components/form'

const PasswordDataForm = () => {
  const handleUpdateSubmit = () => {
    console.log('edit general')
  }

  return (
    <Form layout='vertical' onFinish={handleUpdateSubmit}>
      <h3 className='mb-4'>Actualizar contraseña</h3>
      <div className='grid grid-cols-2 gap-4'>
        <Control label='Contraseña' name='password'>
          <Password />
        </Control>
        <Control label='Confirmar contraseña' name='confirmPassword'>
          <Password />
        </Control>
      </div>

      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Actualizar contraseña
      </Button>
    </Form>
  )
}

export default PasswordDataForm
