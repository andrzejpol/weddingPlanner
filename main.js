const span = document.querySelector(".days-left");

function renderDaysLeft(daysLeft, hoursLeft) {
  span.innerText = `${daysLeft} dni ${hoursLeft} godzin`;
}

function getDays(distance) {
  return Math.floor(distance / (1000 * 60 * 60 * 24));
}

function getHours(distance) {
  return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function getWeddingDate() {
  return new Date("Oct 14, 2022 15:00:00").getTime();
}

function getCurrentDate() {
  return new Date().getTime();
}

function daysLeftToWedding(weddingDate) {
  const now = getCurrentDate();
  const distance = weddingDate - now;

  const days = getDays(distance);
  const hours = getHours(distance);
  renderDaysLeft(days, hours)
}

function countdownToWedding() {
  const weddingDate = getWeddingDate();
  daysLeftToWedding(weddingDate);
}

countdownToWedding();