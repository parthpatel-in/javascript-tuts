console.log("hey this is tuts two");
alert("hey parth");
// Variables: let, const & var in JavaScript | JavaScript Tutorial In Hindi #3

/*
In today's tutorial, we are going to study variables in JavaScript and their different types. As we know, that variable is the name of the storage location. When we want to save some data, we store it in a variable. In any programming language, we typically do lots of calculations. The calculation results are stored in the computer's memory. Just like human memory, the memory of the computer also consists of millions of cells. The calculated values are stored in these memory cells. To make the usage and retrieval of these values easy, these memory locations are given names. The names given to these locations are called variables.

Data types in JavaScript are either Variables or Constants. ES6 has made major changes in JavaScript's syntax and has also brought new features. Initially, we used to declare variables with a keyword "var". However, ES6 has brought a new variable declaration keyword, "let" and "const."
*/

// Following are some rules while declaring a JavaScript    variable:

/*(1)A variable name must start with a letter (a to z or A to Z), underscore (_), or dollar( $ ) sign. 
  
(2)A variable name cannot start with a number. After the first letter, we can use digits (0 to 9), for example, message1.

(3)JavaScript variables are case sensitive. For example, a and A are different variables.
So, let us explore these variable declaration keywords in detail.
  
*/

// var
 
/*
Before the advent of ES6, var declarations were used to declare a variable. 

The properties of var is that it has visibility linked to the function to which it belongs. We can change its value, and it can be redeclared in the same scope.

NOTE THAT !
Scope means where these variables are available for use. There are two types of scope, local and global. Var declarations are globally scoped, and when they are defined inside a function, they are locally scoped.


*/
// note that var is function scope 
var age = 25; // Number
var name = "John"; // String
var developer = true;// Boolean
var location = null; // Null
var task; // undefined

// datatype in js 
/*
Number i.e., 11,23,45,6
Strings, i.e., "Hello World."
Boolean, i.e., true, false
Undefined
Null
Any of the complex data structures (Array and Objects)

*/

/*
let:-
The variable type let is introduced in ES6. It shares a lot of similarities with var, but unlike var, it has scope constraints. Its declaration and assignment are similar to var. The purpose of introducing let is to resolve all issues posed by variables scope, which developers face during development. The properties of let are that They have visibility linked to the block they belong with. We can change their values, but they cannot be redeclared in the same scope, unlike var.

"let" helps us by making it easier to see where variables live in our code and make our code cleaner and easier to read.
*/
// note that :- braces Scope 

let age = 25; // Number
let name = "John"; // String
let developer = true;// Boolean
let location = null; // Null
let task; // undefined
let age= 50;
console.log(age); // SyntaxError: identifier "age" has already been declared.

// const
/*
Const is also introduced in ES6. It is a variable type assigned to data whose value cannot and will not be changed throughout the program. Const is more strict as compared to var and let. Const is also limited to the scope in which it operates. We declare const just like var and let. We use const when we are sure a variable will not be redeclared. The characteristic of const and their declarations are block-scoped, and they cannot be updated or redeclared.*/

// example

var age = 25; // Number
var name = "John"; // String
var developer = true;// Boolean
var location = null; // Null
var task; // undefined

// Js code as described/written in the video
// Variables in js
// var, let, const
var name = 'harry';
var channel;
var marks = 3454;
marks = 0;
channel = 'CodeWithHarry'
console.log(name, channel, marks);
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Delhi';
console.log(city);

const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
// arr1.push(45);
console.log(arr1)

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 
*/
