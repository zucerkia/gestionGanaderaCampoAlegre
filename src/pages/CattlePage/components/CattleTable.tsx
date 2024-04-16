import type { TableColumnsType } from 'antd'
import { Space, Table } from 'antd'

import { Cattle } from '@/models/Cattle'
import { CowData } from '../models'

type Props = {
  cattle: Cattle
}

const CattleTable = ({ cattle }: Props) => {
  const cattleData: CowData[] = cattle.map((cow) => ({
    ...cow,
    key: cow.id,
  }))

  const columns: TableColumnsType<CowData> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    { title: 'Raza', dataIndex: 'breed', key: 'breed' },
    {
      title: 'Género',
      dataIndex: 'genre',
      key: 'genre',
    },
    { title: 'Fecha de nacimiento', dataIndex: 'birthdate', key: 'birthdate' },
    {
      title: 'Detalle',
      dataIndex: 'details',
      key: 'details',
      render: () => <Space size='middle'>ojo</Space>,
    },
  ]

  return <Table columns={columns} dataSource={cattleData} />
}

export default CattleTable
