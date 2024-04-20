import { Dropdown, Table } from 'antd'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import type { MenuProps, TableColumnsType } from 'antd'

import { Inventory, ProductTableData } from '../models'

type Props = {
  inventory: Inventory
  onUpdate: (id: string) => void
  onDelete: (id: string) => void
}

const ProductsTable = ({ inventory, onDelete, onUpdate }: Props) => {
  const InventoryData: ProductTableData[] = inventory.map((item) => ({
    ...item,
    key: item.id,
  }))

  const columns: TableColumnsType<ProductTableData> = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    { title: 'Marca', dataIndex: 'brand', key: 'brand' },
    { title: 'Cantidad', dataIndex: 'quantity', key: 'quantity' },
    {
      title: 'Acciones',
      dataIndex: 'details',
      key: 'actions',
      render: (_, { id }) => {
        const items: MenuProps['items'] = [
          { key: '1', label: 'Actualizar', onClick: () => onUpdate(id) },
          { key: '2', label: 'Eliminar', onClick: () => onDelete(id) },
        ]
        return (
          <Dropdown menu={{ items }}>
            <EllipsisVerticalIcon className='h-5 w-5' />
          </Dropdown>
        )
      },
    },
  ]

  return <Table columns={columns} dataSource={InventoryData} />
}

export default ProductsTable
