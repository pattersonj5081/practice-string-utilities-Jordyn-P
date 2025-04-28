const stringUtilities = require('./stringUtils'); 

let capitalStr = stringUtilities.capitalize("jordyn"); 

let reverseStr = stringUtilities.reverse("Today is gray"); 

let containsToday = stringUtilities.contains("Today is gray", "Today"); 


console.log(capitalStr); 
console.log(reverseStr); 
console.log(containsToday); 

