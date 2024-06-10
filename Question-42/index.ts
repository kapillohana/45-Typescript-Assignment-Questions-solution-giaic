/* Great Magicians: Start with a copy of your program from Exercise 41. 
Write a function called make_great() that modifies the array of magicians by adding the phrase 
the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

const magiciansNames: string[]= ["David Blaine", "Ricky Jay ", "Asad Chaudhry", "Shaheer Khan "];
function show_magicians(magicians : string[]) : void {
   for ( let magician of magiciansNames){
    console.log (magician)
   }
};


function make_great(magicians: string[]): string[] {
    const greatmagicians : string[] = magicians.map(magicians=> `The Great ${magicians}`);
    return greatmagicians;
}    


//Modify the Array to add "The Great" to Each magician's Name.
const greatmagicians: string[] = make_great(magiciansNames);

//Calling the function to Print the original magician's names
console.log("\nOriginal Magicians :");
show_magicians( magiciansNames);

//calling the function to Print "The great Magician's Names"
console.log("\nThe Great Magician:");
show_magicians(greatmagicians );


