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

let difficulty = 1;

let cities = City.getCities(difficulty);
console.log('cities drawn');

let trackSegments = TrainSegment.getTrackSegments(difficulty, cities);
console.log('tracksegment array filled');

// function drawCities(x,y) {
//     map.innerHTML += '<circle cx="' + x + '" cy="' + y +'" r="' + cityRadius + '" style="fill:' + cityFill + '; stroke:' + cityStroke + '; stroke-width:'+ cityStrokeWidth +'; stroke-opacity:'+ cityStrokeOpacity +';"/>'
// }

// function drawTrackSegments(x,y,color,angle) {
//     map.innerHTML += '<rect x="'+ x +'" y="'+ y +'" rx="'+ tsBorderRadius +'" ry="'+ tsBorderRadius +'" width="'+ tsWidth +'" height="'+ tsHeight +'" style="fill:' + color + '; fill-opacity:'+ tsFillOpacity +'; stroke:'+ color +'; transform: rotate('+ angle +'deg); transform-origin: 50% 50%;"/>';
// }

// function drawAll() {

//     cities.forEach(drawCities(cities.x,city.y));
//     tracks.forEach(drawTrackSegments(tracks.x,tracks.y,tracks.color,tracks.angle));
// }

// drawAll();






























// //track segment placement
// for(let i = 0; i < routes.length; i++) {
    
//     let color = routes[i].color;

//     let path = document.getElementById('path' + i);
//     let pathLength = Math.floor(path.getTotalLength());
    
//     let numberOfTracks = routes[i].len;
//     let trackDistance = pathLength/(numberOfTracks+1);

//     let pathLengthTracker = 0;
    
//     //specific track segments
//     for(let j = 0; j < numberOfTracks; j++) {
        
//         let location = path.getPointAtLength(pathLengthTracker+trackDistance);

//         //rotation calculation
//         let a = path.getPointAtLength(pathLengthTracker+trackDistance+1);
//         let b = path.getPointAtLength(pathLengthTracker+trackDistance-1);

//         let angle = Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI;
//         angle = angle.toFixed(2);
//         //console.log(angle);

//         //draw track segments
//         map.innerHTML += '<rect x="' + (location.x-10) + '" y="' + (location.y-3) + '" rx="2" ry="2" width="20" height="6" style="fill:' + color + '; fill-opacity: 0.8; stroke:' + color + '; transform: rotate(' + angle + 'deg ' + location.x + ' ' + location.y + '); transform-origin: 50% 50%;"/>'; //rotatie werkt nog niet

//         pathLengthTracker += trackDistance;
//     }
// }



 