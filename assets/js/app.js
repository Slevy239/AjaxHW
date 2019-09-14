let buttons = ['phish', 'Grateful Dead', 'Philadelphia'];
console.log(buttons)
function displayGif() {

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    buttons + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        let results = response.data;
        for (let i = 0; i < buttons.length; i++) {
            let gifDiv = $('<div>');
            let p = $('<p>').text("Rating" + results[i].rating);
            let gifImg = $('<img>');
            gifImg.attr("src", results[i].url);
            gifDiv.append(p);
            gifDiv.append(gifImg);
            $('gifs').prepend(gifDiv)

        }
    })

    function renderButtons() {
        $('#buttons').empty();
        for (let i = 0; i < buttons.length; i++) {
            let a = $("<button>");
            a.addClass("gif-btn");
            a.attr("data-name", buttons[i]);
            a.text(buttons[i]);
            $("#buttons").append(a);
        }
    }

    $('#add-gif'),on('click', function(event) {
        event.preventDefault();
        let gif = $("#input").val().trim();
        gif.push(buttons);
        renderButtons();
        console.log(buttons)
    })


    $(document).on("click", "#gif-btn", displayGif);
    renderButtons();
    
}
displayGif()

        
        
