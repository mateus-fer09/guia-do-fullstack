function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }
  
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);
  
  const savedStartTime = getCookie("startTime");
  
  let startTime;
  if (savedStartTime) {
    startTime = new Date(savedStartTime);
  } else {
    startTime = new Date();
    setCookie("startTime", startTime, 7);
  }
  
  const countdown = setInterval(updateCountdown, 1000);
  
  function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
  
    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      document.getElementById("countdown").innerHTML = `
        <div class="cronomentro">
        <h1>Em-breve!</h1>
        <h3>Um guia para acelerar seus estudos no desenvolvimento web</h3>
        <div class="cont">${days} dias - ${hours}:${minutes}:${seconds}</div>
        </div>
      `;
    } else {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "Contagem regressiva encerrada!";
    }
  }
  
  updateCountdown();