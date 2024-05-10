console.log("fetch api");

let mybtn = document.getElementById("mybtn");
let conatent = document.getElementById("content");

// // get req
function getdata() {
  console.log("started getdata");
  url = "https://api.github.com/users";
   
  fetch(url)
    .then((response) => {
      console.log("inside first then ");
      return response.json();
    })
    .then((data) => {
      console.log("inside second then");
      console.log(data);
    });
}

console.log("before running get data");
// getdata();
console.log("after running getdata");

//  before and after print early and  first and last then print lastly because of it is fetch (asychronus) goes to backround running
// post req

function postdata() {
  console.log("started getdata");
  url = "https://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"parth","salary":"123","age":"23"}';
  params = {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: data,
  };

  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

postdata()
/*how to use fetch api tips by cwh, remember how to use fetch api

(1) ek baar 1st then me response.txt lana hai 
(2)or seocnd then me data

learn js how its work*/
