import { Payload } from "./Payload";

interface payload{
    

}
export class Astronaut implements payload {
    massKg: number;
    name: string;
    constructor(massKg: number,name: string,){
        this.massKg = massKg;
        this.name = name;
}
    }
    