document.addEventListener('DOMContentLoaded', function() {
  
  var days = document.querySelector('.days span');
  var hour = document.querySelector('.hour');
  var min = document.querySelector('.min');
  var second = document.querySelector('.second');
  var startDate = new Date("May 17, 2020 20:00:00");

  countTime();

  function countTime() {
    let today = new Date().getTime();
    let md = (today-startDate);
    let ms = md  % 86400000;
    days.innerText = Math.floor(md/(86400000));
    hour.innerText = Math.floor(ms / 3600000);
    min.innerText = Math.floor(ms % 3600000 / 60000);
    second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);

  }

  setInterval(countTime, 1000);

}, false);

