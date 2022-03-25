var currentDateEl = document.querySelector("#currentDay");
var saveButton = document.querySelector("#saveBtn");

// display current date
var rightNow = moment().format("MMMM Do, YYYY");
currentDateEl.textContent = rightNow;

// connect current time to text boxes
var timeNow = moment().format("HH");
console.log(timeNow);

var hourStatus = function() {

    $(".time-block").each(function() {
        var timeBlock = $(this).attr("id");

        if (timeNow > timeBlock) {
            $(this).find(".task").addClass("past");
        } else if (timeNow < timeBlock) {
            $(this).find(".task").addClass("future");
        } else {
            $(this).find(".task").addClass("present");
        }

    })    
};

hourStatus();

$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".task").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, text);

    console.log(text, hour);

});

$("#09 .task").val(localStorage.getItem("09"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#13 .task").val(localStorage.getItem("13"));
$("#14 .task").val(localStorage.getItem("14"));
$("#15 .task").val(localStorage.getItem("15"));
$("#16 .task").val(localStorage.getItem("16"));
$("#17 .task").val(localStorage.getItem("17"));

getTask();