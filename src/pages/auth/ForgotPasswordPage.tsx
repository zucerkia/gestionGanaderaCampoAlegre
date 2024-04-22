import ForgotPasswordForm from './components/ForgotPasswordForm'

const ForgotPasswordPage = () => {
  return (
    <div className='w-full p-7 mp-12 lg:max-w-sm m-auto 2xl:mx-10'>
      <h1 className='mb-8 text-center'>¿Olvidaste tu contraseña?</h1>
      <ForgotPasswordForm />
    </div>
  )
}

export default ForgotPasswordPage
