// import dayjs from 'dayjs'
// import { Button } from 'antd'
// import { PlusIcon } from '@heroicons/react/24/outline'

import { Heading } from '@/components'

import GeneralDetailsForm from './components/GeneralDetailsForm'
import DateDetailsForm from './components/DateDetailsForm'
import VaccineDatesForm from './components/VaccineDatesForm'
import VaccineHistoryTable from './components/VaccinationHistoryTable'
import { Vaccination } from '@/models'

const vData = {
  aftosaVaccineDate: '2020/12/31',
  brucellosisVaccineDate: '2020/11/30',
}

const dData = {
  birthDate: '2020/02/31',
  dryingDate: '2021/10/31',
  heatDate: '2020/05/31',
  inseminationDate: '2024/04/31',
}

const gData = {
  name: 'test',
  breed: 'raza 1',
  birthday: '1998/05/30',
  mother: 'lola',
  father: 'lalo',
}

const vhData: Vaccination[] = []

const CattleDetailPage = () => {
  return (
    <section>
      <Heading title='Detalles del ganado' />
      <div className='grid grid-cols-2 grid-rows-[min-content] gap-4'>
        <GeneralDetailsForm data={gData} />
        <VaccineHistoryTable data={vhData} />
        <DateDetailsForm data={dData} />
        <VaccineDatesForm data={vData} />
      </div>
    </section>
  )
}

export default CattleDetailPage
