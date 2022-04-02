// display current date on page load
var updateDate = function () {
    document.getElementById("currentDay")
    .innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a")
}
setInterval(updateDate, 1000);

$(document).ready(function() {
    $(".saveBtn").click(function() {
        var time = $(this).parent().attr("id")
        var task = $(this).siblings(".description").val()
        
        localStorage.setItem(time, task)
    })
})
//display time blocks for standard business hours
//color code times blocks - past, present, future

//when timeblock clidked, enter event info
//click save button to save to local storate
// data from event persists when page refreshed
