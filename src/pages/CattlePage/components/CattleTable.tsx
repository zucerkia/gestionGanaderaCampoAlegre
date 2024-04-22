import type { TableColumnsType } from 'antd'
import { Table } from 'antd'
import { EyeIcon } from '@heroicons/react/24/outline'

import { Cattle, CowData } from '../models'
import { Link } from 'react-router-dom'

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
    { title: 'Fecha de nacimiento', dataIndex: 'birthdate', key: 'birthdate' },
    {
      title: 'Detalle',
      dataIndex: 'details',
      key: 'details',
      align: 'center',
      render: (_, { id }) => (
        <Link className='flex justify-center' to={`${id}`}>
          <EyeIcon className='w-5 h-5' />
        </Link>
      ),
    },
  ]

  return <Table columns={columns} dataSource={cattleData} />
}

export default CattleTable
