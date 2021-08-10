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

const getWeddingDateFromUser = () => {
  const year = Number(prompt("Podaj rok swojego ślubu: "));
  const month = Number(prompt("Podaj miesiąc swojego ślubu: "));
  const day = Number(prompt("Podaj dzień swojego ślubu: "));

  const ourWedding = new Wedding(year, month - 1, day);
  return ourWedding;
}

const renderTimeToWedding = wedding => span.innerText = `${wedding.getDaysLeftToWeddingDay()} dni ${wedding.getHoursLeftToWeddingDay()} godzin`;


renderTimeToWedding(getWeddingDateFromUser());