"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let favtransportation = ["sports bike", "Honda Civic", "Mercedes", "Sportscar"];
console.log("with the help of forEach function");
favtransportation.forEach(favtransportation => {
    console.log(`I would like to own a ${favtransportation}.`);
});
console.log("with the help of loops");
for (let i = 0; i < favtransportation.length; i++) {
    console.log(`I would like to own a ${favtransportation[i]}`);
}
