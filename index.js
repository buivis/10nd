function makeCar (make,model,color,fueltype) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.fueltype = fueltype;
}

makeCar.prototype.carToMake = function() {
        return {
            make: this.make,
            model: this.model
        }

}
makeCar.prototype.fuel = function(){
    if(this.fueltype === 'Diesel')
    {
       return 'Automobilis varomas dyzeliu'
    } else if(this.fueltype ==='Petrol') {
        return 'Automobilis varomas benzinu'
    }
    else if(this.fueltype ==='electricity') { 
        return 'Automobilis varomas elektra'
    }
}
const makecaar = new makeCar('BMW', 'X5', 'Black', 'Diesel');
console.log(makecaar.carToMake());
console.log(makecaar.fuel());




class Car {
    constructor(make, model, color, fuelType) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.fuelType = fuelType;
    }
    getCarModel1() {
        return {
            make: this.make,
            model: this.model
        }
    }
    fuel1() {
        if (this.fuelType === 'Diesel') {
            return "Automobilis varomas dyzeliu";
        } else if (this.fuelType === 'Petrol') {
            return "Automobilis varomas benzinu";
        } else if (this.fuelType === 'Electricity') {
            return "Automobilis varomas elektra"
        }
    }
}
const car1 = new Car("BMW", "X5", "Black", "Diesel")
console.log(car1.getCarModel1());
console.log(car1.fuel1());
