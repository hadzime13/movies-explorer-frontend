import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';

const LoginPage = () => {

  return (
    <>
      <Header mod="header__container_type_register" isMenuOn={false} />
      <Login />
    </>
  )
}

export default LoginPage;