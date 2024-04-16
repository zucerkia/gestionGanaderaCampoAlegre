import clsx from 'clsx'
import { NavLink, NavLinkProps } from 'react-router-dom'

const active = 'bg-primary-dark text-white'
const inactive = 'text-dark-white'

const SidebarLink = ({ children, ...rest }: NavLinkProps) => {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          clsx('font-semibold leading-6 text-sm p-2 flex gap-x-3 rounded-md', {
            [active]: isActive,
            [inactive]: !isActive,
          })
        }
        {...rest}
      >
        {children}
      </NavLink>
    </li>
  )
}

export default SidebarLink
