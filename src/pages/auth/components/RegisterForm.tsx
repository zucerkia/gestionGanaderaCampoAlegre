import { Button, Form } from 'antd'
import { Link } from 'react-router-dom'

import { Input, Control, Password, Select } from '@/components/form'

const RegisterForm = () => {
  return (
    <>
      <Form layout='vertical'>
        <div className='grid grid-cols-2 gap-x-4'>
          <Control className='col-span-2' label='Nombre completo' name='name'>
            <Input />
          </Control>
          <Control
            className='col-span-2'
            label='Correo electrónico'
            name='email'
          >
            <Input />
          </Control>
          <Control label='Tipo de documento' name='documentType'>
            <Select
              options={[
                {
                  value: 1,
                  label: 'CC',
                },
                {
                  value: 2,
                  label: 'CE',
                },
                {
                  value: 3,
                  label: 'TI',
                },
              ]}
            />
          </Control>
          <Control label='Número de documento' name='documentNumber'>
            <Input />
          </Control>
          <Control label='Contraseña' name='password'>
            <Password />
          </Control>
          <Control label='Confirmar contraseña' name='confirmPassword'>
            <Password />
          </Control>
        </div>
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
