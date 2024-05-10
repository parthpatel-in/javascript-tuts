console.log("Promises Basics, Promise.then() & Promise.catch()");

/*What is a Promise?
A promise in JavaScript is similar to a promises we do in real life. When we make a promise, it is a guarantee that in future, we are going to do something. A promise has two possible outcomes: it will be kept when the time comes, or it will not. Similarly, in JavaScript, when we define a promise, either it will be resolved when the time comes, or it will get rejected. According to MDN, “the Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.”

A promise has three states:

pending: It is the initial state.
resolve: It indicates that the promised operation was successful.
Rejected: It indicates that the promised operation was unsuccessful.
 
The constructor syntax for a promise object is:

let myPromise = new Promise(function(resolve, reject) {
// code here
});*/

// Promise: Best video on promises
// -resolve
// -reject
// -pending  when promise is execute

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      // if  used to  fetch resources  for understanding
      if (!error) {
        console.log("Function: Your promise has been resolved");
        resolve();
      } else {
        console.log("Function: Your promise has not been resolved");
        reject("Sorry not fulfilled");
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    console.log("Harry: Thanks for resolving");
  })
  .catch(function (error) {
    console.log("Harry: Very bad bro. Reason: " + error);
  });

// convert callback function to promise
// response coming from server

console.log("This is tutorial 37");

// Pretend that this response is coming from the server
const students = [
  { name: "harry", subject: "JavaScript" },
  { name: "Rohan", subject: "Machine Learning" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("Student has been enrolled");
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str
    console.log("Students have been fetched");
  }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent)
  .then(getStudents)
  .catch(function () {
    console.log("Some error occured");
  });
// getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
