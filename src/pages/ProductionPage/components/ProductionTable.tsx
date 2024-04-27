import type { TableColumnsType } from 'antd'
import { Table } from 'antd'

import { ProductionHistory, ProductionTableData } from '@/models'

type Props = {
  history: ProductionHistory
}

const ProductionTable = ({ history }: Props) => {
  const productionTableData: ProductionTableData[] = history.map((data) => ({
    ...data,
    key: data.id,
  }))

  const columns: TableColumnsType<ProductionTableData> = [
    {
      title: 'Vaca',
      dataIndex: 'cow',
      key: 'cow',
    },
    {
      title: 'Litros producidos',
      dataIndex: 'producedLiters',
      key: 'producedLiters',
    },
    {
      title: 'Fecha de producción',
      dataIndex: 'productionDate',
      key: 'productionDate',
    },
    { title: 'Calidad', dataIndex: 'quality', key: 'quality' },
    { title: 'Comentarios', dataIndex: 'comments', key: 'comments' },
  ]

  return <Table columns={columns} dataSource={productionTableData} />
}

export default ProductionTable
