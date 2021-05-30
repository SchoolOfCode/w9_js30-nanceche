const secondHand = document.getElementById("second-hand");
const minHand = document.getElementById("min-hand");
const hourHand = document.getElementById("hour-hand");
let count = 0;
setInterval(function () {
  count++;
  secondHand.style.transform = `rotate(${90 + 6 * count}deg)`;
}, 1000);

setInterval(function () {
  count++;
  minHand.style.transform = `rotate(${90 + 6 * count}deg)`;
}, 60000);

setInterval(function () {
  count++;
  hourHand.style.transform = `rotate(${90 + 6 * count}deg)`;
}, 600000);
