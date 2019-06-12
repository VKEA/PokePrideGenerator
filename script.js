/*
* Draw image
*/
function renderImage (callback) {

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  const img1 = loadImage('https://raw.githubusercontent.com/Zt-freak/pokepridegenerator/master/flags/'+document.getElementById('flagselector').value, main);
  const img2 = loadImage(document.getElementById('pokemon').href, main);

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
* Download image
*/
function downloadImage () {
var canvas = document.getElementById('myCanvas'),
dataUrl = canvas.toDataURL(),
imageFoo = document.createElement('img');
imageFoo.src = dataUrl;

// Style your image here
imageFoo.style.width = '100px';
imageFoo.style.height = '100px';

// After you are done styling it, append it to the BODY element
document.body.appendChild(imageFoo);
}


/*
* Get pokémon image
*/
function getPokemon () {
  /* HARDCODED */
  switch (document.getElementById('pokemonselector').value) {
    case 'grookey':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/7/7a/Grookey.png');
    break;
    case 'scorbunny':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/c/cc/Scorbunny.png');
    break;
    case 'sobble':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/0/0c/Sobble.png');
    break;
    case 'gossifleur':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/8/83/Gossifleur.png');
    break;
    case 'eldegoss':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/d/da/Eldegoss.png');
    break;
    case 'wooloo':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/2/2f/Wooloo.png');
    break;
    case 'corviknight':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/2/2e/Corviknight.png');
    break;
    case 'drednaw':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/4/4e/Drednaw.png');
    break;
    case 'zacian':
      getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/a/a7/Zacian.png');
    break;
    case 'zamazenta':
        getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/b/bd/Zamazenta.png');
      break;
    default:
      /* MORE HARDCODED */
      switch (document.getElementById('pokemonselector').options[document.getElementById('pokemonselector').selectedIndex].text) {
        case 'necrozma-ultra':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/800_f4.png');
          break;
        case 'necrozma-dawn':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/800_f3.png');
          break;
        case 'necrozma-dusk':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/800_f2.png');
          break;
        case 'pikachu-partner-cap':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/1/17/025Pikachu-Original.png');
          break;
        case 'mimikyu-busted':
        case 'mimikyu-totem-busted':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/3/3a/778Mimikyu_Busted_Dream.png');
          break;
        case 'minior-violet-meteor':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/3/33/774Minior_Violet_Dream.png');
          break;
        case 'minior-indigo-meteor':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/9/91/774Minior_Indigo_Dream.png');
          break;
        case 'minior-blue-meteor':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/8/81/774Minior_Blue_Dream.png');
          break;
        case 'minior-green-meteor':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/d/d8/774Minior_Green_Dream.png');
          break;
        case 'minior-yellow-meteor':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/d/dd/774Minior_Yellow_Dream.png');
          break;
        case 'minior-orange-meteor':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/b/b3/774Minior_Orange_Dream.png');
          break;
        case 'minior-red-meteor':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/f/ff/774Minior_Red_Dream.png');
          break;
        case 'wishiwashi-school':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/746_f2.png');
          break;
        case 'lycanroc-midnight':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/745_f2.png');
          break;
        case 'oricorio-sensu':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/741_f4.png');
          break;
        case 'oricorio-pau':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/741_f3.png');
          break;
        case 'oricorio-pom-pom':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/741_f2.png');
          break;
        case 'greninja-ash':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/658_f2.png');
          break;
        default:
          const requestForm = new XMLHttpRequest();

          requestForm.onload = function() {
            if (requestForm.status === 200) {
              const form = JSON.parse(requestForm.responseText);
              getPokemonForm(form);
            } else {
              // Reached the server, but it returned an error
            }
          }
          
          requestForm.onerror = function() {
            console.error('An error occurred fetching the JSON from ' + url);
          };
    
          requestForm.open('GET', document.getElementById('pokemonselector').value, true);
          requestForm.send();
          break;
      }
      break;
  }
}

function getPokemonForm (form) {
  const requestPokemonForm = new XMLHttpRequest();
    requestPokemonForm.open('GET', form.pokemon.url, true);

    requestPokemonForm.onload = function() {
      if (requestPokemonForm.status === 200) {
        const pokemonForm = JSON.parse(requestPokemonForm.responseText);

        let dexNumber = pokemonForm.species.url.slice(42,-1);
        for (;dexNumber.length < 3;) {
          dexNumber = "0"+dexNumber;
        }
        document.getElementById('pokemon').href = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+dexNumber+'.png';
        renderImage();
      }
    }

    requestPokemonForm.onerror = function() {
      console.error('An error occurred fetching the JSON from ' + url);
    };

    requestPokemonForm.send();
}

function getUnlistedPokemonForm (url) {
  document.getElementById('pokemon').href = url;
  renderImage();
}

/*
* Populate pokémon drop-down
*/
let dropdown = document.getElementById('pokemonselector');
dropdown.length = 0;

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

      if (
        option.text.match(/totem/i) ||
        option.text.match(/spewpa-/i) ||
        option.text.match(/scatterbug-/i) ||
        option.text.match(/mothim-/i) ||
        option.text.match(/rockruff-/i) ||
        option.text.match(/greninja-battle-bond/i)
        ){}
      else {
        dropdown.add(option);
      }
    }
   } else {
    // Reached the server, but it returned an error
  }
  option = document.createElement('option');
  option.text = 'grookey';
  option.value = 'grookey';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'scorbunny';
  option.value = 'scorbunny';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'sobble';
  option.value = 'sobble';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'gossifleur';
  option.value = 'gossifleur';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'eldegoss';
  option.value = 'eldegoss';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'wooloo';
  option.value = 'wooloo';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'corviknight';
  option.value = 'corviknight';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'drednaw';
  option.value = 'drednaw';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'zacian';
  option.value = 'zacian';
  dropdown.add(option);
  option = document.createElement('option');
  option.text = 'zamazenta';
  option.value = 'zamazenta';
  dropdown.add(option);
  
  getPokemon()
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

/*
* copyright
*/

document.getElementById("copyright").innerHTML = `
  This site is not affiliated with GAME FREAK, The Pok\xE9mon Company or Nintendo.<br />
  Pok\xE9mon artwork is made by Ken Sugimori and is retrieved from: <br />
  <a href="http://pokemon.com">The Official Pok\xE9mon Site</a><br />
  <a href="https://bulbapedia.bulbagarden.net/wiki/">Bulbapedia</a><br />
  Pok\xE9mon \u00A9 1995-`+new Date().getFullYear()+` Nintendo.
`