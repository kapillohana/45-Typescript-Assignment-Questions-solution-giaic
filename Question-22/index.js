"use strict";
/* Intentional Error: If you haven’t received an array index error in one of your programs yet,
 try to make one happen. Change an index in one of your programs to produce an index error.
 Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
let stuff = ["books", "laptop", "mobile", "beg", "glasses"];
// This will cause an index error because the valid indices are 0 to 4
console.log(stuff[10]);
//output "undefined"
// This is a valid index and will print the value 3
console.log(stuff[2]);
