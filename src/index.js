export let getAverageColour = (img, type, inv) =>  {
  let canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    rgb = {r:102,g:102,b:102},
    pixelInterval = 5,
    count = 0,
    i = -4,
    data, length;

  let height = canvas.height = img.naturalHeight || img.offsetHeight || img.height,
    width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;
    context.drawImage(img, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } 
  catch(e) {
    console.log(e);
    return rgb;
  }

  data = data.data;
  length = data.length;

  let createRGB = () => {
    while ((i += pixelInterval * 4) < length) {
      count++;
      rgb.r += data[i];
      rgb.g += data[i+1];
      rgb.b += data[i+2];
    }
    rgb.r = Math.floor(rgb.r/count);
    rgb.g = Math.floor(rgb.g/count);
    rgb.b = Math.floor(rgb.b/count);
    return rgb
  }

  let invertHEX = (hexnum) => {
    if(hexnum.length != 6) {
      console.log('Hex color must be six hex numbers in length');
      return false;
    }

    hexnum = hexnum.toUpperCase();
    let splitnum = hexnum.split("");
    let resultnum = "";
    let simplenum = "FEDCBA9876".split("");
    let complexnum = new Array();
    complexnum.A = "5";
    complexnum.B = "4";
    complexnum.C = "3";
    complexnum.D = "2";
    complexnum.E = "1";
    complexnum.F = "0";
      
    for(i=0; i<6; i++){
      if (!isNaN(splitnum[i])) {
        resultnum += simplenum[splitnum[i]]; 
      } 
      else if (complexnum[splitnum[i]]) {
        resultnum += complexnum[splitnum[i]]; 
      } 
      else {
        console.log("Hex colors must only include hex numbers 0-9, and A-F");
        return false;
      }
    }
    return resultnum;
  }

  let invertRGB = (rgb) => {
    let invertedRGB = Object.keys(rgb).reduce(function(previous, current) {
      previous[current] = 255 - rgb[current];
      return previous;
    }, {});
    return invertedRGB
  }

  let RGBToString = (rgb) => `rgb(${Object.values(rgb).join(', ')})`;

  let RGBToHEX = (r, g, b) => ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  switch (type) {
    case 'RGB':
      rgb = createRGB()
      if(inv) {
        return RGBToString(invertRGB(rgb))
      }
      else {
        return RGBToString(rgb)
      }
      break;
    case 'HEX':
      rgb = createRGB()
      if(inv) {
        return "#" + invertHEX(RGBToHEX(rgb.r, rgb.g, rgb.b))
      }
      else {
        return "#" + RGBToHEX(rgb.r, rgb.g, rgb.b)
      }
      break;
  }
}