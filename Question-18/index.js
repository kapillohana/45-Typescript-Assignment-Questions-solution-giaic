"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. */
Object.defineProperty(exports, "__esModule", { value: true });
let favPlaces = ["Paris", "Santorini", "Kyoto", "Machu Picchu", "Newyork city"];
console.log("\nOriginal Order", favPlaces);
//priting the places in alphabetical order
console.log("\nAlphabetical Order", [...favPlaces].slice().sort());
//Showing that the array is still in its original order by printing it.
console.log("\nOrignal Order", favPlaces);
//printing array in reverse order without modifying original
// Creating a copy of the array, sorting it in alphabetical order, and then reversing it
let reverseAlphabetical = favPlaces.slice().sort().reverse();
//printing in reverseAlphabetical order 
console.log("\nReversed Alphabetical order", reverseAlphabetical);
//printing its original form
console.log("\nOriginal Order", favPlaces);
//Reverse the order of your list. Print the array to show that its order has changed.
favPlaces.reverse();
console.log("\nReverse Original Array", favPlaces);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
favPlaces.reverse();
console.log("\nAgain In Original Order", favPlaces);
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favPlaces.sort();
console.log("\nchanged in Alphabetical order", [...favPlaces].sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nReverse Alphabetical order", [...favPlaces].sort().reverse());
