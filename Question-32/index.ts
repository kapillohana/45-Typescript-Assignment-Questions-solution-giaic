/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

const current_users: string[]= ["Amrat", "Jabbar", "Mehak", "Anchal", "Junaid"];
const new_users: string[]= ["Noor", "Mehak", "Anchal", "Faique", "Shiza"];

// Iterating over each new username in the list of new users
for (const newUsername of new_users) {
    
    // Checking if the new username already exists in the current users list
    // The comparison is case-insensitive by converting both usernames to lowercase
    const isUsernameTaken = current_users.some(
        (currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase()
    );

    // Printing a message based on whether the username is taken or available
    if (isUsernameTaken) {
        console.log(`The username '${newUsername}' is already taken. Please enter a new username.`);
    } else {
        console.log(`The username '${newUsername}' is available.`);
    }
}
