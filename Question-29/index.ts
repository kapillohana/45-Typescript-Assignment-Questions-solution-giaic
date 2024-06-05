/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits: string []= ["Banana", "Mango", "Apple"]

//checks for banana
if (favorite_fruits.includes("Banana")){
    console.log ("You really like Bananas?")
};

//checks for mango
if (favorite_fruits.includes("Mango")){
    console.log ("You really like Mango?")
};

//checks for apple
if (favorite_fruits.includes("Apple")){
    console.log ("You really like Apple?")
};

//checks for kivi
if (favorite_fruits.includes ("kivi")){
    console.log ("You really like Kivi?")
};

//checks for pineapple
if (favorite_fruits.includes ("pineapple")){
    console.log ("You really like pineapple?")
}