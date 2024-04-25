import dayjs from 'dayjs'
import { Button } from 'antd'
import { PlusIcon } from '@heroicons/react/24/outline'

import { Card, Heading } from '@/components'
import CattleTable from './components/CattleTable'
import CattleForm from './components/CattleForm'

import { useModal } from '@/hooks'
import { useCattle } from '../../hooks'
import { newCow } from '@/models'

const CattlePage = () => {
  const { Modal, openModal, closeModal } = useModal()
  const { cattle, addCattle } = useCattle()

  const onSubmit = async ({ birthday, ...cow }: newCow) => {
    await addCattle({
      ...cow,
      birthday: dayjs(birthday).format('DD-MM-YYYY'),
    })
    closeModal()
  }

  const renderToolbar = () => (
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
      <Card title='Mi ganado' toolbar={renderToolbar()}>
        <CattleTable cattle={cattle} />
      </Card>
      <Modal>
        <CattleForm onSubmit={onSubmit} />
      </Modal>
    </section>
  )
}

export default CattlePage
