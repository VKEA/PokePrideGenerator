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
    case 'frillish-f':
      getUnlistedPokemonForm('https://archives.bulbagarden.net/media/upload/f/f6/592Frillish-Female.png');
      break;
    case 'jellicent-f':
      getUnlistedPokemonForm('https://archives.bulbagarden.net/media/upload/f/f8/593Jellicent-Female.png');
      break;
    case 'unfezant-f':
      getUnlistedPokemonForm('https://archives.bulbagarden.net/media/upload/6/66/521Unfezant-Female.png');
      break;
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
        case 'lycanroc-dusk':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/3/37/745Lycanroc-Dusk.png');
          break;
        case 'pikachu-partner-cap':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/7/75/025Pikachu-Partner.png');
          break;
        case 'mimikyu-busted':
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
        case 'meowstic-f':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/678_f2.png');
          break;
        case 'pyroar-f':
          getUnlistedPokemonForm('https://assets.pokemon.com/assets/cms2/img/pokedex/full/668_f2.png');
          break;
        case 'pikachu-alola-cap':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/e/e3/025Pikachu-Alola.png');
          break;
        case 'pikachu-kalos-cap':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/4/44/025Pikachu-Kalos.png');
          break;
        case 'pikachu-unova-cap':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/e/e6/025Pikachu-Unova.png');
          break;
        case 'pikachu-sinnoh-cap':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/a/a4/025Pikachu-Sinnoh.png');
          break;
        case 'pikachu-hoenn-cap':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/4/44/025Pikachu-Hoenn.png');
          break;
        case 'pikachu-original-cap':
          getUnlistedPokemonForm('https://cdn.bulbagarden.net/upload/1/17/025Pikachu-Original.png');
          break;
        default:
          const requestForm = new XMLHttpRequest();

          requestForm.onload = function() {
            if (requestForm.status === 200) {
              const form = JSON.parse(requestForm.responseText);
              getPokemonForm(form, document.getElementById('pokemonselector').options[document.getElementById('pokemonselector').selectedIndex].text);
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

function getPokemonForm (form, option) {
  const requestPokemonForm = new XMLHttpRequest();
    requestPokemonForm.open('GET', form.pokemon.url, true);

    requestPokemonForm.onload = function() {
      if (requestPokemonForm.status === 200) {
        const pokemonForm = JSON.parse(requestPokemonForm.responseText);

        let dexNumber = pokemonForm.species.url.slice(42,-1);
        for (;dexNumber.length < 3;) {
          dexNumber = "0"+dexNumber;
        }
        if (option.match(/-mega$/i) || 
        option.match(/-mega-x$/i)||
        option.match(/-alola$/i) && !option.match(/cap/i) ||
        option.match(/-primal$/i) ||
        option.match(/-unbound$/i) ||
        option.match(/-origin$/i) ||
        option.match(/-therian$/i) ||
        option.match(/-resolute$/i) ||
        option.match(/-pirouette$/i) ||
        option.match(/-blue-striped$/i) ||
        option.match(/-east$/i) ||
        option.match(/-sky$/i) ||
        option.match(/-white$/i) ||
        option.match(/-sandy$/i) ||
        option.match(/-summer$/i) ||
        option.match(/-heat$/i) ||
        option.match(/-pom-pom$/i) ||
        option.match(/-dusk$/i) ||
        option.match(/-attack$/i) ||
        option.match(/-school$/i) ||
        option.match(/-blade$/i) ||
        option.match(/-midnight$/i) ||
        option.match(/-10$/i) ||
        option.match(/-ash$/i) ||
        option.match(/-sunshine$/i)
        ) {
          document.getElementById('pokemon').href = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+dexNumber+'_f2.png';
        }
        else if (option.match(/-mega-y$/i) ||
        option.match(/-trash$/i) ||
        option.match(/-wash$/i) ||
        option.match(/-black$/i) ||
        option.match(/-dawn$/i) ||
        option.match(/-defense$/i) ||
        option.match(/-autumn$/i) ||
        option.match(/-complete$/i) ||
        option.match(/-pau$/i)
        ) {
          document.getElementById('pokemon').href = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+dexNumber+'_f3.png';
        }
        else if (option.match(/-ultra$/i) ||
        option.match(/-winter$/i) ||
        option.match(/-frost$/i) ||
        option.match(/-speed$/i) ||
        option.match(/-sensu$/i)
        ) {
          document.getElementById('pokemon').href = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+dexNumber+'_f4.png';
        }
        else if (option.match(/-fan$/i)
        ) {
          document.getElementById('pokemon').href = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+dexNumber+'_f5.png';
        }
        else if (option.match(/-mow$/i)
        ) {
          document.getElementById('pokemon').href = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+dexNumber+'_f6.png';
        }
        else {
          document.getElementById('pokemon').href = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+dexNumber+'.png';
        }
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
    const pokeArray = [];
    for (let i = 0; i < data.results.length; i++) {

      if (
        data.results[i].name.match(/totem/i) ||
        data.results[i].name.match(/spewpa-/i) ||
        data.results[i].name.match(/scatterbug-/i) ||
        data.results[i].name.match(/mothim-/i) ||
        data.results[i].name.match(/rockruff-/i) ||
        data.results[i].name.match(/greninja-battle-bond/i) ||
        data.results[i].name.match(/minior-/i) && !data.results[i].name.match(/red/i) && !data.results[i].name.match(/meteor/i) ||
        data.results[i].name.match(/silvally-/i) ||
        data.results[i].name.match(/genesect-/i) ||
        data.results[i].name.match(/arceus-/i)
        ){}
      else if (data.results[i].name == 'minior-red') {
        pokeArray.push(['minior', data.results[i].url])
      }
      else if (data.results[i].name == 'frillish') {
        pokeArray.push(['frillish-m', data.results[i].url])
      }
      else if (data.results[i].name == 'jellicent') {
        pokeArray.push(['jellicent-m', data.results[i].url])
      }
      else if (data.results[i].name == 'pyroar') {
        pokeArray.push(['pyroar-m', data.results[i].url])
      }
      else if (data.results[i].name == 'unfezant') {
        pokeArray.push(['unfezant-m', data.results[i].url])
      }
      else if (data.results[i].name == 'meowstic-male') {
        pokeArray.push(['meowstic-m', data.results[i].url])
      }
      else if (data.results[i].name == 'meowstic-female') {
        pokeArray.push(['meowstic-f', data.results[i].url])
      }
      else {
        pokeArray.push([data.results[i].name, data.results[i].url])
      }
    }
    pokeArray.push(
      ['frillish-f', 'frillish-f'],
      ['jellicent-f', 'jellicent-f'],
      ['unfezant-f', 'unfezant-f'],
      ['pyroar-f', 'pyroar-f'],
      ['grookey', 'grookey'],
      ['scorbunny', 'scorbunny'],
      ['sobble', 'sobble'],
      ['gossifleur', 'gossifleur'],
      ['eldegoss', 'eldegoss'],
      ['wooloo', 'wooloo'],
      ['corviknight', 'corviknight'],
      ['drednaw', 'drednaw'],
      ['zacian', 'zacian'],
      ['zamazenta', 'zamazenta'],
    )

    pokeArray.sort(sortFunction);

    function sortFunction(a, b) {
      if (a[0] === b[0]) {
        return 0;
      }
      else {
        return (a[0] < b[0]) ? -1 : 1;
      }
    }

    for (let i = 0; i < pokeArray.length; i++) {
      let opt = pokeArray[i];
      let el = document.createElement("option");
      el.textContent = opt[0];
      el.value = opt[1];
      dropdown.appendChild(el);
    }
   } else {
    // Reached the server, but it returned an error
  }

  getPokemon()
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

/*
* reorder
*/
function reorder () {
  
}

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