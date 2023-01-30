var now = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(now);
var currentHour = moment().hour();
var elements = $(".time-block");
console.log(elements);
$(".time-block").each(function() {
    var timeBlock1 = $(this).attr("id");
    console.log(timeBlock1);
    var timeBlock = timeBlock1.substr(-2);
    console.log(timeBlock);
/*     if (timeBlock < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (timeBlock === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

    } */
});

$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, task);
});

$("#hour09 .description").val(localStorage.getItem("hour09"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));



