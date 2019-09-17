$(document).ready(function () {

    var buttons = ['phish', 'philadelphia'];

    function displayButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i <buttons.length; i++) {
            var gifBtn = $("<button>");
            gifBtn.addClass("button");
            gifBtn.addClass("btn btn-primary");
            gifBtn.attr("data-name", buttons[i]);
            gifBtn.html(buttons[i]);
            $("#buttons-view").append(gifBtn);
            console.log("display buttons");
        }
    }

    
    function displayGif() {
       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttons +"&api_key=tfZU03Q2B2QpE3Wn8OdWajo0JImv7arL";
       console.log(queryURL);
       $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            console.log(response);
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");
                gifDiv.addClass("gifDiv");
                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                
                var gifImg = $("<img>");
                gifImg.attr("src", results[i].images.fixed_height_small.url);
                gifImg.addClass("image");
                gifDiv.append(gifImg);
                $("#gifs").append(gifDiv);
                console.log("displayGif");
                
            }
        })
    }
    $("#add-gif").on("click", function() { //adds buttons to array
        event.preventDefault();
        var button = $("#gif-input").val();
        buttons.push(button);
        console.log(buttons)
        displayButtons();
    })
    displayButtons();
    displayGif()
    
    // newBtn()

    // function searchClicked() {
    //     $("#")
    // }

})