console.log("ES6classes and inheritance");
// agora
class employee {
    constructor(givenName, givenExperince, givenDivision) {
        this.name = givenName;
        this.experince = givenExperince;
        this.divison = givenDivision;
    }
    slogan() {
        return `im ${this.name} and this company is the best`;
    }
    joiningYear() {
        return 2020 - this.experince;

    }
    // to use binary seach to route finds 
    static add(a, b) {
        return a + b;
    }

}
// extend is use for inherit the class
class programer extends employee {
    constructor(givenName, givenExperince, givenDivision, language, github) {
        super(givenName, givenExperince, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoritelanguage() {
        if (this.language == 'python') {
            return 'python';
        }
        else {
            return 'javascript';
        }
    }
    static multiply(a,b){
        return(a * b);
    }
}
// programer class
sunit = new programer("sunit",5,"fiter","javascript","sunit420");
console.log(sunit);
console.log(sunit.favoritelanguage());
console.log(programer.multiply(3,9));

// employee class
parth = new employee("parth", 2, 'divison');
console.log(parth);
console.log(parth.slogan());
console.log(parth.joiningYear());
console.log(employee.add(9, 9));

