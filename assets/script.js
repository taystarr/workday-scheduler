var currentDateEl = document.querySelector("#currentDay");

// display current date
var rightNow = moment().format("MMMM Do, YYYY");
currentDateEl.textContent = rightNow;

