//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//printing person's Name in variable:
let personName: string=("Kapil");
//In smallcase
console.log("lowerCase:", personName.toLowerCase());
//in uppercase
console.log("UpperCase:", personName.toUpperCase());
//in titlecase
console.log("TitleCase:", personName.replace(/\kw/g,c => c.toUpperCase()));