"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('Luigi', 'work on mario website', 300);
console.log(invOne, invTwo);
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
