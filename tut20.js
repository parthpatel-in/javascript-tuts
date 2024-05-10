console.log("local & sessoin storage");

// local storage

let imparray = [`adrak`,`bhindi`,`pyaz`];

// add a key - value pair inside localStorage
localStorage.setItem(`name`,`parth`);
localStorage.setItem(`name2`,`sunit`);
localStorage.setItem(`sabji`,JSON.stringify(imparray));

// this function use for get item
// retrieve a particular key-value pair

let name =localStorage.getItem(`name`);
 JSON.parse(localStorage.getItem(`sabji`));


// clear a particular key-value 
localStorage.removeItem(`name2`);

// to clear the localStorage/

// localStorage.clear();
console.log(name);

// session storage is same as local storage 
// note that always works with array in local & session storage