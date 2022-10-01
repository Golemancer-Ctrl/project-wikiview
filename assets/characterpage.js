let charactersApi = "https://hp-api.herokuapp.com/api/characters";
let selectedCharacterIndex = localStorage.getItem("charIndex");



function fetchApi() {
  fetch(charactersApi)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
      return response.json();
    })
    .then(function (charData) {
      localStorage.setItem("charObject", charData[selectedCharacterIndex]);
    })
}

fetchApi();

let charInfo = localStorage.getItem("charObject");

console.log(charInfo);

