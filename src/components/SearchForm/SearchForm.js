import React from 'react';
import useForm from '../../utils/useForm';
import Button from '../Button/Button';
import { searchInputs } from '../../utils/constants'
import './SearchForm.css';

const SearchForm = ({ searchMovies, shortMoviesSwitch, isShortMovies, filterSavedMovies, userMovies }) => {

  const { handleChange, data } = useForm(searchInputs);


  // Сабмит формы
  const onButtonClick = (evt) => {
    evt.preventDefault();
    searchMovies ? searchMovies(data.film.toLowerCase()) : filterSavedMovies(userMovies, data.film.toLowerCase());
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
      <button type="button"
        className={`search-form__switch${isShortMovies ? ' search-form__switch_on' : ''}`}
        onClick={shortMoviesSwitch}>
        <span className="search-form__switch-text">Короткометражки</span>
      </button>
    </form>
  )
}

export default SearchForm;