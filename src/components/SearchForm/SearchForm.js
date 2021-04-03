import React, { useState } from 'react';
import Button from '../Button/Button'
import './SearchForm.css'

const SearchForm = () => {

  const [isShortMovies, setShortMovies] = useState(false);
  const onClick = () => {
    isShortMovies ? setShortMovies(false) : setShortMovies(true);
  }

  return (
    <form action="#" className="search-form__container" method='POST'>
      <fieldset className="search-form__fieldset">
        <input
          className="search-form__input"
          id="film"
          name="film"
          type="text"
          placeholder="Фильм"
        />
        <Button
          buttonText="Поиск"
          buttonMod="button_type_search" />
      </fieldset>
      <button type="button" className={`search-form__switch${isShortMovies ? ' search-form__switch_on' : ''}`} onClick={onClick}>
        <span className="search-form__switch-text">Короткометражки</span>
      </button>
    </form>
  )
}

export default SearchForm;