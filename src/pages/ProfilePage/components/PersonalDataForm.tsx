import { Button, Form, Input, Select } from 'antd'

import { Control } from '@/components/form'
// import { SecureUser } from '@/models'

const PersonalDataForm = () => {
  // const form = Form.useForm<SecureUser>()
  const handleUpdateSubmit = () => {
    console.log('edit general')
  }

  return (
    <Form
      // form={form}
      layout='vertical'
      onFinish={handleUpdateSubmit}
    >
      <div className='grid grid-cols-2 gap-4'>
        <Control label='Nombre completo' name='name'>
          <Input />
        </Control>
        <Control
          label='Correo electrónico'
          name='email'
          rules={[
            {
              type: 'email',
            },
          ]}
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
      </div>
      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Actualizar datos
      </Button>
    </Form>
  )
}

export default PersonalDataForm
