import movie1 from '../images/card_images/pic__COLOR_pic1.jpg';
import movie2 from '../images/card_images/pic__COLOR_pic2.jpg';
import movie3 from '../images/card_images/pic__COLOR_pic3.jpg';
import movie4 from '../images/card_images/pic__COLOR_pic4.jpg';
import movie5 from '../images/card_images/pic__COLOR_pic5.jpg';
import movie6 from '../images/card_images/pic__COLOR_pic6.jpg';
import movie7 from '../images/card_images/pic__COLOR_pic7.jpg';
import movie8 from '../images/card_images/pic__COLOR_pic8.jpg';
import movie9 from '../images/card_images/pic__COLOR_pic9.jpg';
import movie10 from '../images/card_images/pic__COLOR_pic10.jpg';
import movie11 from '../images/card_images/pic__COLOR_pic11.jpg';
import movie12 from '../images/card_images/pic__COLOR_pic12.jpg';

const moviesImages = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9,
  movie10,
  movie11,
  movie12,
]

const moviesImagesShort = [
  movie1,
  movie2,
  movie3,
]


const moviesList = [
  '33 слова о дизайне',
  'Киноальманах «100 лет дизайна»',
  'В погоне за Бенкси',
  'Баския: Взрыв реальности',
  'Бег это свобода',
  'Книготорговцы',
  'Когда я думаю о Германии ночью',
  'Gimme Danger: История Игги и The Stooges',
  'Дженис: Маленькая девочка грустит',
  'Соберись перед прыжком',
  'Пи Джей Харви: A dog called money',
  'По волнам: Искусство звука в кино'
]


const notFoundMessage = 'Ничего не найдено';
const serverErrorMessage = `Во время запроса произошла ошибка. 
Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`;

const API_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const MAIN_API_URL = 'https://hadzime.xyz';
const imageURL = 'https://api.nomoreparties.co';

export {
  notFoundMessage,
  serverErrorMessage,
  API_URL,
  moviesImages,
  moviesList,
  moviesImagesShort,
  imageURL,
  MAIN_API_URL
};