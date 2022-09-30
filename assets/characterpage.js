let charactersApi = "https://hp-api.herokuapp.com/api/characters";
let selectedCharacter = localStorage.getItem();



function fetchApi() {
  fetch(charactersApi)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const characterData = data.map((title) => title.name);
    })
    
}

fetchApi();


