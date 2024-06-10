"use strict";
/* Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information. Use the function to make three dictionaries representing
different albums. Print each return value to show that Objects are storing the album information
correctly. Add an optional parameter to make_album() that allows you to store the number of tracks
on an album. If the calling line includes a value for the number of tracks, add that value to the
album’s Object. Make at least one new function call that includes the number of tracks on an album. */
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
;
let album1 = make_album("RFAK", "Back 2 Love");
let album2 = make_album("Arijit", "Soulful Voice");
let album3 = make_album("Sidhu ", "PBX 1");
console.log(album1);
console.log(album2);
console.log(album3);
//ADDING 3rd Option (Number of Tracks)
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName, albumTitle, numberOfTracks };
}
let album4 = make_album2("RFAK", "Back 2 Love", 4);
let album5 = make_album2("Arijit", "Soulful Voice", 5);
let album6 = make_album2("Sidhu", "PBX 1");
console.log(album4);
console.log(album5);
console.log(album6);
