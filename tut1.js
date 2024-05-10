//console log,errors,warning 

alert("hello parth")
//but its annoing when we have 


/*Console.log():-
This method is used to log(print) the output to the console. We can put anything inside the log(). It can be an array, object, string, boolean, etc.*/
console.log('CodeWithHarry');  
console.log(1); 
console.log(true); 
console.log(null); ;  
console.log([1, 2, 3]); // array inside log
console.log({name:"Harry", language:"JavaScript", tutorial:2}); // object inside log

//Console.table ():-

/*To generate a table inside a console, we use console.table() method. The input must be an array or an object which will be displayed as a table. In the example, we provide the object as an input.*/

console.table({name:"Harry", language:"JavaScript", tutorial:2});

/*Console.assert():-
This method writes a message to the console that the assertion failed and the message we provide as a parameter, but only if an expression evaluates to false. If the expression is true, then nothing will happen.*/

console.assert(0>1, "Expression is false")

/* Console.warn():-
This method is used to log a warning message to the console. By default, the warning message will be highlighted with yellow color.

*/

/*
Console.clear():-
It is used to clear the console. The console will be cleared. In the case of Chrome, a simple overlayed text will be printed on the console.

*/
//console.clear();

/*
Console.time() and Console.timeEnd():-
With the help of console.time() and console.timeEnd() we can find the amount of time spend by a code on execution.

*/
console.time();
for (i = 0; i < 100; i++) {
  // code
}
console.timeEnd();

/*
Console.error():-
Used to log error message to the console. Useful in the testing of code. By default, the error message will be highlighted with red color.

*/
console.error("This is a simple error");

/*
Console.count():-
The console.count() method is used to count the number that the function hit by this counting method.

*/
for (i = 0; i<4; i++) {
  console.count(i);
}

/*Console.group() and Console.groupEnd():-
group() and groupEnd() methods of the console object allow us to group contents in a separate block, indented. Just like the time() and the timeEnd(), they also accept the label, again of the same value*/
console.group('simple'); 
console.log('Grouped'); 
console.groupEnd('simple'); 
console.log('new section');

/*
Custom Console logs:- 
If the user has even a little idea about CSS, they can add Styling to the console logs to make logs Custom. The Syntax for it is to add the CSS styling as a parameter to the logs, which will replace %c in the logs as shown in the example below: 
*/

const spacing = '8px'; 
const mystyle =  
`padding: ${spacing}; background-color: white; color: blue ; font-style:
italic; border: 1px solid black dotted; font-size: 2em;`; 
console.log('%cCode With Harry', mystyle);

// js code describe in writen in the video
console.time('Your code Took');
console.log('Hello console');
console.log(4+34);
console.log(34);
console.log(true);
console.log([34,2,1,2]);
console.log({harry: 'this', marks:34});
console.table({harry: 'this', marks:34});
console.warn('This is a warning');
// console.clear();
console.timeEnd('Your code Took');
// console.assert(566<189, 'Age >189 is not possible')
// console.error('This is an error')

/*
this
is a
multiline comment
*/
