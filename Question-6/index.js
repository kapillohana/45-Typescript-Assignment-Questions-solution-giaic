//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// storing person name with some whitespace characters at beginning and end...
var personName = ("\t\n     kapil       \n\t");
console.log(personName);
//striping the name and printing the name after striping the white spaces.
var strippedName = personName.trim();
console.log(strippedName);
