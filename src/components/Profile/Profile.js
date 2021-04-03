import React from 'react';
import Button from '../Button/Button';
import './Profile.css';

const Profile = ({ username, userEmail }) => {

  return (
    <section className="profile__container">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <p className="profile__item">
        Имя
        <span className="profile__info">
          {username}
        </span>
      </p>
      <p className="profile__item">
        E-mail
        <span className="profile__info">
          {userEmail}
        </span>
      </p>
      <Button buttonText='Редактировать' buttonMod='button_type_edit' />
      <Button buttonText='Выйти из аккаунта' buttonMod='button_type_logout' />
    </section>
  )
}

export default Profile;