'use strict';
import axios from 'axios';
import Chart from 'chart.js/auto';
import format from 'date-fns/format';
import { coordinates } from './data_fetch';
//API Key
const apiKey = '86882c431a5c1fa03f48939e3b313043&units=metric';
//DOM imports
const $chart = document.querySelector('#myChart');
const $btnShow = document.querySelector('.chart-btn__show');
const $btnClose = document.querySelector('.chart-btn__close');
//Axios get function
async function getDailyWeather(coordinates, apiKey) {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=hourly,minutely&appid=${apiKey}`,
    )
    .then(Response => {
      apiResponse = Response.data.daily;
      return apiResponse;
    })
    .catch(error => {
      return console.log(error);
    });
}
//Api response
const apiResponse = {
  lat: 52.232,
  lon: 21.0067,
  timezone: 'Europe/Warsaw',
  timezone_offset: 7200,
  current: {
    dt: 1650723898,
    sunrise: 1650684111,
    sunset: 1650735987,
    temp: 11.98,
    feels_like: 10.75,
    pressure: 1005,
    humidity: 58,
    dew_point: 3.98,
    uvi: 1.04,
    clouds: 75,
    visibility: 10000,
    wind_speed: 2.57,
    wind_deg: 340,
    weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
  },
  daily: [
    {
      dt: 1650708000,
      sunrise: 1650684111,
      sunset: 1650735987,
      moonrise: 1650675840,
      moonset: 1650702120,
      moon_phase: 0.75,
      temp: { day: 9.29, min: 4.99, max: 11.98, night: 6.99, eve: 11.38, morn: 6.23 },
      feels_like: { day: 7.34, night: 4.89, eve: 10.09, morn: 4.13 },
      pressure: 1008,
      humidity: 66,
      dew_point: 3.27,
      wind_speed: 3.59,
      wind_deg: 16,
      wind_gust: 7.26,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: 88,
      pop: 0.2,
      rain: 0.18,
      uvi: 2.19,
    },
    {
      dt: 1650794400,
      sunrise: 1650770386,
      sunset: 1650822491,
      moonrise: 1650764280,
      moonset: 1650793620,
      moon_phase: 0.78,
      temp: { day: 13.97, min: 5.82, max: 15.6, night: 9.15, eve: 12.79, morn: 6.04 },
      feels_like: { day: 12.68, night: 7.36, eve: 11.69, morn: 4.21 },
      pressure: 1006,
      humidity: 48,
      dew_point: 3.33,
      wind_speed: 3.78,
      wind_deg: 297,
      wind_gust: 10.09,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: 78,
      pop: 0.64,
      rain: 1.38,
      uvi: 4.44,
    },
    {
      dt: 1650880800,
      sunrise: 1650856663,
      sunset: 1650908994,
      moonrise: 1650852120,
      moonset: 1650885060,
      moon_phase: 0.82,
      temp: { day: 6.49, min: 6.33, max: 8.9, night: 6.35, eve: 7.79, morn: 6.87 },
      feels_like: { day: 3.9, night: 4.25, eve: 5.39, morn: 4.57 },
      pressure: 1007,
      humidity: 89,
      dew_point: 4.9,
      wind_speed: 3.8,
      wind_deg: 296,
      wind_gust: 7.17,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: 100,
      pop: 0.92,
      rain: 3.8,
      uvi: 1.54,
    },
    {
      dt: 1650967200,
      sunrise: 1650942940,
      sunset: 1650995498,
      moonrise: 1650939540,
      moonset: 1650976380,
      moon_phase: 0.85,
      temp: { day: 10.89, min: 5.35, max: 13.35, night: 7.61, eve: 12.06, morn: 5.49 },
      feels_like: { day: 9.11, night: 5.77, eve: 10.52, morn: 3.65 },
      pressure: 1015,
      humidity: 41,
      dew_point: -1.91,
      wind_speed: 4.37,
      wind_deg: 283,
      wind_gust: 7.06,
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: 72,
      pop: 0,
      uvi: 2.47,
    },
    {
      dt: 1651053600,
      sunrise: 1651029219,
      sunset: 1651082001,
      moonrise: 1651026780,
      moonset: 1651067520,
      moon_phase: 0.89,
      temp: { day: 11.78, min: 5.94, max: 11.78, night: 5.94, eve: 11.69, morn: 7.23 },
      feels_like: { day: 10.27, night: 3.39, eve: 10.17, morn: 7.23 },
      pressure: 1023,
      humidity: 48,
      dew_point: 1.32,
      wind_speed: 4.8,
      wind_deg: 14,
      wind_gust: 7.54,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: 47,
      pop: 0.37,
      rain: 0.13,
      uvi: 4.49,
    },
    {
      dt: 1651140000,
      sunrise: 1651115499,
      sunset: 1651168504,
      moonrise: 1651113960,
      moonset: 1651158540,
      moon_phase: 0.92,
      temp: { day: 9.62, min: 2.02, max: 13.01, night: 7.44, eve: 13.01, morn: 2.02 },
      feels_like: { day: 8.58, night: 6.08, eve: 11.2, morn: -0.66 },
      pressure: 1031,
      humidity: 35,
      dew_point: -4.99,
      wind_speed: 2.83,
      wind_deg: 45,
      wind_gust: 6.28,
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: 54,
      pop: 0,
      uvi: 5,
    },
    {
      dt: 1651226400,
      sunrise: 1651201781,
      sunset: 1651255007,
      moonrise: 1651201080,
      moonset: 1651249440,
      moon_phase: 0.95,
      temp: { day: 13.31, min: 4.74, max: 15.43, night: 11.36, eve: 14.93, morn: 4.74 },
      feels_like: { day: 11.69, night: 10.12, eve: 13.58, morn: 2.97 },
      pressure: 1030,
      humidity: 38,
      dew_point: -0.6,
      wind_speed: 2.84,
      wind_deg: 196,
      wind_gust: 5.09,
      weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
      clouds: 18,
      pop: 0.35,
      rain: 0.11,
      uvi: 5,
    },
    {
      dt: 1651312800,
      sunrise: 1651288063,
      sunset: 1651341510,
      moonrise: 1651288260,
      moonset: 1651340400,
      moon_phase: 0,
      temp: { day: 15.91, min: 9.52, max: 16.05, night: 12.5, eve: 15.81, morn: 9.52 },
      feels_like: { day: 14.65, night: 11.32, eve: 14.54, morn: 8.86 },
      pressure: 1025,
      humidity: 42,
      dew_point: 3.14,
      wind_speed: 2.6,
      wind_deg: 222,
      wind_gust: 4.14,
      weather: [{ id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }],
      clouds: 74,
      pop: 0,
      uvi: 5,
    },
  ],
};

const labels = apiResponse.daily.map(element => {
  return format(element.dt, 'PP');
});
const temp = apiResponse.daily.map(element => {
  return element.temp.day;
});
const humidity = apiResponse.daily.map(element => {
  return element.humidity;
});
const windSpeed = apiResponse.daily.map(element => {
  return element.wind_speed;
});
const pressure = apiResponse.daily.map(element => {
  return element.pressure;
});
const time = format(1650708001, 'LLLL d, R');
console.log(time);
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temperature, C°',
      backgroundColor: '#FF6B09',
      borderColor: '#FF6B09',
      data: temp,
    },
    {
      label: 'Humidity, %',
      backgroundColor: '#0906EB',
      borderColor: '#0906EB',
      data: humidity,
    },
    {
      label: 'Wind Speed, m/s',
      backgroundColor: '#EA9A05',
      borderColor: '#EA9A05',
      data: windSpeed,
    },
    {
      label: 'Atmosphere Pressure, m/m',
      backgroundColor: '#067806',
      borderColor: '#067806',
      data: pressure,
    },
  ],
};

const config = {
  type: 'line',
  data: data,
  options: {
    layout: {
      padding: 20,
    },
  },
};
const myChart = new Chart(document.getElementById('myChart'), config);

//Fukcje ukrywajace i pokazujace wykres
export function showChart() {
  $chart.classList.add('show');
  $chart.classList.remove('hidden');
  $btnShow.classList.add('hidden');
  $btnShow.classList.remove('show');
  $btnClose.classList.add('show');
  $btnClose.classList.remove('hidden');
}
export function closeChart() {
  $chart.classList.add('hidden');
  $chart.classList.remove('show');
  $btnShow.classList.remove('hidden');
  $btnShow.classList.add('show');
  $btnClose.classList.add('hidden');
  $btnClose.classList.remove('show');
}
