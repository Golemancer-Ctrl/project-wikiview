let charactersApi = "https://hp-api.herokuapp.com/api/characters";
let selectedCharacterIndex = JSON.parse(localStorage.getItem("charIndex"));

let sigText = document.querySelector("#sigSpell");
let sigSpells = [
  "Stupefy",
  "Muffliato",
  "Wordless Stupefy",
  "Expelliarmus",
  "Sectumsempra",
];
let charQuotes = [
  "I realize I never really thanked you properly for tipping me off about those dragons.",
  "Honestly, if you were any slower, you’d be going backwards.",
  "I’ve interrupted a deep thought, haven’t I? I can see it growing smaller in your eyes...",
  "I don't go looking for trouble. Trouble usually finds me.",
  "I can teach you how to bottle fame, brew glory, even stopper death… If you aren’t as big a bunch of dunderheads as I usually have to teach.",
];

window.onload = function () {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
};

document.getElementById('return').addEventListener("click", function (clear) {
  localStorage.clear()
  });

function fetchApi() {
  fetch(charactersApi)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
      return response.json();
    })
    .then(function (charData) {
      console.log(charData[selectedCharacterIndex]);
      localStorage.setItem(
        "charObject",
        JSON.stringify(charData[selectedCharacterIndex])
      );
    });
}

fetchApi();

let charInfo = JSON.parse(localStorage.getItem("charObject"));
let quote = document.getElementById("quote");
let element = document.getElementById("infoStyle");

if (selectedCharacterIndex === 5) {
  element.id = "cedric";
  sigText.innerText = sigSpells[0];
  quote.innerText = charQuotes[0];
} else if (selectedCharacterIndex === 3) {
  element.id = "draco";
  sigText.innerText = sigSpells[1];
  quote.innerText = charQuotes[1];
} else if (selectedCharacterIndex === 10) {
  element.id = "luna";
  sigText.innerText = sigSpells[2];
  quote.innerText = charQuotes[2];
} else if (selectedCharacterIndex === 0) {
  element.id = "harry";
  sigText.innerText = sigSpells[3];
  quote.innerText = charQuotes[3];
} else if (selectedCharacterIndex === 7) {
  element.id = "severus";
  sigText.innerText = sigSpells[4];
  quote.innerText = charQuotes[4];
}

document.querySelector("img").setAttribute("src", charInfo.image);
document.querySelector("h1").innerText = charInfo.name;

if (selectedCharacterIndex === 5) {
  document.querySelector("#DOB").innerText = "1977";
} else {
  document.querySelector("#DOB").innerText = charInfo.dateOfBirth;
}

document.querySelector("#house").innerText = charInfo.house;
document.querySelector("#cite").innerText = "- " + charInfo.name;
