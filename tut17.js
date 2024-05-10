console.log("events & event object");

document.getElementById(`heading`).addEventListener
(`click`,function(e){
    let variable;

    console.log(`you have click heading`);
variable = e.target;
// variable = e.target.classname;
// variable = e.target.classlist;
// variable =Array.from(e.target.classlist);
// variable = e.target.id;
// variable = e.offsetX;
// variable = e.offsetY;
// variable = e.clientX;
// variable = e.clientX;


console.log(`variable`);
// it is not neccesary to write console.log ,you can make web redirect example
// location.href = `//wwww.codewithharry.com`
});
