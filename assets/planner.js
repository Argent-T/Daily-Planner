
var nineA = document.querySelector("#nineA");
var tenA = document.querySelector("#tenA");
var elevenA = document.querySelector("#elevenA");
var twelveP = document.querySelector("#twelveP");
var oneP = document.querySelector("#oneP");
var twoP = document.querySelector("#twoP");
var threeP = document.querySelector("#threeP");
var fourP = document.querySelector("#fourP");
var fiveP = document.querySelector("#fiveP");
var inputs = document.querySelectorAll(".input")
var times = document.querySelector(".times");


// queryselector all common class for array of input boxes


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

//    var first = moment().hour(9)
//    console.log(first.unix())

// Time display////////////////////////
document.querySelector("#currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
var update = function () {
    document.querySelector("#currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');



    if (moment().hour() == 9) {
        inputs[0].className = "past present"
        for (i = 1; i < inputs.length; i++) {
            inputs[i].className = "past future"
        }
    }
    if (moment().hour() == 10) {
        inputs[0].className = "past"
        inputs[1].className = "past present"
        for (i = 2; i < inputs.length; i++) {
            inputs[i].className = "past future"
        }
    }
    if (moment().hour() == 11) {
        inputs[1].className = "past"
        inputs[2].className = "past present"
        for (i = 3; i < inputs.length; i++) {
            inputs[i].className = "past future"
        }
    }
    if (moment().hour() == 12) {
        inputs[2].className = "past"
        inputs[3].className = "past present"
        for (i = 4; i < inputs.length; i++) {
            inputs[i].className = "past future"
        }
    }
    if (moment().hour() == 13) {
        inputs[3].className = "past"
        inputs[4].className = "past present"
        for (i = 5; i < inputs.length; i++) {
            inputs[i].className = "past future"
        }
    }
    if (moment().hour() == 14) {
        inputs[4].className = "past"
        inputs[5].className = "past present"
        for (i = 6; i < inputs.length; i++) {
            inputs[i].className = "past future"
        }
    }
    if (moment().hour() == 15) {
        inputs[5].className = "past"
        inputs[6].className = "past present"
        for (i = 7; i < inputs.length; i++) {
            inputs[i].className = "past future"
        }

    }
    if (moment().hour() == 16) {
        inputs[6].className = "past"
        inputs[7].className = "past present"
        for (i = 8; i < inputs.length; i++) {
            inputs[i].className = "past future"
        }

    }
    if (moment().hour() == 17) {
        inputs[7].className = "past "
        inputs[8].className = "past present"

    }

}
setInterval(update, 1000);



var now = moment().format("h:mm a");
console.log("now: " + now)
console.log("hour" + moment().hour())