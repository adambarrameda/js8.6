// Module 8 - Practicing Arrays

// Create & Modify an Array
var hobbies = ["yoga", "cycling", "horticulture", "chess", "playlist curation", "weightlifting"];

console.log(hobbies.length);

hobbies.push("surfing");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "birdwatching", "travel");
console.log(hobbies);

hobbies.shift();

hobbies.unshift("vinyasa");

console.log(hobbies);

// Create a New Array & Combine Arrays
var goals = ["land a full-stack position", "find a 1-bed apartment", "create a yoga pop-up"];

var allTheThings = [...hobbies, ...goals];

console.log(allTheThings);

console.log(allTheThings.indexOf("chess"));

allTheThings.splice(5, 1);

console.log(allTheThings);

// Map Over an Array
var plans = allTheThings.map(function(item){
    return `I can't wait to ${item}.`
});

console.log(plans);