import RegisterForm from './components/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='w-full p-7 mp-12 lg:max-w-sm m-auto 2xl:mx-10'>
      <h1 className='mb-8 text-center'>Crea una cuenta</h1>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
