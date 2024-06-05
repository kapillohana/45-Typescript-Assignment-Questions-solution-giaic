/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let guestList : string []= ["faizan", "amjad", "raheel", "shoaib"];
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