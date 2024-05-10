console.log("window object in js");

// We have focused on the basics of JavaScript like arrays, strings, objects, etc. In this tutorial, we will begin to make things happen on the screen

/*The Window Object:-
The window object represents a window in the browser containing the DOM document. The browser automatically creates a window object. The window is not the object of the JavaScript. It is the object of the browser. A window can be the main window, a frameset, or even a new window created with JavaScript. The developers use the window object to close and open browser window, displaying alert and prompt dialogs.

Window object has many properties and methods. The following are the few properties and methods of window object.*/

 
 

/*Window Object Properties:-
The window object properties are the variables created inside the window object. We can access the properties of window object by 

using the syntax:||

window.propertyname
where property name is the name of the property.

The following are the most popular window object properties:

Properties

Explanation

width

 It specifies the initial width of the browser window.

height

 It specifies the initial height of the browser window.

innerWidth

 It specifies the initial width of the window content area

innerHeight

 It specifies the initial height of the window content area

outerWidth

 It specifies the initial width of the navigator window

outerHeight

 It specifies the initial height of the navigator window

menubar

 It specifies whether the window should contain the browser menubar

location

It specifies whether the window should contain the browser location/URL box

scrollbars

It hides or shows browser horizontal/vertical scrollbars

top

Specified the number of pixels from the top of the screen to the new window*/

 
/*Window Object Methods:-
The window object methods are the functions that are created inside the Window Object. These methods are used to perform various actions on the browser window, such as how it displays a message or gets input from the user.

Following are the some of the most commonly used window object methods:

Method

Description

alert()

It will display an alert box with a message on the screen

blur()

It will remove focus from the current window

close()

It will close the current window

confirm()

It will display a dialog box with a message on the screen

focus()

It will set the focus to the current window

moveTo()

It will move a window to the specified position

open()

It will open a new browser window

print()

It will print the content of the current window

prompt()

It will display a dialog box that prompts the user for input

resizeBy()

It will resize the window by the specified pixels

resizeTo()

It will resize the window to the specified height and width

scrollBy()

It will scroll the document by the specified number of pixels

scrollTo()

It will scroll the document to the specified coordinates

stop()

It will stop the window from loading*/

 
// Example:-
// In the following example, we will calculate the Width and Height of the Window using window object properties and then show the result on the screen using alert( ). As mentioned in the above table, The window object provides the innerWidth and innerHeight property to determine the width and height of the browser window. Here is an example

let A = window.innerWidth;
let b = window.innerHeight;
alert("Width: " + A + ", " + "Height: " + b);
Result:-

// Height=781 width=855
 

// Code index.html as described/written in the video
console.log('This is tut 11');
let a = window.document;
// alert('hello harry');
// a = prompt('This will destroy your computer. Type your name');

// a = confirm('Are you sure you want to delete this page?');
a = window.innerHeight;
a = innerWidth;
a = scrollY;
a = location.toString();
a = window.history;
console.log(a);          

