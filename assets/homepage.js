const myApiKey = "7J1uypi2AfYBuHtNW4z6895OlDo3EMWPn5ICsy6M";
let linkArr = [                             // array of APIs for streaming availability 
  "https://api.watchmode.com/v1/title/1159480/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159473/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159479/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159476/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159478/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159477/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159474/sources/?apiKey=",
  "https://api.watchmode.com/v1/title/1159475/sources/?apiKey=",
];
let filmDisplay = document.getElementById("filmDisplay");
let modal = document.getElementById("modal-film-display");
let modalTrigger = document.getElementsByClassName("js-modal-trigger");
let modalClose = document.getElementsByClassName("modal-close")[0];

localStorage.setItem("linkArr", JSON.stringify(linkArr));

let streamOptions = [];
console.log(streamOptions);

document.getElementById("filmList")           // getting specific item clicked
  .addEventListener("change", function (event) {
    //  var userSelection = //may not need //
    document.querySelector(
      `[data-movie="${event.target.selectedIndex}"]` 
    );
    console.log(event);
    console.log(event.target);
    console.log(event.target.selectedIndex);
    fetchFilm(event.target.selectedIndex);     // targeting selected film 
  });

function fetchFilm(filmNum) {                // fetching film streaming data from APIs
  let potterFilm = linkArr[filmNum] + myApiKey;    // linking film selection API URL to API key

  fetch(potterFilm)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const streamingServices = data.map((title) => title.name);
      console.log(new Set(streamingServices));
      let stream = new Set(streamingServices);
      let text = "";
      for (const x of stream.values()) {
        text += x + "<br>";
      }

      filmDisplay.innerHTML = text;
    });
}


filmList.onchange = function() {
  modal.classList.add('is-active');
  modal.style.display = 'block';
}


modalClose.onclick = function() {
  // modal.classList.remove('is-active');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  console.log(event);
}

const Select = document.getElementById("charList"); 
Select.addEventListener("change",function() {
  location = this.options[this.selectedIndex].value;
  localStorage.setItem("charIndex",this.options[this.selectedIndex].dataset.index); 
  console.log(this.options[this.selectedIndex].value);
}); 
let val = localStorage.getItem("charName"); 
if (val) Select.value===val; 



