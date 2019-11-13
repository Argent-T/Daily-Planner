
var nineA = document.querySelector("#nineA");
var tenA = document.querySelector("#tenA");
var elevenA = document.querySelector("#elevenA");
var twelveP = document.querySelector("#twelveP");
var oneP = document.querySelector("#oneP");
var twoP = document.querySelector("#twoP");
var threeP = document.querySelector("#threeP");
var fourP = document.querySelector("#fourP");
var fiveP = document.querySelector("#fiveP");
var now = moment().format("h:mm a")


var plans = {
    nineAm: "",
    tenAm: "",
    elevenAm: "",
    twelvePm: "",
    onePm: "",
    twoPm: "",
    threePm: "",
    fourPm: "",
    fivePm: "",
}


document.querySelector("#currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');


var update = function () {
    document.querySelector("#currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);


console.log(now)