"use strict";
// let names = ['luigi', 'mario', 'yoshi']
// // in this above array I cannot add a non string to an exiting or new index
// names.push('Dave')
// let numbers = [1,2,3,4]
// // same with this array but I cannot add a non numbers
// let mixed = ['ken', 4, 'chun-li']
// // this array will now accept numerse or strings at either index
// mixed.push(55)
// mixed[0] = 5;
// // objects
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }
// ninja.age =40;
// ninja.name = 'ryu';
// // these won't work
// // ninja.age='50'
// // ninja = []
// ninja = {
//     name: 'mario1',
//     belt: 'black1',
//     age: 301
// }
// // this won't work b/c it doesn't have the same structure. You also couldn't add a property to 
// // ninja = {
// //     name: 'mario1',
// //     belt: 'black1',
// // }
// explicit types
// let character:string;
// let age: number;
// let isLoggedIn: boolean;
// character = 'Clifford';
// age = 20;
// isLoggedIn = false;
// // ARRAYS
// let ninjas: string[] = [];
// // array of strings
// ninjas.push('shaun')
// // union types
// let mixed: (string|number|boolean)[] = []
// mixed.push('hello')
// mixed.push(42)
// mixed.push(true)
// // this won't work because its not in the union types
// // mixed.push({name: 'Alex'})
// let uid: string | number;
// uid = 123
// uid = 'help!'
// // objects
// let ninjaOne: object;
// ninjaOne = {name: 'tyue'}
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColor:string
// }
// ninjaTwo= {name: 'alex', age: 23, beltColor: 'puke'}
// // this won't work
// // ninjaTwo= {name: 'alex', age: 23, beltColor: 'puke', skills:'kicking'}
// any type
let age = 38;
age = 25;
age = "35";
age = { name: 'luigi' };
let mixed = [];
mixed.push(true);
mixed.push('pen');
mixed.push(24);
mixed.push({ hello: 'Hello' });
let AnotherNinja;
AnotherNinja = { name: 'yoshi', age: '29' };
AnotherNinja.name = 23;
AnotherNinja.age = { result: 'bad' };
var itsWorking = 'itsWorking!';
