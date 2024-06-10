"use strict";
/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
Object.defineProperty(exports, "__esModule", { value: true });
const greatMagicians = ["David Blaine", "Ricky Jay ", "Asad Chaudhry", "Shaheer Khan "];
function show_magicians() {
    for (let magician of greatMagicians) {
        console.log(magician);
    }
}
;
show_magicians();
show_magicians();
