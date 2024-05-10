console.log("character set in js");

// regular expression:
// basic function
// metacharater symbols

//    const regex = /^h/i;
// charater sets we use []
let regex = /h[a-z]rry/;  // can be any character from a to z
regex = /h[aty]rry/;  // can be an a, t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
regex = /h[^aty]rr[Yyu]/; // cannot be any of a, t or y + can be a u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; // we can have as many character sets as we want harry9

// quantifiears
regex = /har{2}y/;  //  r can occur exactly 2 times
regex = /har{0,2}y/; // r can occur exactly 0 to 2 (0 or 1 or 2) times


// Groupings  - We use paranthesis for groupings ()
regex = /(har){2}([0-9]r){3}/


const str = "harhar1r4r3ry bhai";

let result = regex.exec(str);
console.log("the result from exec is", result);


if (regex.test(str)) {// agar aapka str regular expression me match hoto 
    console.log(`the string ${str} matches the expression ${regex.source}`);
} else {
    console.log(`the string ${str} does not matches the expression ${regex.source}`);
}

