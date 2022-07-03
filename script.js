const countdown = () => {
    const countDate = new Date("July 31, 2022 23:59:59").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
  
    document.querySelector("#day").innerText = textDay;
    document.querySelector("#hour").innerText = textHour;
    document.querySelector("#minute").innerText = textMinute;
    document.querySelector("#second").innerText = textSecond;
  
    if (gap <= 0) {
      clearInterval(watchCountdown);
      document.querySelector("#day").innerHTML = "00";
      document.querySelector("#hour").innerHTML = "00";
      document.querySelector("#minute").innerHTML = "00";
      document.querySelector("#second").innerHTML = "00";
    }
  };
  
  let watchCountdown = setInterval(countdown, 1000);
  