import { Button, Form } from 'antd'
import { Link } from 'react-router-dom'

import { Control, Input, Password } from '@/components/form'

import { useAuth } from '@/hooks/useAuth'

import { UserLogin } from '@/models'

import { requiredInput } from '@/utils/fieldValidations'

const LoginForm = () => {
  const { login } = useAuth()

  const handleSubmit = async (data: UserLogin) => {
    await login(data)
  }
  return (
    <Form layout='vertical' onFinish={handleSubmit}>
      <Control
        label='Número de documento'
        name='identificationNumber'
        rules={[requiredInput]}
      >
        <Input />
      </Control>
      <Control label='Contraseña' name='password' rules={[requiredInput]}>
        <Password />
      </Control>
      <div className='flex justify-end'>
        <Link className='link' to='/auth/recuperar-contrasena'>
          ¿Olvidó la contraseña?
        </Link>
      </div>
      <Button className='w-full mt-6' type='primary' htmlType='submit'>
        Ingresar
      </Button>
      <p className='text-center mt-10'>
        <span className='text-sm opacity-90'>¿Todavía no tienes cuenta? </span>
        <Link className='link' to='/auth/crear-cuenta'>
          ¡Regístrate!
        </Link>
      </p>
    </Form>
  )
}

export default LoginForm
