const myApiKey = "7J1uypi2AfYBuHtNW4z6895OlDo3EMWPn5ICsy6M";
let linkArr = [
  "https://api.watchmode.com/v1/title/1159480/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159473/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159479/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159476/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159478/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159477/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159474/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159475/sources/?apiKey=",
];
let modal = document.getElementsByClassName("modal");

localStorage.setItem("linkArr", JSON.stringify(linkArr));

let streamOptions = [];



document.getElementById("filmList")
  .addEventListener("change", function (event) {
    var userSelection = document.querySelector(
      `[data-movie="${event.target.selectedIndex}"]`
    );
    console.log(event);
    console.log(event.target);
    console.log(event.target.selectedIndex);
    fetchFilm(event.target.selectedIndex);
  });

function fetchFilm(filmNum) {
  let potterFilm = linkArr[filmNum] + myApiKey;

  fetch(potterFilm)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
       
      return response.json();
      
      
    })
    .then(function (data) {
       
      console.log(data); 
      const streamingServices = data.map(title => title.name);
      console.log(new Set(streamingServices));
      
    
      
    });
}


