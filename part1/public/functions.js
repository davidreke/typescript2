"use strict";
// Function needs to be a capital F
let greet = () => {
    console.log('hello world!');
};
// this won't work 
// greet = 'hello'
greet = () => {
    console.log('Your mother');
};
// we can type out the arguments
// c is optional b/c it has a question mark, and it could be number or string
// d has a default value, so we can't make it optional. Required and default parameters should be at the end of your arguments
const add = (a, b, c, d = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// below is types to return a number
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// below won't work because TS has inferred result is the return of minus, which is a number
// result = 'something else';
// void means it doesn't return a value
const exampleConsole = () => {
    console.log('test');
};
