import { Modal as ModalUI } from '@/components'
import { ModalProps } from '@/components/Modal'
import { PropsWithChildren, useState } from 'react'

type Props = Omit<ModalProps, 'isOpen' | 'onClose'>

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const Modal = ({ children, ...rest }: PropsWithChildren<Props>) => (
    <ModalUI {...rest} isOpen={isOpen} onClose={closeModal}>
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
