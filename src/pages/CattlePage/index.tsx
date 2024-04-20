import dayjs from 'dayjs'
import { Button } from 'antd'
import { PlusIcon } from '@heroicons/react/24/outline'

import { Card, Heading } from '@/components'
import CattleTable from './components/CattleTable'
import CattleForm from './components/CattleForm'

import { useModal } from '@/hooks'
import UseCattle from './hooks/UseCattle'

import { CattleRegisterData } from './models'

const CattlePage = () => {
  const { Modal, openModal, closeModal } = useModal()
  const { cattle, addCattle } = UseCattle()

  const onSubmit = async ({ birthdate, name, breed }: CattleRegisterData) => {
    await addCattle({
      id: '1',
      genre: 'female',
      birthdate: dayjs(birthdate).format('DD-MM-YYYY'),
      name,
      breed,
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
