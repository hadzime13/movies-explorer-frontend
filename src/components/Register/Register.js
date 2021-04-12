import React from 'react';
import Form from '../Form/Form';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { registerFormInputs } from '../../utils/constants';

const Register = () => {

  const { data, errors, handleChange, isValid, resetForm } = useFormWithValidation(registerFormInputs);


  return (
    <Form
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      formText='Уже зарегистрированы?'
      redirectText='Войти'
      link='/signin'
      disabled={!isValid}
    >
      <>
        <label htmlFor="name" className="form__label">Имя</label>
        <input
          className="form__input"
          id="name"
          name="name"
          type="text"
          placeholder="Имя"
          value={data.name}
          onChange={handleChange}
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__error">{`${errors.name}`}</span>
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
        <span className="form__error">{`${errors.email}`}</span>
        <label htmlFor="password" className="form__label">Пароль</label>
        <input
          className="form__input form__input_type_password"
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          value={data.password}
          onChange={handleChange}
          minLength="5"
          maxLength="30"
          required
        />
        <span className="form__error">{`${errors.password}`}</span>
      </>
    </Form>
  )
}

export default Register;