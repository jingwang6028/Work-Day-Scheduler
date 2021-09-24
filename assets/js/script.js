var today = $("#currentDay");
var textEl = $("textarea"); // all textarea selected
var saveBtnEl = $(".saveBtn"); // all saveBtn selected
var timeBlockEl = $(".time-block"); // all time-block selected

// show today's date
today.text(moment().format("dddd, MMMM Do"));

// show current hour
var currentHour = moment().hour();
console.log(currentHour);

//compare current hour and schedule hour
timeBlockEl.each(function () {
  console.log($(this));
  var scheduleHr = parseInt($(this).attr("id"));
  console.log(scheduleHr);

  if (scheduleHr < currentHour) {
    console.log("heoo");
    $(this).parent().siblings("textarea").addClass("past");
  } else if (scheduleHr === currentHour) {
    console.log("hhhh");
    $(this).parent().siblings("textarea").addClass("present");
  } else {
    $(this).parent().siblings("textarea").addClass("future");
  }
});

// console.log(textEl);
// console.log(saveBtnEl);
// console.log(timeBlockEl);

// for each saveBtn, add click event and save time and textarea input to local storage
saveBtnEl.each(function (index) {
  //console.log($(this));
  $(this).on("click", function (event) {
    var hrTime = $(this).parent().siblings(".hour").children().text();
    var saveTextInput = $(this).parent().siblings("textarea").val();
    //console.log(hrTime);
    //console.log(saveTextInput);

    localStorage.setItem(hrTime, saveTextInput);
  });
});

// when refresh the page, the textarea input still display on the page
function init() {
  timeBlockEl.each(function (index) {
    var localHr = $(this).text();
    //console.log(localHr);
    var localSchedule = localStorage.getItem(localHr);

    $(this).parent().siblings("textarea").val(localSchedule);
  });
}
init();
