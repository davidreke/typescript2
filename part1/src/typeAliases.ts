// we could use the same type in different functions, but
// we can make our own type aliases here

type StringorNumber = string | number;
type objWithName = {
    name: string,
    uid: StringorNumber
}

const logDetails = (uid: StringorNumber, item: string) =>{
    console.log(`${item} has uid of ${uid}`)
}

const greet = (user:objWithName) => {
    console.log(`${user.name} says hello`)
}

const greetAgain = (user:objWithName) => {
    console.log(`${user.name} says hello Again`)
}

