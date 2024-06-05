/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner. */

// From Question-14
let guestList: string[] = ["Danesh", "Faizan", "Love", "Amrat"];

guestList.forEach((guest: string) => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n kapil Lohana`);
});

//From Question-15
//raheel is not coming to the party so instead of raheel we are inviting danesh my friend to the party
console.log ("unfortunatly Raheel is not avaiable so he couldn't join us.");


const index = guestList.indexOf("raheel");

if (index !== -1) {
    // Remove one item at the found index and insert "Danesh"
    guestList.splice(index, 1, "Danesh")};
    
    // console.log(guestList)


    //invitation to the new list guests same invitation message
    guestList.forEach((guest: string)=> {
    console.log (`Dear ${guest},\nYou are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n kapil Lohana`)
});

console.log ("unfortunatly Raheel is not avaiable so he couldn't join us.");

//From Question-16
console.log("\nThere is a good news! we just found bigger dinner table so we have three more friends to join us \n");
guestList.unshift("Karan");
guestList.splice(3, 0, "Shazia");
guestList.push("Bisma");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. Please join us for an evening of great food and stimulating conversation.\n\nBest regards,\n kapil Lohana"));
});

//From Question-17
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


//Question-19
//print a message indicating the number of people you are inviting to dinner.

console.log(`\nTotal number of guests we are inviting are: ${guestList.length}`);