import React, { useState } from 'react';
import useForm from '../../utils/useForm';
import Button from '../Button/Button';
import { searchInputs } from '../../utils/constants'
import './SearchForm.css';

const SearchForm = ({ searchMovies }) => {
  // ***Переменные состояния
  // Короткометражки
  const [isShortMovies, setShortMovies] = useState(false);
  const onClick = () => {
    isShortMovies ? setShortMovies(false) : setShortMovies(true);
  }

  const { handleChange, data } = useForm(searchInputs);


  // Сабмит формы
  const onButtonClick = (evt) => {
    evt.preventDefault();
    searchMovies(data.film.toLowerCase());
  }

  return (
    <form action="#" className="search-form__container" method='POST' onSubmit={onButtonClick}>
      <fieldset className="search-form__fieldset">
        <input
          className="search-form__input"
          id="film"
          name="film"
          type="text"
          placeholder="Фильм"
          value={data.film || ''}
          onChange={handleChange}
          required
        />
        <Button
          buttonText="Поиск"
          buttonMod="button_type_search"
          disabled={data.film.length < 1}
          onClick={onButtonClick} />
      </fieldset>
      <button type="button" className={`search-form__switch${isShortMovies ? ' search-form__switch_on' : ''}`} onClick={onClick}>
        <span className="search-form__switch-text">Короткометражки</span>
      </button>
    </form>
  )
}

export default SearchForm;