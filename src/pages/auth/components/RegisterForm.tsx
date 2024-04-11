import { Button, Form } from 'antd'
import { Link } from 'react-router-dom'

import { Input, Password } from '@/components/form'

const RegisterForm = () => {
  return (
    <>
      <Form layout='vertical'>
        <Input label='Nombre completo' name='name' />
        <Input label='Correo electrónico' name='email' />
        <Input label='Tipo de documento' name='documentType' />
        <Input label='Número de documento' name='documentNumber' />
        <Password label='Contraseña' name='password' />
        <Password label='Confirmar contraseña' name='confirmPassword' />
        <Button className='w-full mt-6' type='primary' htmlType='submit'>
          Ingresar
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

export default RegisterForm
