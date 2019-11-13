var currentDay = document.querySelector("#currentDay")

var dateValue = moment().format("dddd, MMMM Do YYYY");
console.log(dateValue)

currentDay.innerHTML = dateValue;