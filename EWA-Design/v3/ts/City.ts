class City {
    name: string;
    short: string;
    x: number;
    y: number;

    constructor(name: string, short: string, x: number, y: number) {
        this.name = name;
        this.short = short;
        this.x = x;
        this.y = y;
    }

    static getCities(difficulty: number) {
        let cities: City[];
        if(difficulty === 1) {
            


            //cities1.forEach(e => {
            //    cities.push(e.name, e.short, e.x, e.y); //?
            //});
        }
        return cities
    }
    //draw function?
}