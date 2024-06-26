import { Dialog, Transition } from '@headlessui/react'
import { Fragment, PropsWithChildren } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export interface ModalProps {
  title?: string
  closeButton?: boolean
  isOpen: boolean
  onClose: () => void
}

const Modal = ({
  title,
  closeButton = true,
  children,
  isOpen,
  onClose,
}: PropsWithChildren<ModalProps>) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                {title && (
                  <Dialog.Title as='h2' className='mb-8'>
                    {title}
                  </Dialog.Title>
                )}
                {closeButton && (
                  <div className='absolute top-0 right-0'>
                    <button className='p-4' onClick={onClose}>
                      <XMarkIcon className='w-6 h-6' />
                    </button>
                  </div>
                )}
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
