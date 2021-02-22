"use strict";
// we could use the same type in different functions, but
// we can make our own type aliases here
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello Again`);
};
