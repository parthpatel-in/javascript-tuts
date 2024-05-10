console.log("this is tut 15 children,parents & traversing the dom|");
let cont = document.querySelector('no');
cont = document.querySelector('.container');
let nodename = cont.childNodes[2].nodeName;
let nodetype = cont.childNodes[2].nodeType;
console.log(nodename);
console.log(nodetype)
console.log(cont.childNodes);
// console.log(cont.children);

// node type
// 1. element
// 2.attribute
// 3.text node
// 8.comment
// 9.document
// 10.doctype
