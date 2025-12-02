setInterval(function () {
    let date = new Date();
    let hours = date.getHours() % 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourDeg = (hours * 30) + (minutes * 0.5);
    let minuteDeg = (minutes * 6) + (seconds * 0.1);
    let secondDeg = seconds * 6;

    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
}, 1000);