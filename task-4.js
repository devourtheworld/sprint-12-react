class Plane {
    constructor(model, fuelSupply, fuelConsumption){
        this.model = model;
        this.fuelSupply = fuelSupply;
        this.fuelConsumption = fuelConsumption;
    }
    calcFlightRange(){
        return this.fuelSupply / this.fuelConsumption * 100;
    }

    static sortFlightRange(planesArray){
        planesArray.sort(function(a,b){
            return a.calcFlightRange() - b.calcFlightRange();
        })
        for (let i = 0; i < planesArray.length; i++){
            console.log(`${planesArray[i].model}: ${planesArray[i].calcFlightRange()}`);
        }
    }
}

class TransportPlane extends Plane{
    constructor(model, fuelSupply, fuelConsumption, cargo, addTank){
        super(model, fuelSupply, fuelConsumption);
        this.cargo = cargo;
        this.addTank = addTank;
    }

    calcFlightRange(){
        return (this.fuelSupply + this.addTank) / this.fuelConsumption * 100;
    }
}

class PassengerPlane extends Plane {
    constructor(model, fuelSupply, fuelConsumption, passengers, refueling){
        super(model, fuelSupply, fuelConsumption);
        this.passengers = passengers;
        this.refueling = refueling;
    }

    calcFlightRange(){
        return (this.fuelSupply + this.refueling) / this.fuelConsumption * 100;
    }
}

class WarPlane extends Plane{
    calcFlightRange(){
        return super.calcFlightRange() * this.aerodynamicsKoef;
    }
}

console.log("unsorted range of planes:");
const plane1 = new TransportPlane("An-255", 10500, 5000, 500, 30000);
console.log("Ann-255", plane1.calcFlightRange());

const plane2 = new TransportPlane("An-200", 11500, 5500, 700, 35500);
console.log("Ann-255", plane1.calcFlightRange());

const plane3 = new TransportPlane("An-312", 12200, 7000, 300, 30400);
console.log("Ann-255", plane1.calcFlightRange());

console.log("Sorted range of planes:");
const planesArray = [plane1, plane2, plane3];
Plane.sortFlightRange(planesArray);