let map = document.getElementById('sprites');

//city svg info
const cityRadius = 9;
const citySrokeWidth = 12;
const cityFill = 'dodgerblue';
const cityStroke = cityFill;
const cityStrokeOpacity = 0.4;

//track segment svg info
const tsBorderRadius = 2;
const tsWidth = 20;
const tsHeight = 6;
const tsFillOpacity = 0.8;

let cities = [];
calcCities(cities);
console.log('cities drawn');

let tracks = [];
calcTracks(tracks);
console.log('tracks drawn');

function drawCities(x,y) {
    map.innerHTML += '<circle cx="' + x + '" cy="' + y +'" r="' + cityRadius + '" style="fill:' + cityFill + '; stroke:' + cityStroke + '; stroke-width:'+ cityStrokeWidth +'; stroke-opacity:'+ cityStrokeOpacity +';"/>'
}

function drawTrackSegments(x,y,color,angle) {
    map.innerHTML += '<rect x="'+ x +'" y="'+ y +'" rx="'+ tsBorderRadius +'" ry="'+ tsBorderRadius +'" width="'+ tsWidth +'" height="'+ tsHeight +'" style="fill:' + color + '; fill-opacity:'+ tsFillOpacity +'; stroke:'+ color +'; transform: rotate('+ angle +'deg); transform-origin: 50% 50%;"/>';
}

function drawAll() {

    cities.forEach(drawCities(cities.x,city.y));
    tracks.forEach(drawTrackSegments(tracks.x,tracks.y,tracks.color,tracks.angle));
}

drawAll(); 