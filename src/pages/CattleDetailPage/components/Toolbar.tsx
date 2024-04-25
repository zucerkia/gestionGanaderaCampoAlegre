import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  isActive: boolean
  toggle: () => void
}
const Toolbar = ({ isActive, toggle }: Props) => (
  <div className='text-primary'>
    <button onClick={toggle}>
      {isActive ? (
        <PencilSquareIcon className='w-5 h-5' />
      ) : (
        <XMarkIcon className='w-5 h-5' />
      )}
    </button>
  </div>
)

export default Toolbar
