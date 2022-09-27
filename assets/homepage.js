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

var hpCharachter = [ "Harry Potter", "Hermione Granger","Ronald Weasly", "Albus Dumbledore", "Draco Malfoy"]


//const searchContainer = document.getElementsByClassName("container");
//const searchBar = document.getElementById("searchBar");

//searchBar.onkeyup = (e)=> {
  //let searchString = e.target.value;
  //let emptyArray = [];

  //if(searchString){
   // emptyArray = hpCharachter.filter((data)=>{
    //  return data.toLocaleLowerCase().startsWith(searchString.toLocaleLowerCase());
      
   // });
    
    //emptyArray = emptyArray.map((data)=>{
     // return data = '<li>' + data + '</li>';

    //});

    //console.log(emptyArray)
   // searchContainer.classList.add("active")

 //}else{

  //}
  //showCharacters(emptyArray);
//}

//function showCharacters(list){
 // let listData;
  //if(!list.length){

 // }else{
 //   listData = list.join('');
 // }
//  suggBox.innerHTML = listData;
//}