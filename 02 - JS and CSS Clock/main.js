// function setDate() {
//   //   console.log({ Date });
//   const now = new Date();
//   const seconds = now.getSeconds();
//   console.log(seconds);
// }

const secondHand = document.getElementById("second-hand");

setInterval(moveSecondHand, 1000);

function moveSecondHand() {
  const now = new Date();
  const seconds = now.getSeconds();
  secondHand.style.transform = `rotate(${90 + seconds * 6}deg)`;
}
