import { Tabs, type TabsProps } from 'antd'

import { Card, Heading } from '@/components'
import ClinicHistoryForm from './components/ClinicHistoryForm'
import VaccinationForm from './components/VaccinationForm'

const opt = [
  { value: '01', label: 'vaca 1' },
  { value: '02', label: 'vaca 2' },
]

const ClinicHistoryPage = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'General',
      children: <ClinicHistoryForm cattleOptions={opt} />,
    },
    {
      key: '2',
      label: 'Vacunas',
      children: <VaccinationForm cattleOptions={opt} />,
    },
  ]
  return (
    <section>
      <Heading title='Información clínica' />
      <Card title='Reportes'>
        <Tabs defaultActiveKey='1' items={items} />
      </Card>
    </section>
  )
}

export default ClinicHistoryPage
