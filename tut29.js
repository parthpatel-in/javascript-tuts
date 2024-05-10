console.log("prototype inheritance");

const proto = {
    slogan: function () {
        return `this company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}
// this create parth object
const parth = Object.create(proto);
parth.name = "parth";
parth.role = "programer";
parth.changeName = "harry";
console.log(parth)

// this also create object with old version syntax

const harry = Object.create(proto, {
    Name: { value: "harry" },
    rolee: { value: "programer" },
});

harry.changeName("harry2");
console.log(harry)

// employye construct proto inheritance

function Employee(givenName,givensalary,givenExperience){
    this.name = givenName;
    this.salary = givensalary;
    this.experience = givenExperience;

}
// slogan

Employee.prototype.slogan = function(){
    return `this is the best comapany regards, ${this.name}`;

}
// create an object from this constructor
let parthobj = new Employee("parth",100000,87);
console.log(parthobj.slogan());

// programmer emp

function programer(givenName,givensalary,givenExperience,givenlanguage){
Employee.call(this,givenName,givensalary,givenExperience);
this.language = givenlanguage;
}
// inheritance the prototype employee to programer
programer.prototype = Object.create(Employee.prototype);

// manualy set the constructor
programer.prototype.constructor = programer;
 
let sunit = new programer("sunit",99999,7,"science")

console.log(sunit);

function sum(a,b){
    return a+b;
}
console.log(sum(3,1));