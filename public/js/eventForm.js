$(document).ready(function () {
    var title = $("#event-title");
    var startDate = $("#event-start-date");
    var description = $("#event-description");
    var startTime = $("#event-start-time");
    var endTime = $("#event-end-time");
    var location = $("#event-location");

    $("#eventSubmit").on("click", handleEventFormSubmit);

    function handleEventFormSubmit(event) {

        if (title.val().trim() == null || startDate.val().trim() == null || description.val().trim() == null || startTime.val().trim() == null || endTime.val().trim() == null || location.val().trim() == null || title.val().trim() == '' || startDate.val().trim() == '' || description.val().trim() == '' || startTime.val().trim() == '' || endTime.val().trim() == '' || location.val().trim() == '' ) {
            alert("All fields must be filled out.");
            return;
        }

        createEvent(
            {
                eventName: title
                    .val()
                    .trim(),
                location: location
                    .val()
                    .trim(),
                description: description
                    .val()
                    .trim(),
                start_date: startDate
                    .val()
                    .trim(),
                start_at: startTime
                    .val()
                    .trim(),
                end_at: endTime
                    .val()
                    .trim()
            }
        );
    }

    // A function for creating an User
    function createEvent(userData) {
        $.post("/submitevent", userData)
        window.location.reload();
    }

    

});
