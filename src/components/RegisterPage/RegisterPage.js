import React from 'react';
import Header from '../Header/Header';
import Register from '../Register/Register'

const RegisterPage = ({ handleRegister, registerError }) => {

  return (
    <>
      <Header mod="header__container_type_register" isMenuOn={false} />
      <Register handleRegister={handleRegister} registerError={registerError} />
    </>
  )
}

export default RegisterPage;