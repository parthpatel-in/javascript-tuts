console.log("Asynchronous Programming?");


// for (let index =  index < 4000; index++) {
// const element= index;
// console.log("this is index number"+ index);
// }
// console.log('done printing')
console.log("This is tutorial 34");

setTimeout(() => {
    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log("This is index number" + index);
        
    }
}, 100);



console.log('done printing');