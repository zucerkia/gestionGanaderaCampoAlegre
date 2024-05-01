import { Card } from '@/components'
import { Table, TableColumnsType } from 'antd'

import { VaccinationTableData } from '../models'
import { Vaccination } from '@/models'

type Props = {
  data: Vaccination[]
}

const VaccinationHistoryTable = ({ data }: Props) => {
  const vaccinesData: VaccinationTableData[] = data.map((vaccine) => ({
    ...vaccine,
    key: vaccine.id,
  }))

  const columns: TableColumnsType<VaccinationTableData> = [
    {
      title: 'Fecha',
      dataIndex: 'applyDate',
      key: 'applyDate',
    },
    { title: 'Vacuna', dataIndex: 'vaccine', key: 'vaccine' },
  ]

  return (
    <Card title='Historial de vacunas' className='row-span-2'>
      <Table columns={columns} dataSource={vaccinesData} />
    </Card>
  )
}

export default VaccinationHistoryTable
