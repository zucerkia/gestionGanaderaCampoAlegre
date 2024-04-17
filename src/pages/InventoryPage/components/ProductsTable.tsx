import { useState } from 'react'
import { Dropdown, Table } from 'antd'
import type { MenuProps, TableColumnsType } from 'antd'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

import UpdateProductForm from './UpdateProductForm'

import { useModal } from '@/hooks'

import { Inventory } from '@/models/Inventory'
import { ProductData } from '../models'

type Props = {
  inventory: Inventory
}

const ProductsTable = ({ inventory }: Props) => {
  const [idProduct, setIdProduct] = useState('')
  const { Modal: UpdateModal, openModal: openUpdateModal } = useModal()
  const { Modal: DeleteModal, openModal: openDeleteModal } = useModal()

  const InventoryData: ProductData[] = inventory.map((item) => ({
    ...item,
    key: item.id,
  }))

  const onUpdate = (id: string) => {
    setIdProduct(id)
    openUpdateModal()
  }

  const onDelete = (id: string) => {
    setIdProduct(id)
    openDeleteModal()
  }

  const onSubmit = () => {}

  const columns: TableColumnsType<ProductData> = [
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

  return (
    <>
      <Table columns={columns} dataSource={InventoryData} />
      <UpdateModal>
        <UpdateProductForm id={idProduct} onSubmit={onSubmit} />
      </UpdateModal>
      <DeleteModal>delete</DeleteModal>
    </>
  )
}

export default ProductsTable
