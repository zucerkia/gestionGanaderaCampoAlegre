import { Button, Form } from 'antd'
import dayjs from 'dayjs'

import { Card } from '@/components'
import { Control, DatePicker } from '@/components/form'
import Toolbar from './Toolbar'

import { useToggle } from '@/hooks'

import { CowDetails } from '@/models'

type Props = {
  data: Pick<
    CowDetails,
    'heatDate' | 'birthDate' | 'dryingDate' | 'inseminationDate'
  >
}

const DateDetailsForm = ({ data }: Props) => {
  const { toggle, isActive } = useToggle(true)

  const handleEditSubmit = () => {
    console.log('edit dates')
    toggle()
  }

  return (
    <Card
      title='Fechas de control'
      className='col-start-2'
      toolbar={<Toolbar isActive={isActive} toggle={toggle} />}
    >
      <Form
        layout='vertical'
        onFinish={handleEditSubmit}
        className='grid grid-cols-2 gap-3'
        disabled={isActive}
      >
        <Control
          onlyInfo={isActive}
          label='Fecha de celo'
          name='heatDate'
          initialValue={dayjs(data.heatDate)}
        >
          <DatePicker />
        </Control>
        <Control
          onlyInfo={isActive}
          label='Fecha de inseminación'
          name='inseminationDate'
          initialValue={dayjs(data.inseminationDate)}
        >
          <DatePicker />
        </Control>
        <Control
          onlyInfo={isActive}
          label='Fecha de secado'
          name='dryingDate'
          initialValue={dayjs(data.dryingDate)}
        >
          <DatePicker />
        </Control>
        <Control
          onlyInfo={isActive}
          label='Fecha de parto'
          name='birthDate'
          initialValue={dayjs(data.birthDate)}
        >
          <DatePicker />
        </Control>
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

export default DateDetailsForm
