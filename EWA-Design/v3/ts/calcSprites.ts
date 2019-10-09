class SpriteCalculator {

    function calcCities(cities: City) {

        for(let i = 0; i < citiesDB.length; i++) {
            
            let city = {
                x: citiesDB[i].x,
                y: citiesDB[i].y
            }
            
            cities.push(city);
        }

        return cities;
    }

    function calcTracks(tracks) {
        
        let routes = [];
        calcRoutes(routes);

        for(let i = 0; i < routes.length; i++) {
            
            let routeLenX = routes[i].x2 - routes[i].x1; // the length of the x span
            let routeLenY = routes[i].y2 - routes[i].y1; // the length of the y span

            let routeLen = Math.hypot(routeLenX, routeLenY); // calculate hypotenuse
            let tsLen = routeLen / (routes[i].len + 1); // devide the route into equal parts, between the two end points

            for(let j = 0; j < routes[i].len; j++) {

                let curRouteLen = tsLen + i * tsLen;// calc the length of the hypotenuse at the point of this trackSegment

                let lenXAtCurHyp = routeLenX / routeLen * curRouteLen; // the length of the x span at the current hypotenuse length
                let tsX = routes[i].x1 + lenXAtCurHyp; // the x coord of this trackSegment 

                let lenYAtCurHyp = routeLenY / routeLen * curRouteLen;  //same, but y
                let tsY = route[i].y1 + lenYAtCurHyp;

                // calculate closest xy before actual xy
                let curRouteLenNeg1 = curRouteLen - 1;

                let lenXAtCurHypNeg1 = routeLenX / routeLen * curRouteLenNeg1;
                let aX = routes[i].x1 + lenXAtCurHypNeg1;

                let lenYAtCurHypNeg1 = routeLenY / routeLen * curRouteLenNeg1;
                let aY = routes[i].y1 + lenYAtCurHypNeg1;

                // calculate closest xy pair behind actual xy
                let curRouteLenPos1 = curRouteLen + 1;

                let lenXAtCurHypPos1 = routeLenX / routeLen * curRouteLenPos1;
                let bX = routes[i].x1 + lenXAtCurHypPos1;

                let lenYAtCurHypPos1 = routeLenY / routeLen * curRouteLenPos1;
                let bY = routes[i].y1 + lenYAtCurHypPos1;

                // calculate actual angle
                let tsAngle = (Math.atan2(bY - aY, bX - aX) * 180 / Math.PI).toFixed(2);

            
                let track = {
                x: tsX,
                y: tsY,
                color: routes[i].color,
                angle: tsAngle
                }

                tracks.push(track)
            }     
        }

        return tracks;
    }

    function calcRoutes() {
        
        for(let i = 0; i < routesDB.length; i++) {

            let a = citiesDB.filter(function (c1) {
                return c1.short == routesDB[i].city1;
            });
                        
            let b = citiesDB.filter(function(c2) {
                return c2.short == routesDB[i].city2;
            })
            
            let route = {
                x1:     a[0].x,
                y1:     a[0].y,
                x2:     b[0].x,
                y2:     b[0].y,
                color:  routesDB[i].color,
                len:    routesDB[i].len
            } 

            routes.push(route);
        }

        return routes
    }
}