let charactersApi = "https://hp-api.herokuapp.com/api/characters";
let selectedCharacterIndex = JSON.parse(localStorage.getItem("charIndex"));

let sigText = document.querySelector('#sigSpell');
let sigSpells = ["Stupefy", "Muffliato", "Wordless Stupefy", "Expelliarmus", "Sectumsempra"];

console.log(selectedCharacterIndex);

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
        localStorage.setItem("charObject", JSON.stringify(charData[selectedCharacterIndex]));
    })
}

fetchApi();

let charInfo = JSON.parse(localStorage.getItem("charObject"));

if (selectedCharacterIndex === 5) {
    sigText.innerText = sigSpells[0];
} else if (selectedCharacterIndex === 3) {
    sigText.innerText = sigSpells[1];
} else if (selectedCharacterIndex === 10) {
    sigText.innerText = sigSpells[2];
} else if (selectedCharacterIndex === 0) {
    sigText.innerText = sigSpells[3];
} else if (selectedCharacterIndex===7) {
    sigText.innerText = sigSpells[4];
}

for(i=0; i < document.getElementsByClassName("name").length; i++) {
    document.getElementsByClassName("name")[i].innerText = charInfo.name;
}

document.querySelector("#DOB").innerText = charInfo.dateOfBirth;
document.querySelector("#house").innerText = charInfo.house;
