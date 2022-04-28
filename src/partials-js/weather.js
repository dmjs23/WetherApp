import { cityData } from '../index';

export function mainWeather() {
  const city_name = cityData.city.name;
  const current_temp = cityData.list[0].main.temp;
  let min_temp = cityData.list[0].main.temp_min;
  let max_temp = cityData.list[0].main.temp_max;

  for (let index = 0; index < 33; index += 8) {
    let temponary;
    for (let j = 0; j < 8; j++) {
      temponary = cityData.list[j + index].main.temp_min;
      if (temponary < min_temp) min_temp = temponary;
      temponary = cityData.list[j + index].main.temp_max;
      if (temponary > max_temp) max_temp = temponary;
    }
  }

  const $todaySection = document.querySelector('.weather-container');
  const today_section = `
  <div class="weather-txt-container">
    <div class="Days5_viev__icon Days5_viev__icon${cityData.list[0].weather[0].icon}"></div>
    <div><p class="weather_section_city_name">${city_name}</p></div>
    <div class="weather_section_city_pogoda">
    <div class="today_current_temp">
    <p >${Math.round(current_temp)}</p>
    </div>
    <div class="min-max-container">
    <div class="min-max-txt-div">
    <p class="today_temp_txt">min</p>
    <p class="today_temp_value">${Math.round(min_temp)} &deg</p>
    </div>
    <div class="min-max-value-div">
    <p class="today_temp_txt">max</p>
    <p class="today_temp_value">${Math.round(max_temp)} &deg</p>
    </div>
    </div>
    </div>
    `;
  $todaySection.innerHTML = today_section;
}
