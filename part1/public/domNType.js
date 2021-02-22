"use strict";
const anchor = document.querySelector('a');
// if(anmchor0){
//     console.log(anchor.href)
// }
// or
// us the ! to tell TS that it will definatley be therefore
console.log(anchor.href); //
// TS has a type for html elements
// const form = document.querySelector('form')!;
// if we select with a class, TS won't know what kind of element we are grabbing.
// we can use typecasting to remedy this (using As)
const form = document.querySelector('.new-item-form');
// as HTMLFormElement, lets TS know we are grabbing a form.
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
