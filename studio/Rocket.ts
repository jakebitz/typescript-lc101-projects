import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: string[] = [];
    astronauts: string[] = [];
    
    constructor(name: string,totalCapacityKg: number){
       
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
}
    sumMass(items: Payload[]): number {
        let mass: number = 0;
        
        return mass;
    }

    currentMassKg(): number {
        let number = this.sumMass(this.astronauts, this.cargoItems);
        return number;
    }


    canAdd(item: Payload): boolean{
        if(this.currentMassKg + item.massKg <= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            cargo.push.this.cargoItems;
            return true;
        }else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            astronaut.push.this.astronauts;
            return true;
        }else{
            return false;
        }
    }
    }