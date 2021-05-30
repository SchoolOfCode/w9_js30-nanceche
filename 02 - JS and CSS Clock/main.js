//get handle
//every 1 second rotate by 6 degrees
//start at x =100
let secondHand = document.getElementById("second-hand");

setInterval(function () {
  secondHand.classList.add(".hand-rotate ");
}, 1000);
