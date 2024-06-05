/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one False result
for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

//Tests for Equality and Inequality with Strings
let city = 'New York';

console.log("Is city == 'New York'?  True.");
console.log(city == 'New York'); // True

console.log("Is city != 'Los Angeles'?  True.");
console.log(city != 'Los Angeles'); // True

console.log("Is city == 'San Francisco'?  False.");
console.log(city == 'San Francisco'); // False

console.log("Is city != 'New York'?  False.");
console.log(city != 'New York'); // False

//Tests Using the Lower Case Function
let country = 'Canada';

console.log("Is country.toLowerCase() == 'canada'?  True.");
console.log(country.toLowerCase() == 'canada'); // True

console.log("Is country.toLowerCase() == 'CANADA'?  False.");
console.log(country.toLowerCase() == 'CANADA'); // False

//Numerical Tests Involving Equality and Inequality, Greater Than and Less Than, Greater Than or Equal to, and Less Than or Equal to
let temperature = 75;

console.log("Is temperature == 75? True.");
console.log(temperature == 75); // True

console.log("Is temperature != 80?  True.");
console.log(temperature != 80); // True

console.log("Is temperature > 70?  True.");
console.log(temperature > 70); // True

console.log("Is temperature < 80?  True.");
console.log(temperature < 80); // True

console.log("Is temperature >= 75?  True.");
console.log(temperature >= 75); // True

console.log("Is temperature <= 75? True.");
console.log(temperature <= 75); // True

console.log("Is temperature == 80?  False.");
console.log(temperature == 80); // False

console.log("Is temperature != 75?  False.");
console.log(temperature != 75); // False

console.log("Is temperature < 70?  False.");
console.log(temperature < 70); // False

console.log("Is temperature > 80? False.");
console.log(temperature > 80); // False

//Tests Using "And" and "Or" Operators
let isSunny = true;
let isWarm = true;

console.log("Is isSunny && isWarm?  True.");
console.log(isSunny && isWarm); // True

let isRaining = false;

console.log("Is isSunny && isRaining?  False.");
console.log(isSunny && isRaining); // False

console.log("Is isSunny || isRaining?  True.");
console.log(isSunny || isRaining); // True

console.log("Is isRaining || !isWarm?  False.");
console.log(isRaining || !isWarm); // False

//Test Whether an Item is in an Array
let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in fruits?  True.");
console.log(fruits.includes('banana')); // True

console.log("Is 'grape' in fruits?  False.");
console.log(fruits.includes('grape')); // False
