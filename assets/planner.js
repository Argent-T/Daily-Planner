
var nineA = document.querySelector("#nineA");
var tenA = document.querySelector("#tenA");
var elevenA = document.querySelector("#elevenA");
var twelveP = document.querySelector("#twelveP");
var oneP = document.querySelector("#oneP");
var twoP = document.querySelector("#twoP");
var threeP = document.querySelector("#threeP");
var fourP = document.querySelector("#fourP");
var fiveP = document.querySelector("#fiveP");

var times = document.querySelector(".times");


var nineAm = [];
var tenAm = [];
var elevenAm = [];
var twelvePm = [];
var onePm = [];
var twoPm = [];
var threePm = [];
var fourPm = [];
var fivePm = [];




// Button Click////////////////////////////////////
times.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button") === true) {



    }

});



// Time display////////////////////////
document.querySelector("#currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
var update = function () {
    document.querySelector("#currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

var now = moment().format("h:mm a");
console.log(now)