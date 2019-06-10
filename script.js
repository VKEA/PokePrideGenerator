/*
* Draw image
*/

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const img1 = loadImage('test1.png', main);
const img2 = loadImage('test2.png', main);

let imagesLoaded = 0;
function main() {
    imagesLoaded += 1;

    if(imagesLoaded == 2) {
        // composite now
        ctx.drawImage(img1, 0, 0, 500, 500);

        ctx.globalAlpha = 1;
        ctx.drawImage(img2, (canvas.width-img2.width)/2, (canvas.height-img2.height)/2);
    }
}

function loadImage(src, onload) {
    let img = new Image();

    img.onload = onload;
    img.src = src;

    return img;
}

/*
* Populate drop-down
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
      option.value = data.results[i].name+'.png';
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();