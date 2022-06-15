//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...

// When viewing mercurySedan.js, vehicleModule must be imported.

// When viewing mercurySedan.js, the file must include a Car class that extends vehicleModule.
class Car extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage){
        // When viewing mercurySedan.js, the Car class must include a constructor that implements the super keyword.
        super(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;          
    }
    // When viewing mercurySedan.js, the Car class must include all properties and methods defined in the activity.
    loadPassenger(num){
        if (this.passenger < this.maximumPassengers){
            availableRoom = true;
        } else {
            availableRoom = false;
        }
    }
    start(){
        if (this.fuel > 0){
            start == true;
        } else {
            start == false;
            console.log (this.make + " needs fuel.")
        }
    }
    scheduleService(mileage){
        if (this.mileage > 30000){
            this.scheduleService = true;
        } else {
            this.scheduleService = false;
        }
    }
}
    let v = new Car("Mecury", "Sedan", "1965", "color", "mileage");
    console.log(v.make)
    // // 
    // PRACTICE CODE 
    // let passenger = maximumPassengers
            // let speed = maximumSpeed
            // let mileage = [fuel +' '+ "mpg"]
            // let started = scheduleService 
            
            // let newMercury = new this.Vehicle("Mercury", "")
            // maximumPassengers 5
            // passenger 0
            // numberOfWheels 4
            // maximumSpeed 160
            // fuel 10
            // scheduleService falsE