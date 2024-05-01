import { Button, Form } from 'antd'
import dayjs from 'dayjs'

import { Card } from '@/components'
import { Control, DatePicker, Input } from '@/components/form'

import Toolbar from './Toolbar'
import { useToggle } from '@/hooks'

import { CowDetails } from '@/models'
import { CattleDetailForm } from '../models'

type Props = {
  data: Pick<CowDetails, 'name' | 'breed' | 'birthday' | 'mother' | 'father'>
}

const GeneralDetailsForm = ({ data }: Props) => {
  const { toggle, isActive } = useToggle(true)
  const [form] = Form.useForm<CattleDetailForm>()

  const handleEditSubmit = () => {
    console.log('edit general')
    form.setFieldsValue({})
    toggle()
  }

  return (
    <Card
      title='Información general'
      className='col-span-2'
      toolbar={<Toolbar isActive={isActive} toggle={toggle} />}
    >
      <Form form={form} layout='vertical' onFinish={handleEditSubmit}>
        <div className='grid grid-cols-[20%_10%_25%_15%_15%] justify-between gap-3'>
          <Control
            onlyInfo={isActive}
            label='Nombre'
            name='name'
            initialValue={data.name}
          >
            <Input disabled={isActive} />
          </Control>
          <Control
            onlyInfo={isActive}
            label='Raza'
            name='breed'
            initialValue={data.breed}
          >
            <Input disabled={isActive} />
          </Control>
          <Control
            onlyInfo={isActive}
            label='Fecha de nacimiento'
            name='birthday'
            initialValue={dayjs(data.birthday)}
          >
            <DatePicker disabled={isActive} />
          </Control>
          <Control
            onlyInfo={isActive}
            label='Padre'
            name='father'
            initialValue={data.father}
          >
            <Input disabled={isActive} />
          </Control>
          <Control
            onlyInfo={isActive}
            label='Madre'
            name='mother'
            initialValue={data.mother}
          >
            <Input disabled={isActive} />
          </Control>
        </div>
        {!isActive && (
          <div className='flex gap-2 col-span-2 justify-end'>
            <Button type='default' onClick={toggle}>
              Cancelar
            </Button>
            <Button type='primary' htmlType='submit'>
              Guardar
            </Button>
          </div>
        )}
      </Form>
    </Card>
  )
}

export default GeneralDetailsForm
