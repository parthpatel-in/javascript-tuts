console.log("object literals,constructor");
// object litreal for creating objects

let car = {
    name: `maruti 800`,
    topspeed: 89,
    run: function () {
        console.log("car is running");
    }
}
// creating constructor for car
function genralcar(givenName, givenSpeed) {
    this.name = givenName;
    this.speed = givenSpeed;

    this.run = function () {
        console.log(`${this.name} is running`);

    }
    this.analyze = function () {
        console.log(`this car is slower by ${200 - this.topspeed}km/h than supra`)
    }
}
car1 = new genralcar('nissan', 180);
car2 = new genralcar(`maruti alto`, 100)

console.log(car1);
console.log(car2);
