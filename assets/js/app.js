$(document).ready(function () {

    var buttons = ['Eagles', 'Phillies', 'Flyers', 'Sixers', 'Embiid']; // buttons for gif searchs
    var gifNumber = 5; // results per search
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttons + "&limit=" + gifNumber + "&api_key=tfZU03Q2B2QpE3Wn8OdWajo0JImv7arL";

    
    function displayButtons() {
        $("#buttons-view").empty(); //clears id=buttons=view if there is anything previously there
        for (var i = 0; i < buttons.length; i++) {
            var gifBtn = $("<button>"); //variable to created button tag
            gifBtn.addClass("button");//adds button class
            gifBtn.addClass("btn-success") //bootstrap attributes
            gifBtn.attr("data-name", buttons[i]); //gives each button data-name of the button index
            gifBtn.text(buttons[i]); //adds the text from the array and updates the button's text on the DOM
            $("#buttons-view").append(gifBtn); //updates id=buttons-view with the buttons
        };
    };

    function addNewBtn() {
        $("#add-gif").on("click", function (event) { //click event for the "search a topic" button
            event.preventDefault();
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
        var buttons = $(this).attr("data-name")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttons + "&limit=" + gifNumber + "&api_key=tfZU03Q2B2QpE3Wn8OdWajo0JImv7arL";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response)
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>"); //creates new div for each gif
                gifDiv.addClass("gifDiv"); // gives each gif a class name
                var gifRating = $("<p>").text("Rating: " + results[i].rating); //dynamically adds paragraph tag with the gif's rating
                gifDiv.prepend(gifRating); // adds gif rating to the div
                var gifImg = $("<img>"); // creates img tag for each gif
                gifImg.attr("src", results[i].images.fixed_height.url); // accesses the gif within the JSON object, in images
                gifImg.addClass("image"); //adds new class called image
                gifDiv.append(gifImg); // adds the img tag to the div
                $("#gifs").append(gifDiv); //takes id=gifs from HTML and appeds with the new div for each gif 
            };
        });
    };

   $(document).on("click", ".button", displayGif);

    displayButtons();
    displayGif();
    addNewBtn();
})