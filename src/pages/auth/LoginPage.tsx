import LoginForm from './components/LoginForm'

const LoginPage = () => {
  return (
    <div className='w-full p-7 mp-12 lg:max-w-sm m-auto 2xl:mx-10'>
      <h1 className='mb-8 text-center'>¡Bienvenido de nuevo!</h1>
      <LoginForm />
    </div>
  )
}

export default LoginPage
