const myApiKey = "7J1uypi2AfYBuHtNW4z6895OlDo3EMWPn5ICsy6M";
let linkArr = [
"https://api.watchmode.com/v1/title/1159480/sources/?apiKey=", 
"https://api.watchmode.com/v1/title/1159473/sources/?apiKey=", 
"https://api.watchmode.com/v1/title/1159479/sources/?apiKey=", 
"https://api.watchmode.com/v1/title/1159476/sources/?apiKey=", 
"https://api.watchmode.com/v1/title/1159478/sources/?apiKey=",
"https://api.watchmode.com/v1/title/1159477/sources/?apiKey=",
"https://api.watchmode.com/v1/title/1159474/sources/?apiKey=",
"https://api.watchmode.com/v1/title/1159475/sources/?apiKey="
];
let modal = document.getElementsByClassName("modal");

function fetchFilm(filmNum) {
    let potterFilm = linkArr[filmNum]+myApiKey;

    fetch(potterFilm)
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

fetchFilm(0);