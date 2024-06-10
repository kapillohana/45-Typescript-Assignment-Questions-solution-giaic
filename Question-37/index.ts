/* Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.  */

function makeShirt(size: string= "large", message: string= "I really love typeScript"): void{
    console.log (`This shirt's size is ${size} , and has a message: ${message} `)
 };


makeShirt(); 
makeShirt("Medium"); 
makeShirt("Small", "I really love typeScript but typeScript don't love me"); 