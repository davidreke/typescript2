// example 1

let greet: (a: string, b:string) => void;

greet= (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2
let calc: (a:number, b:number, c:string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    // this function has to always return a number, not just some of the time
    if(action === 'add'){
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

let logDetails: (obj:{name: string, age: number}) => void

type person  = {name: string, age: number}

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`)
}

