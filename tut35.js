console.log('arrow function');

//  creating regular function with variable 
const harr = function () {
    console.log('this is method function define with var')
}
harr()

function sample() {
    console.log('this is simple function ');
}
sample();

// creating into an arrow function
const harry = () => {
    console.log('This is the best person ever')
}
harry()

// function returning something
const parth = function () {
    return 'good morning';
}

// one liners do not require braces/return
// one line automatic return

const greet = () => "without use of return & braces";
console.log(greet())

// return object in one liners
const obj = () => ({ name: "harry" });

// / Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres

const para = name => "Good Morning " + name + ending;


console.log(obj('Harry'))






/*Limitations of Arrow Functions:-

An arrow function expression is an alternative to a traditional function expression, but there are some limitations: 

   (1) Arrow functions do not have its own bindings to this or super, and should not be used as methods.

 (2 )it is not suitable for the call, apply and bind methods, which generally rely on establishing a scope.
 
    (3)Arrow functions cannot be used as constructors.

Arrow functions are a powerful addition to ES6, but we have to be careful while using them. There are some places where arrow functions are not usable, and this can cause difficulty for us to track errors, especially if we do not understand how they really work. Arrow functions are the best choice when working with closures or callbacks, but it is not a good choice when working with object methods or constructors.

Summary:-

Arrow functions are handy for one-liners. They come in two flavors:

   (1) Without curly braces: (...args) => expression, where at the right side is an expression. The function evaluates the expression and returns the result.

   (2) With curly braces: (...args) => { body }, the brackets allow us to write multiple statements inside the function, but in such scenario, we need an explicit return to return something.*/

