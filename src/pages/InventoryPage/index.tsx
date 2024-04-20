import { useState } from 'react'

import { Button, Tabs, type TabsProps } from 'antd'
import { PlusIcon } from '@heroicons/react/24/outline'

import { Card, Heading } from '@/components'
import ProductsTable from './components/ProductsTable'
import CreateProductsForm from './components/CreateProductForm'
import UpdateProductForm from './components/UpdateProductForm'

import { useModal } from '@/hooks'
import useInventory from './hooks/useInventory'

import { Inventory, NewProduct, Product } from './models'

const InventoryPage = () => {
  const [productId, setProductId] = useState('')
  const {
    Modal: CreateModal,
    openModal: openCreateModal,
    closeModal: closeCreateModal,
  } = useModal()
  const {
    Modal: UpdateModal,
    openModal: openUpdateModal,
    closeModal: closeUpdateModal,
  } = useModal()
  const {
    Modal: DeleteModal,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal()

  const { inventory, addToInventory, updateProduct, deleteProduct } =
    useInventory()

  const renderToolbar = () => (
    <Button className='flex gap-2' type='primary' onClick={handleCreateModal}>
      <PlusIcon className='w-5 h-5' />
      Agregar producto
    </Button>
  )

  const handleCreateModal = () => {
    openCreateModal()
  }

  const onSubmitCreate = async (product: NewProduct) => {
    await addToInventory(product)
    closeCreateModal()
  }

  const onSubmitUpdate = async (id: string, product: Partial<Product>) => {
    await updateProduct(id, product)
    closeUpdateModal()
  }

  const onSubmitDelete = async (id: string) => {
    await deleteProduct(id)
    closeDeleteModal()
  }

  const handleUpdateModal = (id: string) => {
    openUpdateModal()
    setProductId(id)
  }

  const handleDeleteModal = (id: string) => {
    openDeleteModal()
    setProductId(id)
  }

  const renderTable = (data: Inventory) => (
    <ProductsTable
      inventory={data}
      onDelete={handleDeleteModal}
      onUpdate={handleUpdateModal}
    />
  )
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Alimentos',
      children: renderTable(inventory),
    },
    {
      key: '2',
      label: 'Medicinas',
      children: renderTable(inventory),
    },
  ]
  return (
    <section>
      <Heading title='Datos de inventario' />
      <Card title='Productos' toolbar={renderToolbar()}>
        <Tabs defaultActiveKey='1' items={items} />
      </Card>
      <CreateModal title='Crear producto'>
        <CreateProductsForm onSubmit={onSubmitCreate} />
      </CreateModal>
      <UpdateModal title='Actualizar producto'>
        <UpdateProductForm id={productId} onSubmit={onSubmitUpdate} />
      </UpdateModal>
      <DeleteModal title='Eliminar producto'>
        <p className='mb-8'>
          ¿Está seguro que quiere eliminar este producto del inventario?
        </p>
        <Button
          onClick={() => onSubmitDelete(productId)}
          className='block ml-auto'
          type='default'
        >
          Eliminar
        </Button>
      </DeleteModal>
    </section>
  )
}

export default InventoryPage
