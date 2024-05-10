// console.log("AJEX in one video ");

// let fetch = document.getElementById('fethbtn');
// fetchbtn.addEventListener('click', btnclickHandler)

// function btnclickHandler() {
//     console.log('you have click the  fetch btn');

//     // instantiate an xmr object
//     const xhr = new XMLHttpRequest();

//     // open the object
//     // xhr.open('GET','harry.txt',true);

//     // post object
//     xhr.open('post','https://dummy.restapiexample.com/api/v1/create', true);

//     // to send url in data
//     xhr.getResponseHeader('content-type', 'application/JSON');

//     // what to do on progress
//     xhr.onprogress = function () {
//         console.log('on progress');
//     }
// // 
//   old method of onload 
//     // xhr.onreadystatechange = function () {
//     //     console.log('ready stage is ', xhr.readyState)
//     // }

//     // what to do on response is ready

//     xhr.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText)
//         } else {
//             console.log("some error accured")
//         }

//     }
//     // send this Request
//     params = '{"name":"test15681","salary":"123","age":"23"}'
    
	

// xhr.send(params);
//         console.log('we are done')
//     }

//     // get is first argument
//     // harry,txt means where the our data comes
//     // true asynk unblocking req
//     // false means 
//     let backup = document.getElementById('populate');
//    populate.addEventListener('click', populateHandler);


//    function populateHandler(){

//     console.log('You have clicked the pop handler');

//  // Instantiate an xhr object
//  const xhr = new XMLHttpRequest();

//  // Open the object
//  xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);


//  // What to do when response is ready
//  xhr.onload = function () {
//      if(this.status === 200){
//          let obj = JSON.parse(this.responseText);
//          console.log(obj);
//          let list = document.getElementById('list');
//          str = "";
//          for (key in obj)
//          {
//              str += `<li>${obj[key].employee_name} </li>`;
//          }
//          list.innerHTML = str;
//      }
//      else{
//          console.log("Some error occured")
//      }
//  }

//  // send the request
//  xhr.send();
//  console.log("We are done fetching employees!");
 

    
//    }




   console.log("Ajax tutorial in one video");


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler()
 {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // xhr.onreadystatechange = function () {
    //     console.log('ready state is ', xhr.readyState);
        
    // }

    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){

            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}

