import { Button, Form } from 'antd'

import {
  Control,
  Input,
  DatePicker,
  InputNumber,
  TextArea,
} from '@/components/form'

import { NewClinicRegister } from '@/models'

import { requiredInput } from '@/utils/fieldValidations'

const ClinicHistoryForm = () => {
  const [form] = Form.useForm<NewClinicRegister>()

  const handleSubmit = (values: NewClinicRegister) => {
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
        <Control
          className='col-span-2'
          label='Nombre de la vaca'
          name='cowId'
          rules={[requiredInput]}
        >
          <Input />
        </Control>
        <Control
          className='col-span-2'
          label='peso'
          name='weight'
          rules={[requiredInput]}
        >
          <InputNumber />
        </Control>
        <Control
          className='col-span-2'
          label='Condición corporal'
          name='bodyCondition'
          rules={[requiredInput]}
        >
          <Input />
        </Control>
        <Control
          className='col-span-[2]'
          label='Inicio de enfermedad'
          name='startIllnessDate'
          rules={[requiredInput]}
        >
          <DatePicker />
        </Control>
        <Control
          className='col-span-[3]'
          label='Fin de enfermedad'
          name='finishIllnessDate'
        >
          <DatePicker />
        </Control>
        <Control
          className='col-span-4'
          label='Diagnostico'
          name='diagnostic'
          rules={[requiredInput]}
        >
          <TextArea />
        </Control>
        <Control
          className='col-span-4'
          label='Evolución'
          name='evolution'
          rules={[requiredInput]}
        >
          <TextArea />
        </Control>
        <Control
          className='col-span-4'
          label='Comentarios'
          name='comments'
          rules={[requiredInput]}
        >
          <TextArea />
        </Control>
      </div>
      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Guardar registro
      </Button>
    </Form>
  )
}

export default ClinicHistoryForm
