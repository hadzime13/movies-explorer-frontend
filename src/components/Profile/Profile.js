import React from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import useFormWithValidation from '../../utils/useFormWithValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { profileFormInputs } from '../../utils/constants';
import './Profile.css';

const Profile = ({ handleEditProfile, isEditProfile, editProfile, editProfileError, handleLogout }) => {

  const currentUser = React.useContext(CurrentUserContext);
  const profileFormData = {
    email: currentUser.email,
    name: currentUser.name,
  }

  const { data, errors, handleChange, isValid, isDifferent } =
    useFormWithValidation(profileFormInputs, profileFormData);

  // Изменено ли хоть одно поле формы редактирования
  const formDiffers = isDifferent.name === true || isDifferent.email === true;

  // Сабмит формы редактирования профиля
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = data;
    console.log(name, email);
    handleEditProfile(name, email);
  };

  return (
    <section className="profile__container">

      { !isEditProfile
        ? (<>
          <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
          <p className="profile__item">
            Имя
        <span className="profile__info">
              {currentUser.name}
            </span>
          </p>
          <p className="profile__item">
            E-mail
        <span className="profile__info">
              {currentUser.email}
            </span>
          </p>
          <Button buttonText='Редактировать' buttonMod='button_type_edit' onClick={editProfile} />
          <Button buttonText='Выйти из аккаунта' buttonMod='button_type_logout' onClick={handleLogout} />
        </>
        )
        : <Form
          title="Редактирование профиля"
          buttonText="Сохранить"
          onSubmit={handleSubmit}
          disabled={!(formDiffers && isValid)}
          formText="Передумали?"
          redirectText="Вернуться"
          link='/profile'
          onLinkClick={editProfile}
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
            <span className={`form__error${editProfileError ? ' form__error_active' : ''}`}>{editProfileError}</span>
          </>
        </Form>
      }

    </section>
  )
}

export default Profile;