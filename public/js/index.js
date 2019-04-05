$(document).ready(function () {
    // Getting references to the name input and author container, as well as the table body
    var nameInput = $("#name");
    var emailInput = $("#email");
    var zipInput = $("#zip");
    var languageInput = $("#language");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an User
    $(document).on("submit", "#user-create", handleUserFormSubmit);


    // A function to handle what happens when the form is submitted to create a new User
    function handleUserFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput.val().trim().trim()) {
            console.log("EHHHHH");
            return;
        }
        // Calling the createUser function and passing in the value of the name input
        createUser(
            {
                name: nameInput
                    .val()
                    .trim()
            }, {
                email: emailInput
                    .val()
                    .trim()
            }, {
                zip: zipInput
                    .val()
                    .trim()
            }
            // , {
            //     languages: languageInput
            //         .val()
            //         .trim()
            // }

        );
    }

    // A function for creating an User
    function createUser(userData) {
        $.post("/api/users", userData)
    }

});
