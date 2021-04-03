let someObj = {
    name: 'Eugene',
    age: 32
}

function greeting() {
    console.log( `My name is ${ this.name }. I am ${ this.age }` );
}

someObj.greeting = greeting;

someObj.greeting();

greeting();

const greeting2 = greeting.bind(someObj)

greeting2();