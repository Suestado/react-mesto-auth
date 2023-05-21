import AuthForm from './AuthForm.js';

function Login () {
  return (
    <AuthForm
      header="Вход"
      formName="form-authorisation"
      onSubmit={() => {}}
      submitText="Войти"
    />
  )
}

export default Login;
