/* City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
"Lahore, Pakistan" 
*/


function city_country(city: string , country: string ): void{
    console.log (`"${city}, ${country}"`)
};
city_country("Hyderabad", "Pakistan");
city_country("Newyork", "USA");
city_country("Berlin", "Germany");