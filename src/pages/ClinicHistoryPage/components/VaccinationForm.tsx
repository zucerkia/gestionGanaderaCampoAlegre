import { Button, Form } from 'antd'

import { Control, Input, DatePicker, InputNumber } from '@/components/form'

import { NewVaccination } from '@/models'

import { requiredInput } from '@/utils/fieldValidations'

const VaccinationForm = () => {
  const [form] = Form.useForm<NewVaccination>()

  const handleSubmit = (values: NewVaccination) => {
    try {
      console.log(values)
      form.resetFields()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form
      className='mt-4'
      form={form}
      layout='vertical'
      onFinish={handleSubmit}
    >
      <div className='grid grid-cols-4 gap-x-4'>
        <Control label='Nombre de la vaca' name='cowId' rules={[requiredInput]}>
          <Input />
        </Control>
        <Control label='Vacuna' name='vaccine' rules={[requiredInput]}>
          <InputNumber />
        </Control>
        <Control
          label='Fecha de aplicación'
          name='applyDate'
          rules={[requiredInput]}
        >
          <DatePicker />
        </Control>
        <Control label='Ya fue aplicada?' name='applied'>
          <Input />
        </Control>
      </div>
      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Guardar registro
      </Button>
    </Form>
  )
}

export default VaccinationForm
