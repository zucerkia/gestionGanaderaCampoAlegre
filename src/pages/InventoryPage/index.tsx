import { Button, Tabs, type TabsProps } from 'antd'
import { PlusIcon } from '@heroicons/react/24/outline'

import { Card, Heading } from '@/components'
import ProductsTable from './components/ProductsTable'
import CreateProductsForm from './components/CreateProductsForm'

import { useModal } from '@/hooks'

const InventoryPage = () => {
  const { Modal, openModal: openCreateModal } = useModal()
  const onChange = (key: string) => {
    console.log(key)
  }

  const onSubmit = () => {}

  const Toolbar = () => (
    <Button className='flex gap-2' type='primary' onClick={openCreateModal}>
      <PlusIcon className='w-5 h-5' />
      Agregar producto
    </Button>
  )
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Alimentos',
      children: (
        <ProductsTable
          inventory={[
            {
              id: '1',
              brand: 'marca 1',
              name: 'nombre 1',
              quantity: 23,
              type: 'alimento',
            },
            {
              id: '2',
              brand: 'marca 2',
              name: 'nombre 2',
              quantity: 455,
              type: 'alimento',
            },
          ]}
        />
      ),
    },
    {
      key: '2',
      label: 'Medicinas',
      children: (
        <ProductsTable
          inventory={[
            {
              id: '1',
              brand: 'marca 1',
              name: 'nombre 1',
              quantity: 23,
              type: 'alimento',
            },
          ]}
        />
      ),
    },
  ]
  return (
    <section>
      <Heading title='Datos de inventario' />
      <Card title='Productos' toolbar={<Toolbar />}>
        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
      </Card>
      <Modal>
        <CreateProductsForm onSubmit={onSubmit} />
      </Modal>
    </section>
  )
}

export default InventoryPage
