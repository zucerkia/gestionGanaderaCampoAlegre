import { Button } from 'antd'
import { PlusIcon } from '@heroicons/react/24/outline'

import { Card, Heading } from '@/components'
import CattleTable from './components/CattleTable'

import UseCattle from './hooks/UseCattle'
import useModal from '@/hooks/useModal'
import CattleForm from './components/CattleForm'

const CattlePage = () => {
  const { Modal, openModal } = useModal()
  const { cattle } = UseCattle()

  // const onSubmit = async (values: UserFormValues) => {
  //   await addUser(values)
  //   // closeModal()
  // }

  const ToolbarButton = () => (
    <Button
      type='primary'
      className='flex items-center gap-x-2'
      onClick={openModal}
    >
      <PlusIcon className='w-5 h-5' />
      Crear registro
    </Button>
  )

  return (
    <section>
      <Heading title='Información general' />
      <Card title='Mi ganado' toolbar={<ToolbarButton />}>
        <CattleTable cattle={cattle} />
      </Card>
      <Modal>
        <CattleForm />
      </Modal>
    </section>
  )
}

export default CattlePage
