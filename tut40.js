console.log("meta character in js");

let regex = /harry/;
// meta character symbols;

regex = /^harr/; //^means expressionwill match if string start with
regex = /ry$/;   //$ at the end of the string means "string endswith"
regex = /h.rry/; // matches anyone  charater . means exectly only 1 character
regex = /h*rry/; // matches anyone 0 or more charater
regex = /ha?rryi?/; // ? after charater  means" the charater is optional
regex = /h\*rry/; 
const str = " h*rry is code with harry";

let result = regex.exec(str);
console.log("the result from exec is", result);

// agar aapka str regular expression me match hoto 
if (regex.test(str)) {
    console.log(`the string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`the string ${str}does not matches the expression ${regex.source}`);
}
