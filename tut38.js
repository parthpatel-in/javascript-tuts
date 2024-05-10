console.log("error handling & try catch");

// pretend this is coming from a server as response
let a = "harry bhai";
// a = undefined; 
if (a != undefined) {
    throw new Error("this is not undefined");
} else {

    console.log("this is undefined");
}

// o/p= error in line 404

try {
    console.log("we are inside the try block");
    parth();
} catch (error) {
    console.log("this is error")
}