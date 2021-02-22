// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format () {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'work on mario website', 250)
const invTwo = new Invoice('Luigi', 'work on mario website', 300)

let invoices: Invoice[] = [];

// this won't work ik
// invoices.push('hello')
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices)


// if we select with a class, TS won't know what kind of element we are grabbing.
// we can use typecasting to remedy this (using As)
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// as HTMLFormElement, lets TS know we are grabbing a form.
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) =>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value
    );
} )
