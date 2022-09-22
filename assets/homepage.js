var myApiKey = "7J1uypi2AfYBuHtNW4z6895OlDo3EMWPn5ICsy6M";


function createApi(query) {
    var searchQuery = "https://api.watchmode.com/v1/search/?apiKey="+myApiKey+"&search_field=name&search_value="+query

    fetch(searchQuery)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    }).then(function (data) {
        console.log(data);
    }
     )

    

}

createApi("harry potter");