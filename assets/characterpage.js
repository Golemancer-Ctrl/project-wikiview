let charactersApi = "https://hp-api.herokuapp.com/api/characters"


function fetchApi() {

    fetch(charactersApi)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
        }

        return response.json();
    }).then(function (data) {
        console.log(data);
    });
}

fetchApi();