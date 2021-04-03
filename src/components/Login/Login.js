import React from 'react';
import Form from '../Form/Form';

const Login = () => {
  return (
    <Form
      title='Рады видеть!'
      buttonText='Войти'
      formText='Еще не зарегистрированы?'
      redirectText='Регистрация'
      mod='form__button_type_login'
      link='/signup'
    >
      <>
        <label htmlFor="email" className="form__label">E-mail</label>
        <input
          className="form__input"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          // value={data.value}
          // onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
        <label htmlFor="password" className="form__label">Пароль</label>
        <input
          className="form__input form__input_type_password"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          // value={data.password}
          // onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__error">Что-то пошло не так</span>
      </>
    </Form>
  )
}

export default Login;