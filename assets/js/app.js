$(document).ready(function () {

    var buttons = ['Eagles', 'Phillies', 'Flyers', 'Sixers', 'Embiid', 'Claude Giroux', 'Bryce Harper', 'Carson Wentz', 'Julius Erving', 'Boban Marjanovic']; // buttons for gif searchs
    var gifNumber = 10; // results per search


    function displayButtons() {
        $("#buttons-view").empty(); //clears id=buttons-view if there is anything previously there
        for (var i = 0; i < buttons.length; i++) {
            var gifBtn = $("<button>"); //variable to created button tag
            gifBtn.addClass("button");//adds button class
            gifBtn.addClass("btn-warning") //bootstrap attributes
            gifBtn.attr("data-name", buttons[i]); //gives each button data-name of the button index
            gifBtn.text(buttons[i]); //adds the text from the array and updates the button's text on the DOM
            $("#buttons-view").append(gifBtn); //updates id=buttons-view with the buttons
        };
    };

    function addNewBtn() {
        $("#add-gif").on("click", function (event) { //click event for the "search a topic" button
        event.preventDefault()
            var button = $("#input").val(); //grabs value from the input
            buttons.push(button); //pushs the input into the array, creating a new button
            if (button === "") { //if input is blank, run noInput function
                noInput();
            } else { // esle, continue creating button
                displayButtons();
            };
        });
    };

    function noInput() {
        alert("Enter Something!!!") //alerts user
    };


    function displayGif() { // api query, with buttons array, limiting search results and API key
        var buttons = $(this).attr("data-name");    

        $("#gifs").empty()
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttons + "&limit=" + gifNumber + "&api_key=tfZU03Q2B2QpE3Wn8OdWajo0JImv7arL";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                
                var gif = $("<img>");
                var animate = results[i].images.original.url;
                var still = results[i].images.original_still.url;
                
                    gif.addClass("image")
                    gif.attr("data-state", "still")
                    gif.attr("src", still);
                    gif.attr("data-animate", animate);
                    gif.attr("data-still", still)
                    gif.attr("class", "gif-image");
                    $("#gifs").append(gif);
                };
            });
    };

    
    $(document).on("click", '.gif-image', function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");

        }
    });     
    $(document).on("click", ".button", displayGif);

    displayButtons();
    addNewBtn();
})