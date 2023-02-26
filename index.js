function updateClock() {
  let hour = document.getElementById('hour');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let period = document.getElementById('period');
  let now = new Date();
  let hou = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let pe = 'AM';
  if (hou >= 12) {
    pe = 'PM';
  }
  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou = hou - 12;
  }
  if (hou < 10) {
    hour.innerHTML = '0' + hou;
  } else {
    hour.innerHTML = hou;
  }
  if (min < 10) {
    minutes.innerHTML = '0' + min;
  } else {
    minutes.innerText = min;
  }
  if (sec < 10) {
    seconds.innerHTML = '0' + sec;
  } else {
    seconds.innerText = sec;
  }
}
setInterval(updateClock, 1000);
