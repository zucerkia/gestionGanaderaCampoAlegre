import { Button } from 'antd'
import { PlusIcon } from '@heroicons/react/24/outline'

import { Card, Heading } from '@/components'

import { useModal } from '@/hooks'
import ProductionTable from './components/ProductionTable'
import ProductionForm from './components/ProductionForm'
import { newProduction } from '@/models'

const CattlePage = () => {
  const { Modal, openModal, closeModal } = useModal()

  const onSubmit = async (values: newProduction) => {
    console.log(values)
    closeModal()
  }

  const renderToolbar = () => (
    <Button
      type='primary'
      className='flex items-center gap-x-2'
      onClick={openModal}
    >
      <PlusIcon className='w-5 h-5' />
      Agregar registro
    </Button>
  )

  return (
    <section>
      <Heading title='Información general' />
      <Card title='Historial' toolbar={renderToolbar()}>
        <ProductionTable history={[]} />
      </Card>
      <Modal>
        <ProductionForm onSubmit={onSubmit} />
      </Modal>
    </section>
  )
}

export default CattlePage
