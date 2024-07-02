function displayCurrentTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const day = daysOfWeek[now.getUTCDay()]; 
  const date = Date.now();


const timeString = `${day}, ${date} UTC`;


  
  document.querySelector(".Current-time").textContent = timeString;
}

setInterval(displayCurrentTime, 1000);
displayCurrentTime();
