$(document).ready(function () {
    var nameInput = $("#name");
    var emailInput = $("#email");
    var zipInput = $("#zip");
    var languageInput = $("#language");

    $("#user-create").on("click", handleUserFormSubmit);

    function handleUserFormSubmit(event) {

        if (!nameInput.val().trim().trim() || !emailInput.val().trim().trim() || !zipInput.val().trim().trim() || !languageInput.val().trim().trim()) {
            event.preventDefault();       
            alert("All fields must be filled out.");
            return;
        }

        createUser(
            {
            name: nameInput
                    .val()
                    .trim(), 
            email: emailInput
                    .val()
                    .trim(),
            zip: zipInput
                    .val()
                    .trim(),
            languages: languageInput
                    .val()
                    .trim()
            }
        );
    }

    // A function for creating an User
    function createUser(userData) {
        $.post("/api/users", userData)
    }

});
