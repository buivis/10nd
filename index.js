function makeCar (make,model,color,fueltype) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.fueltype = fueltype;
}
const car = new makeCar("BMW", "X5", "Black", "Diesel")
makeCar.prototype.carToMake = function() {
        carMake = {
            Make: this.make,
            Model: this.model
        }
        console.log(carMake)
}
car.carToMake();
makeCar.prototype.fuel = function(){
    if(this.fueltype === 'Diesel'){
        console.log('Automobilis varomas dyzeliu')
    } else if(this.fueltype ==='Benzinu') {
        console.log('Automobilis varomas benzinu')
    }
    else{console.log('Automobilis varomas elektra')}
}
car.fuel()

// -----------------2 Uzduotis -----------------


class Masina {
    constructor(make,model,color,fueltype){
        this.make = make;
        this.model = model;
        this.color = color;
        this.fueltype = fueltype;
    }
    getCarModel(){
        carMake = {
            Make: this.make,
            Model: this.model
        }
        console.log(carMake)
    }
    fuel1(){
        if(this.fueltype === 'Diesel'){
            console.log('Automobilis varomas dyzeliu')
        } else if(this.fueltype ==='Benzinu') {
            console.log('Automobilis varomas benzinu')
        } else{console.log('Automobilis varomas elektra')}
    }
}
const masina = new Masina("BMW", "X5", "Black", "Diesel")
masina.getCarModel();
masina.fuel1();