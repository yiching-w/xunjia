let date = new Date("7,31,2022")

let CountDay = document.getElementById("days")
let CountHour = document.getElementById("hours")
let CountMinutes = document.getElementById("minutes")
let CountSeconds = document.getElementById("seconds")
let Int = setInterval(UpdateTime, 1)

function UpdateTime() {
    let Now = new Date().getTime()
    let distance = date - Now

    CountDay.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));

    CountHour.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    CountMinutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    CountSeconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);


    if (distance < 0) {
        clearInterval(Int)
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00"
    }
}