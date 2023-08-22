//OBJECTS

//create an object represeting a car with properties  like
//make, model and year . Add a method  to the car object to start the engine.



let car = {
    name:"toyota",
    model:"camry",
    year: 2023
}


//added startengine function in car object..
car.startEngine = function(){
    console.log("Engine started");
}

console.log(car.startEngine);
console.log(car)