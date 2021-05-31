const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");

function initialTime() {
  const now4 = new Date();
  const originalSec = now4.getSeconds();
  secondHand.style.transform = `rotate(${90 + originalSec * 6}deg)`;

  const now5 = new Date();
  const originalMin = now5.getMinutes();
  minuteHand.style.transform = `rotate(${90 + originalMin * 6}deg)`;

  const now6 = new Date();
  const originalHour = now6.getHours();
  hourHand.style.transform = `rotate(${90 + originalHour * 6}deg)`;
}
initialTime();
setInterval(moveSecondHand, 1000);

function moveSecondHand() {
  const now = new Date(); //why can't I declare this outside the function
  const seconds = now.getSeconds();
  secondHand.style.transform = `rotate(${90 + seconds * 6}deg)`;
  console.log(seconds);
}

function moveMinuteHand() {
  const now1 = new Date();
  const minute = now1.getMinutes();
  console.log(minute);
  minuteHand.style.transform = `rotate(${90 + minute * 6}deg)`;
}

setInterval(moveMinuteHand, 60000);

function moveHourHand() {
  const now3 = new Date();
  const hour = now3.getHours();
  console.log(hour);
  hourHand.style.transform = `rotate(${90 + hour * 6}deg)`;
}

setInterval(moveHourHand, 600000);
