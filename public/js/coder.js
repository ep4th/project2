    jQuery.ajax({
        type: "GET",
        url: "https://api.myjson.com/bins/1b3h3c",
        success: function(data)
        {
            console.log(data);
    
            jQuery.each(data.results, function(i, val) {
                // here you can do your magic
                $("#email").append(document.createTextNode(val.email));
                $("#zip").append(document.createTextNode(val.zip));
                $("#langauges").append(document.createTextNode(val.knownLangauges));
            });
        }
    });