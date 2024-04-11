import { Button, Form } from 'antd'
import { Link } from 'react-router-dom'

import { Input, Password } from '@/components/form'

const LoginForm = () => {
  return (
    <>
      <Form layout='vertical'>
        <Input label='Número de documento' name='identificationNumber' />
        <Password label='Contraseña' name='password' />
        <div className='flex justify-end'>
          <Link className='link' to='/auth/recuperar-contrasena'>
            ¿Olvidó la contraseña?
          </Link>
        </div>
        <Button className='w-full mt-6' type='primary' htmlType='submit'>
          Ingresar
        </Button>
        <p className='text-center mt-10'>
          <span className='text-sm opacity-90'>
            ¿Todavía no tienes cuenta?{' '}
          </span>
          <Link className='link' to='/auth/crear-cuenta'>
            ¡Regístrate!
          </Link>
        </p>
      </Form>
    </>
  )
}

export default LoginForm
