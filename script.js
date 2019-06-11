/*
* Draw image
*/
function renderImage () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const img1 = loadImage('./flags/'+document.getElementById('flagselector').value, main);
  const img2 = loadImage(document.getElementById('imageURL').href, main);

  let imagesLoaded = 0;
  function main() {
      imagesLoaded += 1;

      if(imagesLoaded == 2) {
          // composite now
          ctx.drawImage(img1, 0, 0, 500, 500);

          ctx.globalAlpha = 1;
          ctx.drawImage(img2, (canvas.width-350)/2, (canvas.height-350)/2, 350, 350);
      }
  }

  function loadImage(src, onload) {
      let img = new Image();

      img.onload = onload;
      img.src = src;

      return img;
  }
}

/*
* Get pokémon image
*/
function getImage () {
  const requestForm = new XMLHttpRequest();
  requestForm.open('GET', document.getElementById('pokemonselector').value, true);

  requestForm.onload = function() {
    if (requestForm.status === 200) {
      const form = JSON.parse(requestForm.responseText);

      let name = document.getElementById('pokemonselector').options[document.getElementById('pokemonselector').selectedIndex].text;
      var splitStr = name.toLowerCase().split('-');
      for (var i = 0; i < splitStr.length; i++) {

          splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
      }
      splitStr.join('-');

      const requestPokemonForm = new XMLHttpRequest();
      requestPokemonForm.open('GET', form.pokemon.url, true);

      requestPokemonForm.onload = function() {
        const pokemonForm = JSON.parse(requestPokemonForm.responseText);

        let dexNumber = pokemonForm.species.url.slice(42,-1);
        for (;dexNumber.length < 3;) {
          dexNumber = "0"+dexNumber;
        }
        console.log('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+dexNumber+'.png');
        document.getElementById('imageURL').href = ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+dexNumber+'.png');
        document.getElementById('imageURL').innerText = ('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+dexNumber+'.png');
        renderImage();
      }

      requestPokemonForm.onerror = function() {
        console.error('An error occurred fetching the JSON from ' + url);
      };

      requestPokemonForm.send();
    } else {
      // Reached the server, but it returned an error
    }
  }
  
  requestForm.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + url);
  };
  
  requestForm.send();
}

/*
* Populate pokémon drop-down
*/
let dropdown = document.getElementById('pokemonselector');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'choose pok\xE9mon';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://pokeapi.co/api/v2/pokemon-form?offset=0&limit=1123';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.results.length; i++) {
      option = document.createElement('option');
      option.text = data.results[i].name;
      option.value = data.results[i].url + '';
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }
  option = document.createElement('option');
  option.text = 'wooloo';
  option.value = 'wooloo.png';
  dropdown.add(option);
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();