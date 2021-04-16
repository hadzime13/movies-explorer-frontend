import React from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

const ProfilePage = ({ handleEditProfile, editProfileError, isEditProfile, editProfile, handleLogout }) => {
  return (
    <>
      <Header />
      <Profile
        handleEditProfile={handleEditProfile}
        editProfileError={editProfileError}
        isEditProfile={isEditProfile}
        editProfile={editProfile}
        handleLogout={handleLogout} />
    </>
  )

}

export default ProfilePage;