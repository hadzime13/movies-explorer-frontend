import { MAIN_API_URL } from '../config/index';

class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  // Метод чтения токена и проставления его в заголовок запроса
  setToken(token) {
    this._headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  }

  // Метод обработки ответа
  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  // Регистрация 
  register = (name, email, password) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._handleResponse);
  };

  // Авторизация
  authorize = (email, password) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(this._handleResponse);
  };


  // Получение инфо о пользователе
  getUser() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    },
    )
      .then(this._handleResponse)
  };

  // Проверка токена
  getContent = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  };

  // Обновление данных пользователя
  updateUser(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      })
    },
    )
      .then(this._handleResponse)
  };


  // Сохранение фильма
  addMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie)
    },
    )
      .then(this._handleResponse)
  };

  // Удаление фильма
  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    },
    )
      .then(this._handleResponse)
  };

  // Получение сохраненных пользователем фильмов

  getAllMovies = () => {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._handleResponse);
  };




  // Методы лайков

  changeLikeStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
        .then(this._handleResponse)
    }
    else {
      return fetch(`${this._url}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this._headers
      })
        .then(this._handleResponse)
    }
  };
}

const mainApi = new MainApi({
  url: MAIN_API_URL,

  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;



