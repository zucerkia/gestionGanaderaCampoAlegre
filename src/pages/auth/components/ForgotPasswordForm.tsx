import { Button, Form } from 'antd'
import { Link } from 'react-router-dom'

import { Input, Control } from '@/components/form'

const ForgotPasswordForm = () => {
  return (
    <>
      <Form layout='vertical'>
        <Control className='col-span-2' label='Correo electrónico' name='email'>
          <Input />
        </Control>
        <Control
          className='col-span-2'
          label='Confirmar correo electrónico'
          name='confirmEmail'
        >
          <Input />
        </Control>
        <Button className='w-full mt-6' type='primary' htmlType='submit'>
          Recuperar contraseña
        </Button>
        <p className='text-center mt-10'>
          <span className='text-sm opacity-90'>¿Ya tienes una cuenta? </span>
          <Link className='link' to='/auth/iniciar-sesion'>
            ¡Ingresa!
          </Link>
        </p>
      </Form>
    </>
  )
}

export default ForgotPasswordForm
