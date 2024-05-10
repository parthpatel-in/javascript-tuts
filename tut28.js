console.log(`object protptype in js`);

// object literal

let obj ={
    name:'parth',
    channel:'edublog',
    address:'mehsana',
}
function Obj(givenName){           
    this.name = givenName
}
// to change prototype
Obj.prototype.getName = function(){
    return this.name;
}
Obj.prototype.setname = function(newName){
    this.name = newName;
}
let obj2 = new Obj("parthh");
console.log(obj2);

let a = 1, b = 1;
let c = ++a; //2 prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value
let d = b++; 

console.log(c);
console.log(d)
