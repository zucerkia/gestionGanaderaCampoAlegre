import { Modal as ModalUI } from '@/components'
import { PropsWithChildren, useState } from 'react'

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const Modal = ({ children }: PropsWithChildren) => (
    <ModalUI isOpen={isOpen} onClose={closeModal}>
      {children}
    </ModalUI>
  )

  return {
    Modal,
    openModal,
    closeModal,
  }
}

export default useModal
