import { Button, Form } from 'antd'

import {
  Control,
  DatePicker,
  InputNumber,
  Select,
  SelectSearch,
  // Switch,
} from '@/components/form'

import { NewVaccination } from '@/models'

import { requiredInput } from '@/utils/fieldValidations'
import type { SelectOptions } from '@/components/form/inputs/Select'

type Props = {
  cattleOptions: SelectOptions
}

const VaccinationForm = ({ cattleOptions }: Props) => {
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
      <div className='grid grid-cols-3 gap-x-4'>
        <Control label='Nombre de la vaca' name='cowId' rules={[requiredInput]}>
          <SelectSearch options={cattleOptions} />
        </Control>
        <Control label='Vacuna' name='vaccine' rules={[requiredInput]}>
          <Select
            options={[
              {
                value: 1,
                label: 'Brucelosis',
              },
              {
                value: 2,
                label: 'Aftosa',
              },
            ]}
          />
        </Control>
        <Control
          label='Fecha de aplicación'
          name='applyDate'
          rules={[requiredInput]}
        >
          <DatePicker />
        </Control>
      </div>
      <Button className='block ml-auto' type='primary' htmlType='submit'>
        Guardar registro
      </Button>
    </Form>
  )
}

export default VaccinationForm
