import clsx from 'clsx'
import { PropsWithChildren, ReactNode } from 'react'

type Props = {
  title?: string
  description?: string
  toolbar?: ReactNode
  className?: string
}

const Card = ({
  title,
  children,
  toolbar,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div className={clsx('mx-auto w-full', className)}>
      <div className='rounded-lg overflow-hidden shadow bg-white h-full'>
        <div className='px-4 py-5 sm:px-6'>
          <div className='flex flex-wrap items-center justify-between sm:flex-nowrap'>
            <h3 className='font-semibold leading-6 text-base'>{title}</h3>
            {toolbar}
          </div>
        </div>
        <div className='px-4 sm:px-6 pb-4 sm:pb-6'>{children}</div>
      </div>
    </div>
  )
}

export default Card
