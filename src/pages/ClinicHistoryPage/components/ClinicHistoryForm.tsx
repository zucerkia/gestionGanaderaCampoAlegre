import { Button, Form, Select } from 'antd'

import {
  Control,
  Input,
  DatePicker,
  InputNumber,
  TextArea,
  SelectSearch,
} from '@/components/form'

import { NewClinicRegister } from '@/models'

import { requiredInput } from '@/utils/fieldValidations'
import type { SelectOptions } from '@/components/form/inputs/Select'

type Props = {
  cattleOptions: SelectOptions
}

const ClinicHistoryForm = ({ cattleOptions }: Props) => {
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
          className='col-span-1'
          label='Nombre de la vaca'
          name='cowId'
          rules={[requiredInput]}
        >
          <SelectSearch options={cattleOptions} />
        </Control>
        <Control
          className='col-span-1'
          label='peso'
          name='weight'
          rules={[requiredInput]}
        >
          <InputNumber />
        </Control>
        <Control
          className='col-span-1'
          label='Condición corporal'
          name='bodyCondition'
          rules={[requiredInput]}
        >
          <Select
            options={Array(5)
              .fill('')
              .map((_, idx) => ({
                value: idx + 1,
                label: idx + 1,
              }))}
          />
        </Control>
        <Control
          className='col-span-1'
          label='Evolución'
          name='evolution'
          rules={[requiredInput]}
        >
          <Select
            options={[
              {
                value: 1,
                label: 'Ha mejorado',
              },
              {
                value: 2,
                label: 'Ha empeorado',
              },
              {
                value: 3,
                label: 'Sigue igual',
              },
            ]}
          />
        </Control>
        <Control
          className='col-span-2'
          label='Medicamentos suministrados'
          name='medicine'
        >
          <SelectSearch
            mode='multiple'
            options={[
              {
                value: 1,
                label: 'Acetaminofem',
              },
              {
                value: 2,
                label: 'medicamento 1',
              },
              {
                value: 3,
                label: 'medicamento 3',
              },
            ]}
          />
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
          label='Comentarios adicionales'
          name='comments'
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
