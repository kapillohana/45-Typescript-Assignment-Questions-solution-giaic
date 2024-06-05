/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
//From Question-15
var guestList = ["faizan", "amjad", "raheel", "shoaib"];
var index = guestList.indexOf("raheel");
if (index !== -1) {
    // Remove one item at the found index and insert "Danesh"
    guestList.splice(index, 1, "Danesh");
}
;
//invitation to the new list guests same invitation message
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n kapil Lohana"));
});
console.log("raheel is not coming to the party so instead of raheel we are inviting danesh my friend to the party");
//Question-16
console.log("\nThere is a good news! we just found bigger dinner table so we have three more friends to join us \n");
guestList.unshift("Karan");
guestList.splice(3, 0, "Shazia");
guestList.push("Bisma");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n kapil Lohana"));
});
