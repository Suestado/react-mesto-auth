 function AuthForm(props) {
  return(
    <div className="auth-form">
      <h2 className="auth-form__header">Зарегистроваться</h2>
      <form
        className="auth-form__form"
        id="authForm-form"
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
          Зарегистрироваться
        </button>

      </form>
      <span className="auth-form__logInOffer">
        Уже зарегистрированы? <a className="auth-form__redirectToLogIn">Войти</a>
      </span>
    </div>
  )
 }

 export default AuthForm;
