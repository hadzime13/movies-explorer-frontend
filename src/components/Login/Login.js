import React from 'react';
import Form from '../Form/Form';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { loginFormInputs } from '../../utils/constants';

const Login = ({ handleLogin, loginError }) => {

  const { data, errors, handleChange, isValid, resetForm } = useFormWithValidation(loginFormInputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    console.log(email, password);
    handleLogin(email, password);
    resetForm();
  };

  return (
    <Form
      title='Рады видеть!'
      buttonText='Войти'
      formText='Еще не зарегистрированы?'
      redirectText='Регистрация'
      mod='form__button_type_login'
      link='/signup'
      onSubmit={handleSubmit}
      disabled={!isValid}
    >
      <>
        <label htmlFor="email" className="form__label">E-mail</label>
        <input
          className="form__input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
        <span className={`form__error${errors.email ? ' form__error_active' : ''}`}>{`${errors.email}`}</span>
        <label htmlFor="password" className="form__label">Пароль</label>
        <input
          className="form__input form__input_type_password"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          value={data.password}
          onChange={handleChange}
          minLength="6"
          maxLength="30"
          required
        />
        <span className={`form__error${errors.name || loginError ? ' form__error_active' : ''}`}>
          {`${data.password ? errors.password : loginError}`}
        </span>
      </>
    </Form>
  )
}

export default Login;