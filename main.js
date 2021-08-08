const span = document.querySelector(".days-left");

function daysLeftToWedding(weddingDate) {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  span.innerText = days;
}

function countdownToWedding() {
  const weddingDate = new Date("Oct 14, 2022 15:00:00").getTime();
  daysLeftToWedding(weddingDate);
}


countdownToWedding();