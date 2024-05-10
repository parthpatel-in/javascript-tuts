console.log(`more on js events`);
// let btn = document.getElementById(`btn`);
// btn.addEventListener(`click`,func1);
// btn.addEventListener(`dblclick`,func2);
// btn.addEventListener(`mousedown`,func3);

// function func1(e){
//     console.log(`thanks for single click`,e);
//     e.preventdefault(); 
// }
// function func2(e){
//     console.log(`thanks for double click`,e);
//     e.preventdefault();
// }
// function func3(e){
    // console.log(`thanks for mouse down`,e);
//     e.preventdefault();
// }
// mouse enter
// mouse leave event
document.querySelector(`.container`).addEventListener(`mousemove`,function(e){
console.log(e.offsetx,e.offsetY);
document.body.style.backgroundColor = `rbg (${e.offsetx},${e.offsetx},${e,offsetx} + ${e.offsetY})`;
console.log('you start the mouse move event')
})
// line21 is error