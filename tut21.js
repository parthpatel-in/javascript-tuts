console.log(`creating editable div`);
// /excercise 2

let divElem = document.createElement('div');
let text = document.createTextNode('this is my element.click to edit it');
divElem.appendChild(text);
divElem = setAttributes('id','elem');
divElem.setAttribute('style','color:rbg ; width 154px;')
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

console.log(divElem,container,first);