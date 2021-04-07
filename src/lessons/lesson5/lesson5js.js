// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

console.log( '-------------> Start Task 1 <-------------' )
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
const greeting2 = greeting.bind( someObj )
greeting2();


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
console.log( '--------------> End Task 1 <--------------' )

console.log( '-------------> Start Task 2 <-------------' )

const counter = {
    currentCount: 0,
    getCurrentCount() {
        return this.currentCount
    },
    increment() {
        this.currentCount++
    },
    decrement() {
        this.currentCount--
    },
    setCurrentCount( value ) {
        this.currentCount = value
    },
    restCurrentCount() {
        this.currentCount = 0
    }
}
//1
console.log( counter.currentCount );
//2
counter.increment();
counter.increment();
console.log( counter.currentCount );
//3
counter.decrement();
console.log( counter.currentCount );
//4
counter.setCurrentCount( 7 );
console.log( counter.currentCount );
//5
counter.restCurrentCount();
console.log( counter.currentCount );

console.log( '--------------> End Task 2 <--------------' )

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

console.log( '-------------> Start Task 3 <-------------' )
const superCounter = {
    currentCount: 0,
    getCurrentCount() {
        return this.currentCount
    },
    increment() {
        this.currentCount++;
        return this;
    },
    decrement() {
        this.currentCount--;
        return this;
    },
    setCurrentCount( value ) {
        this.currentCount = value;
        return this;
    },
    restCurrentCount() {
        this.currentCount = 0;
        return this;
    }
}

const current = superCounter.setCurrentCount( 10 ).increment().increment().increment().decrement().getCurrentCount();
console.log( current )

console.log( '--------------> End Task 3 <--------------' )

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

console.log( '-------------> Start Task 4 <-------------' )
const myFirstConstructorFunc = function ( name, age ) {
    return {
        name: name,
        age: age,
        greeting: greeting
    }
}

const f = myFirstConstructorFunc( 'Ewgeni', 35 );
f.greeting();

console.log( '--------------> End Task 4 <--------------' )

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

console.log( '-------------> Start Task 5 <-------------' )

const One = { name: 'One' };

const Two = {
    name: 'Two', sayHello: function () {
        console.log( `Hello, my name is ${ this.name }` );
    }
};
Two.sayHello.bind( One )();
console.log( '--------------> End Task 5 <--------------' )

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

console.log( '-------------> Start Task 6 <-------------' )

helperObj = {
    changeName( value ) {
        this.name = value
    },
    setAge( value ) {
        this.age = value
    },
    greeting: greeting
}

