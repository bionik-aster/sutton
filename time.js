generalT = document.getElementById("time");
summerT = document.getElementById("summertime");
const options = {
    timeZone: 'Etc/UTC',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
};
const sOptions = {
    timeZone: 'Africa/Algiers',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}
const formatter = new Intl.DateTimeFormat('en-US', options);
const sFormatter = new Intl.DateTimeFormat('en-US', sOptions)
function updateClock() {
  var now = new Date();
  var time = formatter.format(now);
  generalT.innerHTML = time;
  var sTime = sFormatter.format(now);
  summerT.innerHTML = sTime;
}

setInterval(updateClock, 1000);