import React from 'react';
import Form from '../Form/Form';
import useFormWithValidation from '../../utils/useFormWithValidation';
import { registerFormInputs } from '../../utils/constants';

const Register = ({ handleRegister, registerError }) => {

  const { data, errors, handleChange, isValid, resetForm } = useFormWithValidation(registerFormInputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    console.log(name, email, password);
    handleRegister(name, email, password);
    resetForm();
  };

  return (
    <Form
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      formText='Уже зарегистрированы?'
      redirectText='Войти'
      link='/signin'
      disabled={!isValid}
      onSubmit={handleSubmit}
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
        <span className={`form__error${errors.name ? ' form__error_active' : ''}`}>{`${errors.name}`}</span>
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
          minLength="5"
          maxLength="30"
          required
        />
        <span className={`form__error${errors.name || registerError ? ' form__error_active' : ''}`}>
          {`${data.password ? errors.password : registerError}`}
        </span>
      </>
    </Form>
  )
}

export default Register;