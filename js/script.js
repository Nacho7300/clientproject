/* global $ */

$("#search-button").click(function() {
    var searchTerm = $("#search-term").val();
//   $.ajax({
//   url: "http://www.omdbapi.com/?apikey=13d0e91&s=" + searchTerm
//       var url = response.data[0].images.original.url;
//  $('body').append('<img src="' + url + '">');
//   },
//   error:function() {
//       alert("error");
//   }
  
// });
$.ajax({
          url: "https://www.omdbapi.com/?apikey=13d0e91&s=" + searchTerm,
          method: "GET",
          success: function(response) {
               $(".Search").html("");
              response.Search.forEach(function(movies){
              
             $(".Search").append("<img src=" + movies.Poster + ">"); 
             $(".Search").append("<div> " + movies.Title + "</div>");    
              })
              //$('body').append(response)
             
          }
          
})
});
 