var timeEl = document.querySelector(".time");
var amPmEl = document.querySelector(".am__pm");
var weekEl = document.querySelector(".week");
var dateEl = document.querySelector(".date");

// Current Hour
function time() {
    var current = new Date();
    var hour = current.getHours();
    var min =
        current.getMinutes() <= 9 ?
        "0" + current.getMinutes() :
        current.getMinutes();

    return (res = hour + ":" + min);
}

// AM or PM
function amOrPm() {
    if (new Date().getHours() < 11) {
        return "AM";
    } else {
        return "PM";
    }
}

// Cuurent Weekday
function findOutCurrentWeek() {
    return (curWeekday = new Date().toLocaleString("en-us", {
        weekday: "short",
    }));
}

// Cuurent Date
function findOutCurrentDate() {
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    return month + "/" + day;
}

setInterval(function() {
    timeEl.innerHTML = time();
    amPmEl.innerHTML = amOrPm();
    weekEl.innerHTML = findOutCurrentWeek();
    dateEl.innerHTML = findOutCurrentDate();
}, 1000);