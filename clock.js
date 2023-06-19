function clock() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let hourDeg = hours * 30 + minutes / 2;
  let minuteDeg = minutes * 6 + seconds / 10;
  let secondDeg = seconds * 6;

  document.querySelector(".hour").style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector(".second").style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(clock, 1000);
// console.log(clock);
