const span = document.querySelector(".days-left");

class Wedding {
  constructor(year, month, day) {
    this.weddingDateInMiliseconds = new Date(year, month, day).getTime();
    this.currentDateInMiliseconds = new Date().getTime();
  }
  getTimeDifferenceInMiliseconds() {
    return this.weddingDateInMiliseconds - this.currentDateInMiliseconds;
  }
  getDaysLeftToWeddingDay() {
    return Math.floor(this.getTimeDifferenceInMiliseconds() / (1000 * 60 * 60 * 24));
  }
  getHoursLeftToWeddingDay() {
    return Math.floor((this.getTimeDifferenceInMiliseconds() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
};

const renderTime = (wedding) => {
  span.innerText = `${wedding.getDaysLeftToWeddingDay()} dni ${wedding.getHoursLeftToWeddingDay()} godzin`;
}

const ourWedding = new Wedding(2022, 9, 14);
renderTime(ourWedding);