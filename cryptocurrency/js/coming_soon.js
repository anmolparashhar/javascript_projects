const launchDate = new Date("Jan 01, 2025 00:00:00").getTime();

const interval = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = launchDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("day-count").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hour-count").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minute-count").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("second-count").textContent = seconds < 10 ? "0" + seconds : seconds;

    if (timeRemaining < 0) {
        clearInterval(interval);
        document.querySelector(".content").innerHTML = "<h1>We're Live!</h1><p>Welcome to our new crypto platform!</p>";
    }
}, 1000);
