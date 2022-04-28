import './sass/main.scss';
import { getDailyWeather, showChart, closeChart } from './partials-js/chart';
import { mainWeather } from './partials-js/weather';
import {
  getCityWeather,
  getDefaultCityData,
  getInputValue,
  inputValue,
} from './partials-js/data_fetch';
import { historyAddCity, historyCityVieve } from './partials-js/history_city';
import { GenerateView5Days, Day5Hiden } from './partials-js/5days';
import { loadStorage } from './partials-js/storage';
import { createHTMLMarkup, timer } from './partials-js/date_time_section';
import { setTodayAsActive, set5DaysAsActive } from './partials-js/weather_buttons';

export let cityData = loadStorage('cityData');

// definicje przycisków
const $searchInput = document.querySelector('input.search-bar');
const $submitBtn = document.querySelector('button.submit-btn');
const $Days5Btn = document.querySelector('#Days5Btn');
const $Days1Btn = document.querySelector('#today-btn');
const todayBtn = document.querySelector('#today-btn');
const $btnShow = document.querySelector('.chart-btn__show');
const $btnClose = document.querySelector('.chart-btn__close');
// definicje przycisków

// dodawanie zdarzen
$Days5Btn.addEventListener('click', GenerateView5Days);
$Days1Btn.addEventListener('click', Day5Hiden);
$searchInput.addEventListener('input', getInputValue);
$submitBtn.addEventListener('click', async ev => {
  ev.preventDefault();
  await getCityWeather(inputValue);
  historyAddCity(cityData);
  historyCityVieve(1);
});
$Days5Btn.addEventListener('click', GenerateView5Days);
todayBtn.addEventListener('click', setTodayAsActive);
$Days5Btn.addEventListener('click', set5DaysAsActive);
$btnShow.addEventListener('click', showChart);
$btnClose.addEventListener('click', closeChart);
// dodawanie zdarzen

// podstawowe ładowanie danych
if (cityData) mainWeather();
historyCityVieve(0);

//=========kod dzieku ktoremu jezeli jeszcze cityData nie jest dostępne
//========= w local storage to przeładuje strone ======================
if (!loadStorage('cityData')) {
  document.addEventListener('DOMContentLoaded', getDefaultCityData);
  setTimeout(() => {
    location.reload();
  }, 500);
}

// zegar na głównej stronie
createHTMLMarkup(cityData);
setInterval(() => timer(cityData), 1000);

console.log(cityData);
