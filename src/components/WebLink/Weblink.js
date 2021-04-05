import React from 'react';
import './Weblink.css'

const WebLink = React.memo(({ link = '#', linkText, linkMod, linkImage, linkImageName }) => {

  return (
    <a href={link} className={`weblink${linkMod ? ` ${linkMod}` : ''}`} target="_blank" rel="noreferrer">
      {linkText && linkText} {linkImage && <img src={linkImage} alt={linkImageName} className="weblink__image"/>}
    </a>
  );
});

export default WebLink;