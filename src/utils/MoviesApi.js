import { API_URL } from '../config/index'

// Обработка ответа
const handleResponse = (res) => {
  return res.json();
}

// Обработка ошибки
const handleResponseError = (err) => {
  console.log(err);
}


const getMoviesList = () => {
  return fetch(API_URL, {
    method: 'GET',
  })
    .then(handleResponse);
}

export { handleResponseError, getMoviesList }