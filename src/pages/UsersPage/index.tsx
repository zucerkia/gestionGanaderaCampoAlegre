import { Card, Heading } from '@/components'
import UsersTable from './components/UsersTable'
import useUsers from './hooks/useUsers'

const UsersPage = () => {
  const { users } = useUsers()
  return (
    <section>
      <Heading title='Datos de personal' />
      <Card title='Usuarios'>
        <UsersTable users={users} />
      </Card>
    </section>
  )
}

export default UsersPage
