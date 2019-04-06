$(document).ready(function () {
    var queryURL =  "https://api.myjson.com/bins/1b3h3c";
    selectors = {
        userZipCode: '#zip',
      };
    
    
    
    $(selectors.formSubmitButton).on('click', function (event) {
        event.preventDefault();
        // Clear current page results
        clearResults();
        // Get user input
        // var name = $(selectors.userName).val().trim();
    var zip = $(selectors.userZipCode).val().trim();
    var queryURL =  "https://api.myjson.com/bins/1b3h3c";
    if (!patterns.zipInput.test(zip)) {
        $(selectors.modalPara).text('Zip code must be 5 digits');
        $(selectors.inputModal).modal('open');
        return;
      }
      queryURL = queryURL + '&id=' + id + '&name'+ name + '&zip=' + zip;
    })