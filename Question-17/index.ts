/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

 • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
 
 //From Question-16

let guestList : string []= ["faizan", "amjad", "raheel", "shoaib"];

const index = guestList.indexOf("raheel");

if (index !== -1) {
    // Remove one item at the found index and insert "Danesh"
    guestList.splice(index, 1, "Danesh")};
    
    //invitation to the new list guests same invitation message
    guestList.forEach((guest: string)=> {
    console.log (`Dear ${guest},\nYou are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n kapil Lohana`)
    
});
console.log ("raheel is not coming to the party so instead of raheel we are inviting danesh my friend to the party")


console.log ("\nThere is a good news! we just found bigger dinner table so we have three more friends to join us \n");

guestList.unshift("Karan");
guestList.splice(3,0,"Shazia");
guestList.push("Bisma");

guestList.forEach((guest: string)=> {
    console.log (`Dear ${guest},\nYou are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n kapil Lohana`)
});

//Question-17

console.log ("\nUnfortunately, The dinner table could not reach on time so we only have space for two guests\n");

console.log (guestList);
// guestList.pop()
while(guestList.length > 2){

    let remove_guest=guestList.pop();
    console.log(`Sorry ${remove_guest}, You are not invited for Dinner.\n`);
}
//inviting two remaining guests
guestList.forEach((guest: string)=> {
    console.log (`Dear ${guest},\nYou are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n kapil Lohana`)
});



