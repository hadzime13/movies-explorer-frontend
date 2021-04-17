import React from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';



const Main = React.memo(({ loggedIn }) => {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <Header
        mod='header__container_type_main' loggedIn={loggedIn} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );

});

export default Main;