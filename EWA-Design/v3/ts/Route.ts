class Route {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: string;
    len: number;

    constructor(x1: number, y1: number, x2: number, y2: number, color: string, len: number) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
        this.len = len;
    }

    static getRoutes(difficulty: number) {
        let routes: Route[];
        if(difficulty === 1) {
            routes1.forEach(e => {
                routes.push(); //?
            });
        }
        return cities
    }
    //draw function?
}