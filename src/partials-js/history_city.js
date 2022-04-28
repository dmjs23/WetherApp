import { cityData } from '..';
import { saveStorage, loadStorage, removeStorage } from './storage';

export const arrayOfKey = [];

export function historyAddCity(cityData) {
  saveStorage(cityData.city.name, cityData);
}

export function historyCityVieve(reload) {
  //sprawdzenie długości local storage
  const storageLength = localStorage.length;

  //======usuwanie jezeli localStorage jest dłuższy niz 10
  if (storageLength > 10) {
    let usunIndex = 0;
    let flaga = true;
    let usun;
    while (flaga) {
      usun = window.localStorage.key(usunIndex);
      usunIndex++;
      if (usun !== 'cityData') flaga = false;
    }
    console.log('usuwam');
    console.log(usun);
    HistoryCityDelete(usun);
  }
  //======usuwanie jezeli localStorage jest dłuższy niz 10

  const arrayOfKey = [];
  for (let index = 0; index < storageLength; index++) {
    arrayOfKey.push(window.localStorage.key(index));
  }
  GenerateViewHistory(arrayOfKey, reload);
}

export function HistoryCityDelete(index) {
  removeStorage(index);
}

function GenerateViewHistory(arrayOfKey, reload) {
  if (reload === 1) {
    setTimeout(() => {
      location.reload();
    }, 500);
  } else {
    const historySection = document.querySelector('.history');

    arrayOfKey.forEach(el => {
      let history = document.createElement('div');
      history.classList.add('history_button');

      let historyArray = null;
      historyArray = `
    <a class="history_button_link" href="${el}">
      ${loadStorage(el).city.name}
    </a>
    <a class="history_button_delete" href="${el}">X</a>`;
      history.innerHTML = historyArray;

      historySection.append(history);
    });
    const $deleteButtons = document.querySelectorAll('.history_button_delete');
    const $historyButtons = document.querySelectorAll('.history_button_link');

    // dodawanie event do kazdego przycisku w histori
    for (let i = 0; i < $deleteButtons.length; i++) {
      $deleteButtons[i].addEventListener('click', ev => {
        ev.preventDefault();
        let element = ev.path[0].attributes[1].nodeValue;
        // sprawdzenie czy nie usuniesz cityData
        if (element !== 'cityData') {
          HistoryCityDelete(element);
          location.reload();
        }
      });

      //dodanie eventu do przełączania pomiedzy miastami z historii
      $historyButtons[i].addEventListener('click', ev => {
        ev.preventDefault();
        let element = ev.path[0].attributes[1].nodeValue;
        if (element !== 'cityData') {
          let object = loadStorage(element);
          HistoryCityDelete(element);
          let oldCityData = loadStorage('cityData');
          saveStorage('cityData', object);
          saveStorage(oldCityData.city.name, oldCityData);
          location.reload();
        }
      });
    }
  }
}
