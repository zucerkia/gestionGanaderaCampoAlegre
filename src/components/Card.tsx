import { PropsWithChildren, ReactNode } from 'react'

type Props = {
  title?: string
  description?: string
  toolbar?: ReactNode
}

const Card = ({ title, children, toolbar }: PropsWithChildren<Props>) => {
  return (
    <div className='mx-auto w-full py-6 sm:px-6 lg:px-8'>
      <div className='rounded-lg overflow-hidden shadow bg-white'>
        <div className='px-4 py-5 sm:px-6'>
          <div className='flex flex-wrap items-center justify-between sm:flex-nowrap'>
            <h3 className='font-semibold leading-6 text-base'>{title}</h3>
            {toolbar}
          </div>
        </div>
        <div className='px-4 sm:px-6'>{children}</div>
      </div>
    </div>
  )
}

export default Card
