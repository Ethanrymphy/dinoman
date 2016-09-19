$(function() {
    $.getJSON("http://api.giphy.com/v1/gifs/search?q=dinosaur&rating=pg13&api_key=dc6zaTOxFJmzC", function(data){
        $('.giphy').html('<img src ="' + data.data[1].images.fixed_height.url +'" />')
        $('.giphy1').html('<img src ="' + data.data[2].images.fixed_height.url +'" />')
        $('.giphy2').html('<img src ="' + data.data[3].images.fixed_height.url +'" />')
        $('.giphy3').html('<img src ="' + data.data[4].images.fixed_height.url +'" />')
        $('.giphy4').html('<img src ="' + data.data[5].images.fixed_height.url +'" />')
        $('.giphy5').html('<img src ="' + data.data[6].images.fixed_height.url +'" />')
      }).fail(function(data){
        console.error(data);
      });
});
