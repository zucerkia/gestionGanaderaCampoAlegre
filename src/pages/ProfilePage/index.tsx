import { Card, Heading } from '@/components'

import PersonalDataForm from './components/PersonalDataForm'
import PasswordDataForm from './components/PasswordDataForm'

const ProfilePage = () => {
  return (
    <section>
      <Heading title='Mi perfil' />
      <Card title='Datos personales'>
        <PersonalDataForm />
        <PasswordDataForm />
      </Card>
    </section>
  )
}

export default ProfilePage
