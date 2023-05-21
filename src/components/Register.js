import AuthForm from './AuthForm.js';

function Register() {
  return (
    <AuthForm
      header="Регистрация"
      formName="form-registration"
      onSubmit={() => {}}
      registration="true"
      submitText="Зарегистрироваться"
    />
  );
}

export default Register;
