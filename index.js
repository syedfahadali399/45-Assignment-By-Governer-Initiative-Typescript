// Assignment 1
// Node Js Installation Compelete
// Assignment 2
let Name = "Fahad";
console.log(`Would You Learn Some TypeScript ${Name}`);
// Assignment 3
let person_name = "Fahad";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
let small_letter_name = "fahad";
console.log(small_letter_name.charAt(0).toUpperCase() + small_letter_name.slice(1).toLowerCase());
// Assignment 4
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');
// Assignment 5
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);
// Assignment 6
let person__name = "\t\n Fahad \t\n";
console.log(person__name);
console.log(person__name.trim());
// Assignment 7
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Assignment 8
console.log(5 + 3);
console.log(4 + 4);
console.log(6 + 2);
console.log(1 + 7);
// Assignment 9
let myfavoriatenum = 7;
console.log(`My Favoraite Number Is ${myfavoriatenum}`);
// Assignment 10
// Fahad, 2024-05-10
// This program prints a personal message.
let myName = "Fahad";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);
// Assignment 11
let arr_name = ["Mousab", "Rehman", "Aqeel", "Allyan"];
for (let j = 0; j < arr_name.length; j++) {
    console.log(arr_name[j]);
}
// Assignment 12
let arr = ["Mousab", "Talha", "Rehman", "Arman"];
for (let i = 0; i < arr.length; i++) {
    let print = `Hello ${(arr[i])} Can We Go For Picnic`;
    console.log(print);
}
// Assignment 13
let transports = ["Honda Motorcycle", "Pagani Hyper Car", "Bmx Bicycle"];
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});
// Assignment 14
let dinner_invite = ["Aqeel", "Rehman", "Hamza"];
for (let k = 0; k < dinner_invite.length; k++) {
    let dinner_message = `Dear ${dinner_invite[k]} Would You Come In Today Dinner In My House`;
    console.log(dinner_message);
}
// Assignment 15    
console.log("Talha Would Come For Dinner So The New List Is Here");
let dinner_invites = ["Aqeel", "Rehman", "Hamza",];
for (let m = 0; m < dinner_invites.length; m++) {
    dinner_invites.splice(2, 1);
    dinner_invites.splice(2, 0, "Asher");
    console.log(`Dear ${dinner_invites[m]} Would You Come In Today Dinner In My House at 9pm`);
}
// Assignmnet 16
console.log("I Have Found a Bigger Dinning Table");
let dinner_invite_9pm = ["Aqeel", "Rehman", "Asher"];
dinner_invite_9pm.unshift("Ahsan");
dinner_invite_9pm.splice(2, 0, "Wasay");
dinner_invite_9pm.push("Aman");
for (let m = 0; m < dinner_invite_9pm.length; m++) {
    console.log(`Dear ${dinner_invite_9pm[m]} Would You Come In Today Dinner In My House at 9pm Please Come `);
}
// Assignment 17
console.log("My Dinner Table Wont Arrive On Time So Sorry For I Can Invite Only 2 Guests");
let guests = ["Ahsan", "Aqeel", "Wasay", "Rehman", "Asher", "Aman"];
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest} I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest} you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
// Assignment 18
let places = ["Aurora-Light-Norway", "St-Mortiz", "Manaco", "Las-Vegas", "LosAngeles"];
console.log("Original order:", places);
console.log("Alphabetical order:", places.sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", places.sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);
// Assignment 19
let numofguests = ["Ahsan", "Aqeel", "Wasay", "Rehman", "Asher", "Aman"];
console.log(`I Inviting ${numofguests.length} Of My Guests`);
// Assignment 20
let myfavcountry = ["US", "Kuwait", "Swizerland", "India", "Japan"];
console.log(`This Countrys i will Travel in Future`, myfavcountry);
// Assignment 21
let obj = {
    std_name: "Fahad",
    std_age: 17,
    std_class: 12,
    std_college: "Superior Science College"
};
console.log(`My Name Is ${obj.std_name} and i am ${obj.std_age} Year Old & I am in Class ${obj.std_class} and my College Name Is ${obj.std_college}`);
// Assignment 22
let myfrename = ["Ayub", "Bazif", "Sharjeel"];
console.log(`My Friends are ${myfrename[3]}`);
myfrename[2];
console.log(`My Friends are ${myfrename[2]}`);
// Assignement 23
let car_name = "Porsche Tayacan";
console.log("Is car == 'Porsche Tayacan'? I predict False.");
console.log(car_name == 'Porsche Tayacan');
console.log("Is car == 'civic'? I predict False.");
console.log(car_name == 'civic');
// Assignement 24
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" === "apple"); // True
console.log("apple" === "apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(fruits.includes("mango")); // True
// Assignment 25
let alien_colour = "green";
if (alien_colour == "green") {
    console.log("You earned 5 pionts");
}
alien_colour = "red";
if (alien_colour == "green") {
    // No Code To Be Exexuted 
}
// Assignment 26
let alien_colours = "green";
if (alien_colours == "green") {
    console.log("You just earned 5 points for shooting the alien");
}
else {
    console.log("You just earned 10 points");
}
alien_colours = "yellow";
if (alien_colours == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
// Assignment 27
let alien_game = "green";
if (alien_game == "green") {
    console.log('You Earned 5 Pionts');
}
else if (alien_game == "yellow") {
    console.log("You Just Earned 10 Pionts");
}
else if (alien_game == "red") {
    console.log("You just Earned 15 Pionts");
}
alien_game = "yellow";
if (alien_game == "green") {
    console.log('You Earned 5 Pionts');
}
else if (alien_game == "yellow") {
    console.log("You Just Earned 10 Pionts");
}
else if (alien_game == "red") {
    console.log("You just Earned 15 Pionts");
}
alien_game = "red";
if (alien_game == "green") {
    console.log('You Earned 5 Pionts');
}
else if (alien_game == "yellow") {
    console.log("You Just Earned 10 Pionts");
}
else if (alien_game == "red") {
    console.log("You just Earned 15 Pionts");
}
// Assignment 28
let age = 17;
if (age < 2) {
    console.log("Person is a Baby");
}
else if (age < 4) {
    console.log("Person is a Toddler");
}
else if (age < 13) {
    console.log("Person is a Kid");
}
else if (age < 20) {
    console.log("Person is a Teenager");
}
else if (age < 65) {
    console.log("Person is an Adult");
}
else {
    console.log("Person is an Elder.");
}
// Assignment 29
let fav_fruits = ["Banana", "Mango", "Pineapple"];
if (fav_fruits.includes("Banana")) {
    console.log("You really like Bananas");
}
if (fav_fruits.includes("Apple")) {
    console.log("You really like Apple");
}
if (fav_fruits.includes("Kiwi")) {
    console.log("You really like Kiwi");
}
if (fav_fruits.includes("Papaya")) {
    console.log("You really like Papaya");
}
if (fav_fruits.includes("Mango")) {
    console.log("You really like Mango");
}
// Assignment 30    
let admin = ["Employee1", "Employee2", "Employee3", "Admin", "Employee5"];
admin.forEach(admins => {
    if (admins == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${admins}, thank you for Logging in Again`);
    }
});
// Assignemnt 31
let user_list = [];
if (user_list.length == 0) {
    console.log("We Need Users");
}
else {
    console.log("We Dont Need Users");
}
// Assignement 32
let current_user = ["Aman", "Aqeel", "Rehman", "Mousab", "Ahsan"];
let new_userlist = ["Bazif", "Aqeel", "Ali", "Mousab", "Alliyan"];
new_userlist.forEach(new_user => {
    if (current_user.some(currentUser => currentUser.toLowerCase() === new_user.toLowerCase())) {
        console.log(`${new_user} Name Has Been Taken Please Enter a New User Name`);
    }
    else {
        console.log(`${new_user} is Available.`);
    }
});
// Assignement 33
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach(numbers => {
    let end_word = "th";
    if (numbers === 1) {
        end_word = "st";
    }
    else if (numbers === 2) {
        end_word = "nd";
    }
    else if (numbers === 3) {
        end_word = "rd";
    }
    console.log(`${numbers}${end_word}`);
});
// Assignment 34
let pizza = ["cheese", "chicken fatija", "afghani malai"];
pizza.forEach(pizzas => {
    console.log(`I like ${pizzas} pizza.`);
});
console.log("I really love pizzas!");
// Assignment 35
let animal = ["Cheeta", "Cat", "Lion"];
animal.forEach(Char_animal => {
    console.log(`A ${Char_animal} Would Make a Great Pet`);
});
console.log("These Animals Have Common Charactertics");
// Assignmnent 36
function make_shirt(size, text_message) {
    console.log(`Please Give ${size} Size Shirt and i Want to print ${text_message} On the Shirt`);
}
make_shirt("Medium", "F1 Race Manaco");
// Assignment 37
function make_shirts(size = "Large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirts();
make_shirts("medium");
make_shirts("small", "Dive into Coding");
// Assignment 38
function describe_city(city, country = "Pakistan") {
    console.log(`The ${city} Is In ${country}`);
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Kuwait city", "Kuwait");
// Assignment 39
function city_name(cities, countrys) {
    console.log(`The ${cities} Is In ${countrys}`);
}
city_name("Dallas", "US");
city_name("Sydney", "Australia");
city_name("Mardid", "Spain");
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("The Beatles", "Abbey Road");
let album2 = make_album("Pink Floyd", "The Dark Side of the Moon");
let album3 = make_album("Nirvana", "Nevermind");
console.log(album1);
console.log(album2);
console.log(album3);
let albumWithTracks = make_album("Led Zeppelin", "IV", 8);
console.log(albumWithTracks);
// Assignment 41
let magicans_name = ["Alies", "David", "Chris"];
function show_magican(magicans_name) {
    magicans_name.forEach(magicans_name => {
        console.log(magicans_name);
    });
}
show_magican(magicans_name);
// Assignment 42
function make_great(show_magican) {
    console.log(`Phrase The Great To ${show_magican}`);
}
make_great("David");
make_great("Alies");
make_great("Chris");
// Assignment 43
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["David Copperfield", "Criss Angel", "Dynamo"];
const greatMagicians = makeGreat(magicianNames.slice());
showMagicians(magicianNames);
console.log("--------------------");
showMagicians(greatMagicians);
// Assignment 44
let sandwich = ["Bread", "Mayo", "Chicken-Breast", "Tomatoes", "Lettuce", "Freid Eggs", "Bacon"];
function order_sandwich(order) {
    console.log(`${order} Want Sandwinch With ${sandwich} On It`);
}
order_sandwich("Fahad");
order_sandwich("Alliyan");
order_sandwich("Aman");
// Assignment 45
function abouts_Car(manufacturer, modelName, optionalFeature) {
    let about_Car = {
        manufacturer: manufacturer,
        model: modelName,
        optionalFeature: optionalFeature
    };
    return about_Car;
}
let show_car = abouts_Car("Suzuki", "Alto-F", "Sun-Roof");
console.log(show_car);
export {};
