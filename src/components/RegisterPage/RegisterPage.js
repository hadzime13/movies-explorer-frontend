import React from 'react';
import Header from '../Header/Header';
import Register from '../Register/Register'

const RegisterPage = () => {

  return (
    <>
    <Header mod="header__container_type_register" isMenuOn={false} />
    <Register />
    </>
  )
}

export default RegisterPage;