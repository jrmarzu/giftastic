$(document).ready(function(){
    var topics = ['Bear', 'fish', 'bird', 'Dear', 'shark', 'bunny', 'monkey', 'lamb'];

  // we are referring to the animals above when using fucntion 
    function buttonExpress(){
        $('#buttonsView').empty();
        
        for ( var i=0; i < topics.length; i++) {
            // the lines below are needed because we are making the buttons and what they will be doing
            var a = $('<button>');
            a.addClass('expression');
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#buttonsView').append(a);
        }
    }    
    buttonExpress();
   
//the line below is our on click function
  $(document).on('click', '.expression', function() {

    var car = $(this).html(); 
    console.log(animal);
    //the 2nd phrase in the line blow is from my api key that we had to get by making an app in giphy api 
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "hsT0F1SfAAM4Xs5945SIIXBeEBciyJY8";
        $.ajax({url: queryURL, method: 'GET'})
        .done(function(response) {
            // when we do the function we are pulling the data 
            var results = response.data;
            //the line below will empty the div before adding more gifs 
            $('#expressView').empty();
                for ( var j=0; j < results.length; j++) {
                    var imageDiv = $('<div>');
                    var imageView = results[j].images.fixed_height.url;
                    var still = results[j].images.fixed_height_still.url;
                // the line below will make our animal gif "pause" or "still" when it has been clicked. and vice versa, bringing it to life as well too
                    var expressImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
                    expressImage.attr('data-state', 'still');
                    $('#expressView').prepend(expressImage);
                    expressImage.on('click', playGif);
                // i had trouble trynig to get the rating of teh gif to pull and put it above the gif
            } 
        }); 

        function playGif() { 
                    var state = $(this).attr('data-state');
                    console.log(state);
                 if ( state == 'still'){
                     $(this).attr('src', $(this).data('animate'));
                     $(this).attr('data-state', 'animate');
                 } else {
                     $(this).attr('src', $(this).data('still'));
                     $(this).attr('data-state', 'still');
                    }

                } 
                
    }) 

});
