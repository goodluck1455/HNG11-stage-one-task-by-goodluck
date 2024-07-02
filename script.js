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
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");

  
  const timeString = `${day}, ${hours}:${minutes}:${seconds} UTC`;

  
  document.querySelector(".Current-time").textContent = timeString;
}

setInterval(displayCurrentTime, 1000);
displayCurrentTime();
