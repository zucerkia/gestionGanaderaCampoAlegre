import { ReactNode } from 'react'

type Props = {
  title: string
  toolbar?: ReactNode
}

const Heading = ({ title, toolbar }: Props) => {
  return (
    <div className='lg:flex lg:items-center lg:justify-between py-6 sm:px-6 lg:px-8 '>
      <div className='min-w-0 flex-1'>
        <h2 className='text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight'>
          {title}
        </h2>
      </div>
      <div className='mt-5 flex lg:ml-4 lg:mt-0'>{toolbar}</div>
    </div>
  )
}

export default Heading
