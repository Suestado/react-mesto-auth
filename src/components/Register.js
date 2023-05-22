import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm.js';

function Register({onSubmit}) {
  const navigate = useNavigate();

  function handleSubmitForm(email, password) {
    onSubmit(email, password)
      .then((data) => {
        if(data.data.email && data.data._id) {
          navigate("/sign-up", {replace: true});
        }
      })
  }

  return (
    <AuthForm
      header="Регистрация"
      formName="form-registration"
      onSubmit={handleSubmitForm}
      registration="true"
      submitText="Зарегистрироваться"
    />
  );
}

export default Register;
