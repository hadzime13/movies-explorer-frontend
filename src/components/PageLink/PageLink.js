import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageLink.css'

const PageLink = React.memo(({ link = '#', linkText, linkImage, mod }) => {

  return (
    <NavLink to={link} className={`pagelink${mod ? ` ${mod}` : ''}`} activeClassName="pagelink_active">
      <p className='pagelink__text'>{linkText}</p> {linkImage && <img src={linkImage} alt={linkText} className="pagelink__image"></img>}
    </NavLink>
  );
});

export default PageLink;