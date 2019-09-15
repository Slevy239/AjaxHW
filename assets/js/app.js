$(document).ready(function() {

let buttons = ['phish', 'Grateful Dead', 'Philadelphia'];

// function displayGif() {
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    // buttons + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    
// $.ajax({
//     url: queryURL,
//     method: "GET"
// })
//     .then(function (response) {

//         let results = response.data;
//     })



function displayGif() { 
    $("#gifs").empty();
    for (i = 0; i < buttons.length; i++) {
                let btnTag = $("<button>");
                btnTag.addClass("gif-btn");
                btnTag.attr("data-name", buttons[i]);
                btnTag.text(buttons[i]);
                $("#buttons-view").append(btnTag);
                console.log(buttons[i])
            }
        }

    $("#add-gif").on("click", function(event) {
        event.preveentDefault();
        let jif = $("#input").val().trim();
        buttons.push(jif);
        displayGif()
        console.log(jif)
    });
    $(document).on("click", ".gif-btn", displayGif);

    displayGif();
})