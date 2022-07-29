// variable to get current day
var day = moment();
// calling variable and setting it into program with correct format
$("#currentDay").text(day.format("dddd, MMMM Do"));

// variables for the for loop
var time = day.format("HH")
var j = 9

// for loop to check if the time is past the work time
for (let i = 0; i < 9; i++) {
    if(time > j) {
        $('.container').children().eq(i).addClass("past")
    }
    else if(time == j) {
        $('.container').children().eq(i).addClass("present")
    }
    else {
        $('.container').children().eq(i).addClass("future")
    }
    j += 1
}

var input = $('<input>')

// Function to save input
function saveInput() {
    var nineEl = nine.children().eq(2)
    localStorage.setItem("work", nineEl)
    var nineInput = localStorage.getItem("work")
    console.log(nineInput);
}

var nine = $('#nine');

nine.on('click', saveInput)
