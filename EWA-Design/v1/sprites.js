let cities = [
{name: 'Amsterdam', short: 'ams', x: 418, y: 311 },{name: 'Ankara', short: 'ank', x: 1005, y: 621 },{name: 'Athens', short: 'ath', x: 810, y: 709 },{name: 'Barcelona', short: 'bar', x: 237, y: 676 },{name: 'Berlin', short: 'ber', x: 555, y: 327 },{name: 'Brest', short: 'bre', x: 235, y: 405 },{name: 'Brindisi', short: 'bri', x: 644, y: 652 },{name: 'Brussels', short: 'bru', x: 401, y: 356 },{name: 'Bucharest', short: 'buc', x: 835, y: 516 },{name: 'Budapest', short: 'bud', x: 688, y: 456 },{name: 'Copenhagen', short: 'cop', x: 541, y: 230 },{name: 'Dieppe', short: 'die', x: 300, y: 394 },{name: 'Edinburgh', short: 'edi', x: 294, y: 205 },{name: 'Erzurum', short: 'erz', x: 1121, y: 572 },{name: 'Essen', short: 'ess', x: 482, y: 321 },{name: 'Frankfurt', short: 'fra', x: 459, y: 380 },{name: 'Gadiz', short: 'gad', x: 131, y: 716 },{name: 'Gdansk', short: 'gda', x: 652, y: 264 },{name: 'Istanbul', short: 'ist', x: 921, y: 601 },{name: 'Izmir', short: 'izm', x: 893, y: 684 },{name: 'Kharkov', short: 'kha', x: 972, y: 304 },{name: 'Kiev', short: 'kie', x: 888, y: 337 },{name: 'Lisbon', short: 'lis', x: 80, y: 645 },{name: 'London', short: 'lon', x: 318, y: 311 },{name: 'Madrid', short: 'mad', x: 172, y: 646 },{name: 'Marseille', short: 'mar', x: 401, y: 570 },{name: 'Moscow', short: 'mos', x: 969, y: 163 },{name: 'Munich', short: 'mun', x: 518, y: 420 },{name: 'Palermo', short: 'pal', x: 598, y: 758 },{name: 'Pamplona', short: 'pam', x: 248, y: 572 },{name: 'Paris', short: 'par', x: 361, y: 428 },{name: 'Petersburg, St.', short: 'pet', x: 807, y: 101 },{name: 'Riga', short: 'rig', x: 744, y: 175 },{name: 'Rome', short: 'rom', x: 562, y: 627 },{name: 'Rostov', short: 'ros', x: 1067, y: 364 },{name: 'Sarajevo', short: 'sar', x: 678, y: 562 },{name: 'Sevastopol', short: 'sev', x: 986, y: 364 },{name: 'Smollensk', short: 'smo', x: 878, y: 217 },{name: 'Sochi', short: 'soc', x: 1097, y: 472 },{name: 'Sofia', short: 'sof', x: 820, y: 586 },{name: 'Stockholm', short: 'sto', x: 630, y: 126 },{name: 'Venice', short: 'ven', x: 536, y: 512 },{name: 'Vienna', short: 'vie', x: 614, y: 440 },{name: 'Vilnius', short: 'vil', x: 761, y: 237 },{name: 'Warsaw', short: 'war', x: 698, y: 314 },{name: 'Zagreb', short: 'zag', x: 628, y: 507 },{name: 'Zurich', short: 'zur', x: 446, y: 477 }
];

let routes = [
{city1: 'ams', city2: 'lon', len: 2, color: 'grey' },{city1: 'ams', city2: 'bru', len: 1, color: 'black' },{city1: 'ams', city2: 'fra', len: 2, color: 'white' },{city1: 'ams', city2: 'ess', len: 3, color: 'yellow' },{city1: 'ank', city2: 'ist', len: 2, color: 'grey' },{city1: 'ank', city2: 'erz', len: 3, color: 'black' },{city1: 'ank', city2: 'izm', len: 3, color: 'orange' },{city1: 'ath', city2: 'izm', len: 2, color: 'grey' },{city1: 'ath', city2: 'bri', len: 4, color: 'grey' },{city1: 'ath', city2: 'ist', len: 2, color: 'grey' },{city1: 'ath', city2: 'sof', len: 3, color: 'purple' },{city1: 'ath', city2: 'sar', len: 4, color: 'green' },{city1: 'bar', city2: 'pam', len: 2, color: 'grey' },{city1: 'bar', city2: 'mad', len: 2, color: 'yellow' },{city1: 'bar', city2: 'mar', len: 4, color: 'grey' },{city1: 'ber', city2: 'ess', len: 2, color: 'blue' },{city1: 'ber', city2: 'fra', len: 3, color: 'black' },{city1: 'ber', city2: 'vie', len: 3, color: 'green' },{city1: 'ber', city2: 'fra', len: 3, color: 'red' },{city1: 'ber', city2: 'gda', len: 4, color: 'grey' },{city1: 'ber', city2: 'war', len: 4, color: 'purple' },{city1: 'ber', city2: 'war', len: 4, color: 'yellow' },{city1: 'bre', city2: 'die', len: 2, color: 'orange' },{city1: 'bre', city2: 'par', len: 3, color: 'black' },{city1: 'bre', city2: 'pam', len: 4, color: 'purple' },{city1: 'bri', city2: 'pal', len: 3, color: 'grey' },{city1: 'bri', city2: 'rom', len: 2, color: 'white' },{city1: 'bru', city2: 'fra', len: 2, color: 'blue' },{city1: 'bru', city2: 'die', len: 2, color: 'green' },{city1: 'bru', city2: 'par', len: 2, color: 'red' },{city1: 'bru', city2: 'par', len: 2, color: 'yellow' },{city1: 'buc', city2: 'sof', len: 2, color: 'grey' },{city1: 'buc', city2: 'ist', len: 3, color: 'yellow' },{city1: 'buc', city2: 'bud', len: 4, color: 'grey' },{city1: 'buc', city2: 'kie', len: 4, color: 'grey' },{city1: 'buc', city2: 'sev', len: 4, color: 'white' },{city1: 'bud', city2: 'vie', len: 1, color: 'red' },{city1: 'bud', city2: 'vie', len: 1, color: 'white' },{city1: 'bud', city2: 'zag', len: 2, color: 'orange' },{city1: 'bud', city2: 'sar', len: 3, color: 'purple' },{city1: 'bud', city2: 'kie', len: 6, color: 'grey' },{city1: 'cop', city2: 'ess', len: 3, color: 'grey' },{city1: 'cop', city2: 'ess', len: 3, color: 'grey' },{city1: 'cop', city2: 'sto', len: 3, color: 'white' },{city1: 'cop', city2: 'sto', len: 3, color: 'yellow' },{city1: 'die', city2: 'lon', len: 2, color: 'grey' },{city1: 'die', city2: 'lon', len: 2, color: 'grey' },{city1: 'die', city2: 'par', len: 1, color: 'purple' },{city1: 'edi', city2: 'lon', len: 4, color: 'black' },{city1: 'edi', city2: 'lon', len: 4, color: 'orange' },{city1: 'erz', city2: 'sev', len: 4, color: 'grey' },{city1: 'erz', city2: 'soc', len: 3, color: 'red' },{city1: 'ess', city2: 'fra', len: 2, color: 'green' },{city1: 'fra', city2: 'mun', len: 2, color: 'purple' },{city1: 'fra', city2: 'par', len: 3, color: 'orange' },{city1: 'fra', city2: 'par', len: 3, color: 'white' },{city1: 'gad', city2: 'lis', len: 2, color: 'blue' },{city1: 'gad', city2: 'mad', len: 3, color: 'orange' },{city1: 'gda', city2: 'war', len: 2, color: 'grey' },{city1: 'gda', city2: 'rig', len: 3, color: 'black' },{city1: 'ist', city2: 'sev', len: 4, color: 'grey' },{city1: 'ist', city2: 'sof', len: 3, color: 'blue' },{city1: 'izm', city2: 'pal', len: 6, color: 'grey' },{city1: 'kha', city2: 'ros', len: 2, color: 'green' },{city1: 'kha', city2: 'mos', len: 4, color: 'grey' },{city1: 'kha', city2: 'kie', len: 4, color: 'grey' },{city1: 'kie', city2: 'vil', len: 2, color: 'grey' },{city1: 'kie', city2: 'smo', len: 3, color: 'red' },{city1: 'kie', city2: 'war', len: 4, color: 'grey' },{city1: 'lis', city2: 'mad', len: 3, color: 'purple' },{city1: 'mad', city2: 'pam', len: 3, color: 'black' },{city1: 'mad', city2: 'pam', len: 3, color: 'white' },{city1: 'mar', city2: 'zur', len: 2, color: 'purple' },{city1: 'mar', city2: 'rom', len: 4, color: 'grey' },{city1: 'mar', city2: 'par', len: 4, color: 'grey' },{city1: 'mar', city2: 'pam', len: 4, color: 'red' },{city1: 'mos', city2: 'smo', len: 2, color: 'orange' },{city1: 'mos', city2: 'pet', len: 4, color: 'white' },{city1: 'mun', city2: 'ven', len: 2, color: 'blue' },{city1: 'mun', city2: 'zur', len: 2, color: 'yellow' },{city1: 'mun', city2: 'vie', len: 3, color: 'orange' },{city1: 'pam', city2: 'par', len: 4, color: 'blue' },{city1: 'pam', city2: 'par', len: 4, color: 'green' },{city1: 'par', city2: 'zur', len: 3, color: 'grey' },{city1: 'pet', city2: 'vil', len: 4, color: 'blue' },{city1: 'pet', city2: 'rig', len: 4, color: 'grey' },{city1: 'pet', city2: 'sto', len: 8, color: 'grey' },{city1: 'rig', city2: 'vil', len: 4, color: 'green' },{city1: 'rom', city2: 'pal', len: 4, color: 'grey' },{city1: 'rom', city2: 'ven', len: 2, color: 'black' },{city1: 'ros', city2: 'soc', len: 2, color: 'grey' },{city1: 'ros', city2: 'sev', len: 4, color: 'grey' },{city1: 'sar', city2: 'sof', len: 2, color: 'grey' },{city1: 'sar', city2: 'zag', len: 3, color: 'red' },{city1: 'sev', city2: 'soc', len: 2, color: 'grey' },{city1: 'smo', city2: 'vil', len: 3, color: 'yellow' },{city1: 'ven', city2: 'zur', len: 2, color: 'green' },{city1: 'ven', city2: 'zag', len: 2, color: 'grey' },{city1: 'vie', city2: 'zag', len: 2, color: 'grey' },{city1: 'vie', city2: 'war', len: 4, color: 'blue' },{city1: 'vil', city2: 'war', len: 3, color: 'red' }


];

let map = document.getElementById('sprites');
let pathCounter = 0;



//path routes
for(let i = 0; i < routes.length; i++) {

    let first = cities.filter(function (c1) {
        return c1.short == routes[i].city1;
    });
        
    let second = cities.filter(function(c2) {
        return c2.short == routes[i].city2;
    })
         
    let x1 = first[0].x;
    let y1 = first[0].y;

    let x2 = second[0].x;
    let y2 = second[0].y;

    let color = routes[i].color;
    let strokeWitdh = 5;

    //color = "transparent";

    map.innerHTML += '<path id="path' + pathCounter + '" d=" M ' + x1 + ' ' + y1 + ' L ' + x2 + ' ' + y2 + '" stroke="' + color + '" stroke-width="' + strokeWitdh + '" fill="transparent"></path>';

    pathCounter++;
}

//place cities
for(let i = 0; i < cities.length; i++) {
    map.innerHTML += '<circle cx="' + cities[i].x + '" cy="' + cities[i].y +'" r="9" style="fill:dodgerblue; stroke: dodgerblue; stroke-width: 12; stroke-opacity: 0.4;"/>';
}

//track segment placement
for(let i = 0; i < routes.length; i++) {
    
    let color = routes[i].color;

    let path = document.getElementById('path' + i);
    let pathLength = Math.floor(path.getTotalLength());
    
    let numberOfTracks = routes[i].len;
    let trackDistance = pathLength/(numberOfTracks+1);

    let pathLengthTracker = 0;
    
    //specific track segments
    for(let j = 0; j < numberOfTracks; j++) {
        
        let location = path.getPointAtLength(pathLengthTracker+trackDistance);

        //rotation calculation
        let a = path.getPointAtLength(pathLengthTracker+trackDistance+1);
        let b = path.getPointAtLength(pathLengthTracker+trackDistance-1);

        let angle = Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI;
        angle = angle.toFixed(2);
        //console.log(angle);

        //draw track segments
        map.innerHTML += '<rect x="' + (location.x-10) + '" y="' + (location.y-3) + '" rx="2" ry="2" width="20" height="6" style="fill:' + color + '; fill-opacity: 0.8; stroke:' + color + '; transform: rotate(' + angle + 'deg ' + location.x + ' ' + location.y + '); transform-origin: 50% 50%;"/>'; //rotatie werkt nog niet

        pathLengthTracker += trackDistance;
    }
}



 