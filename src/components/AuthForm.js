import { Link } from 'react-router-dom';

function AuthForm(props) {
  return (
    <div className="auth-form">
      <h2 className="auth-form__header">{props.header}</h2>
      <form
        className="auth-form__form"
        id={props.formName}
        action="#"
        method="post"
        name={props.formName}
        onSubmit={props.onSubmit}
        noValidate
      >
        <label>
          <input
            className="auth-form__input"
            id="authForm-email"
            name="email"
            type="text"
            placeholder="Email"
          />
          <span className="auth-form__error popup__input-error name-input-error"> </span>
        </label>

        <label>
          <input
            className="auth-form__input"
            id="authForm-password"
            name="password"
            type="text"
            placeholder="Пароль"
          />
          <span className="auth-form__error popup__input-error name-input-error"> </span>
        </label>

        <button
          className="auth-form__submit"
          type="submit"
          id={`submit-${props.formName}`}
          name={`submit-${props.formName}`}
        >
          {props.submitText}
        </button>

      </form>
      <span className={`auth-form__logInOffer ${props.registration && 'auth-form__logInOffer_active'}`}>
        Уже зарегистрированы? <Link to="/sign-up" className="auth-form__redirectToLogIn">Войти</Link>
      </span>
    </div>
  );
}

export default AuthForm;
