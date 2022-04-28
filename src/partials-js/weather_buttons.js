export function setTodayAsActive() {
  const todayBtn = document.querySelector('#today-btn');
  const Days5Btn = document.querySelector('#Days5Btn');
  todayBtn.classList.remove('not-active');
  Days5Btn.classList.add('not-active');
}

export function set5DaysAsActive() {
  const todayBtn = document.querySelector('#today-btn');
  const Days5Btn = document.querySelector('#Days5Btn');
  Days5Btn.classList.remove('not-active');
  todayBtn.classList.add('not-active');
}
