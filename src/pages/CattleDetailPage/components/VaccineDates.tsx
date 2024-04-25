import { Button, Form } from 'antd'
import dayjs from 'dayjs'

import { Card } from '@/components'
import { Control, DatePicker } from '@/components/form'
import Toolbar from './Toolbar'

import { useToggle } from '@/hooks'

import { CowDetails } from '@/models'

type Props = {
  data: Pick<CowDetails, 'aftosaVaccineDate' | 'brucellosisVaccineDate'>
}

const VaccineDates = ({ data }: Props) => {
  const { toggle, isActive } = useToggle(true)

  const handleEditSubmit = () => {
    console.log('edit dates')
    toggle()
  }

  return (
    <Card
      title='Vacunas'
      className='col-span-1'
      toolbar={<Toolbar isActive={isActive} toggle={toggle} />}
    >
      <Form
        layout='vertical'
        onFinish={handleEditSubmit}
        className='grid grid-cols-2 gap-3'
      >
        <Control
          onlyInfo={isActive}
          label='Fecha Brucelosis'
          name='brucellosisVaccine'
          initialValue={dayjs(data.brucellosisVaccineDate)}
        >
          <DatePicker disabled={isActive} />
        </Control>
        <Control
          onlyInfo={isActive}
          label='Fecha Aftosa'
          name='aftosaVaccine'
          initialValue={dayjs(data.aftosaVaccineDate)}
        >
          <DatePicker disabled={isActive} />
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

export default VaccineDates
