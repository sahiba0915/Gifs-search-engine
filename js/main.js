/* get the data on click*/
document.querySelector('.js-go').addEventListener('click', function() {

  var inputValue = document.querySelector(".js-userinput").value;
  var userInput = getUserInput();

  search(userInput);

});


/* get the data on keyup*/
document.querySelector('.js-userinput').addEventListener('keyup', function(e) {

    if(e.which === 13)
    {
        var userInput = getUserInput();
        search(userInput);
    }
  
  });

/* getUserInput Function */

  function getUserInput() {

    var inputValue = document.querySelector('.js-userinput').value;

    return inputValue;
  }

/* Api call */

function search( searchQuery){

    var url = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + searchQuery;

    // AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
    
    GiphyAJAXCall.addEventListener('load', function( data ) {

        var actualData = data.target.response;
        display(actualData);
        console.log(actualData);
    });
}


/* display function */

function display( response ) {
  var response = JSON.parse(response);
  var images = response.data;


  var show = document.querySelector('.js-container');
  show.innerHTML = "";


/* foreach images */

images.forEach(function(image){

//find image
  var src = image.images.fixed_height.url;

  //concatenate a new img tag
  show.innerHTML += "<img src='"+ src +"' class='container-image' />";

});
}