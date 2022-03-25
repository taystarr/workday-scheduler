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
    });
};

hourStatus();


