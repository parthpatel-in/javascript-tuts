console.log("regular expression literal");

let reg = /parth/;
// reg = /parth/g; // g means  global
// reg = /parth/i; // i means case insensitive
console.log(reg);
// reg source what you write in regular expression means ander ka masala
console.log(reg.source);

// function to match expression

let s = " who never miss the target parth ";

// 1. exec() this function will return an array for match or null for no match
let result = reg.exec(s);
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);----> we can use multiple exec with global flag
if (result) {

    console.log(result);
    console.log(result.input);
    console.log(result.index);
}
//2.test()- return true or false
let result2 = reg.test(s);
// console.log(result2)
// console.log(result2); this will only print true if the reg is there in the string "s"

// 3. match() - it will return an array of result or null

// let result3 = reg.match(a) ----.> this is wrong

let result3 = s.match(reg)
console.log(result3)

// 4.search()- return index of first match else -1
// let result4 = reg.search(s) ----.> this is wrong

let result4 = s.search(reg) //---> this is right
// console.log(result4)

// 5.replace()---> return new replaced string with all the replacement

// note that (if no flag is given,first match will be replaced)

let result5 = s.replace(reg,'sunit');
console.log(result5)