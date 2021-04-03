import React from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Profile username='Виталий' userEmail='pochta@vitaliy.ru' />
    </>
  )

}

export default ProfilePage;