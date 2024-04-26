//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//printing person's Name in variable:
var personName = ("Kapil");
//In smallcase
console.log("lowerCase:", personName.toLowerCase());
//in uppercase
console.log("UpperCase:", personName.toUpperCase());
//in titlecase
console.log("titlecase:", personName.replace(/\kw/g, function (c) { return c.toUpperCase(); }));
