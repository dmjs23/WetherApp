// import './sass/main.scss';
import {
  getCityWeather,
  citiesData,
  getDefaultCityData,
  getInputValue,
  defaultCity,
  inputValue,
} from './data_fetch';

import moment from 'moment';

const cityDateTag = document.querySelector('div.date-container-bg');


//console.log(response.city.sunrise);
//console.log(response.city.sunset);

export function shiftInSecondsConverter(secondsFromUTC, desiredFormat) {
  const timeInMinutes = secondsFromUTC / 60;
  const currTime = moment().utcOffset(timeInMinutes).format(`${desiredFormat}`);
  return currTime;
}

export function unixTimeConverterHhMm(unixTime) {
  let date = new Date(unixTime * 1000);
  let hours = date.getHours();
  let minutes = '0' + date.getMinutes();
  let seconds = '0' + date.getSeconds();

  let formattedTime = hours + ':' + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/

  return formattedTime;
}

//unixTimeConverterHhMm(response.city.sunrise);

export function createHTMLMarkup(backendObjects) {
  const markup =
    /*backendObjects
    .map(
      backendObj =>*/
    `<div class = "city-date__day">
            <p class = "city-date__day-left-elem">${shiftInSecondsConverter(
              backendObjects.city.timezone,
              'Do',
            ).slice(0, 2)}
            <sup>${shiftInSecondsConverter(backendObjects.city.timezone, 'Do').slice(2, 4)}</sup>
            </p>
            <p "city-date__day-right-elem">${shiftInSecondsConverter(
              backendObjects.city.timezone,
              'ddd',
            )}</p>
        </div>
        <div class = "city-date__month-time-sunset-sunrise">
          <div class = "city-date__month-and-time">
            <p class = "city-date__month-and-time-left-elem">${shiftInSecondsConverter(
              backendObjects.city.timezone,
              'MMMM',
            )}</p>
            <p id="secClock" class = "city-date__month-and-time-right-elem">${shiftInSecondsConverter(
              backendObjects.city.timezone,
              'h:mm:ss',
            )}</p>
          </div>
          <div class = "city-date__sunrise-and-sunset">
            <div class="sunrise-svg" width="20" height="20">             
            </div>
            <p class = "city-date__sunrise-and-sunset-left-elem">${unixTimeConverterHhMm(
              backendObjects.city.sunrise,
            )}</p>            
            <div class="sunset-svg" width="20" height="20">              
            </div>
            <p>${unixTimeConverterHhMm(backendObjects.city.sunset)}</p>
          </div>
        </div>  `;
    // ,)
    // .join('');
  cityDateTag.insertAdjacentHTML('beforeend', markup);
}

export function timer(backendObjects) {
document.querySelector('p#secClock').textContent = shiftInSecondsConverter(
  backendObjects.city.timezone,
  'h:mm:ss',
);
}

//createHTMLMarkup(cityData);
//setInterval(() => timer(cityData), 1000);
