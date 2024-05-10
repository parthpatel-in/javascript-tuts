console.log('callback function');

// response coming from server

const students = [
    {name:"parth",subject:"js"},
    { name: "sunit",subject:"science"}
 

]

// callback function means function in function ex: foreach()
function enrollstudents(student, callback){

    // settime is function jo function leta hai as a input
    setTimeout(function() {
     students.push(student); 
     console.log('student has been enrolled')
     callback();  
    }, 8000);
}

function getstudents(student){

    setTimeout(function() {
        let str = ""
students.forEach(function(element){
    str += '<li> ${students.name} </li>'
});
document.getElementById('students').innerHTML = str;
console.log('student has been fetched');
    }, 1000);
}

let newstudents = {name:'shunny',langauge:'python'}
enrollstudents(newstudents,getstudents);
