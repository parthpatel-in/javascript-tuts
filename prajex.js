console.log("practice ajex ");

let fetchbtn = document.getElementById("fetchbtn");
fetchbtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have click the fetch btn");

  //     // instantiate an xmr object
  const xhr = new XMLHttpRequest();

  // open the object
  // xhr.open('Get','data.json',true)
  // xhr.open('Get','https://jsonplaceholder.typicode.com/todos/1',true)
  // use this for post request
  xhr.open("post", "https://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader("Content-type", "application/json");

  // what to do on progress  ex jya sudhi onload function call na thay tya sudhi tame loading spinner dekhadi sako cho

  xhr.onprogress = function () {
    console.log("on progress");
  };
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else {
      console.log("some error occurs");
    }
  };
  params = `{
    "name": "test1",
    "salary": "123",
    "age": "23",
    "id": 251
}`;
  xhr.send(params);
  // first  this log print  its does not block because i  set the async to true
  console.log("we are done");
}

let popbtn = document.getElementById("popbtn");
popbtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("you have click the popbtn");

  const xhr = new XMLHttpRequest();

  xhr.open("Get", "https://dummy.restapiexample.com/api/v1/employees", true);

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      for (key in obj) {
        str += `<li >${obj[key].employee_name} </li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };
  xhr.send();
  console.log("we done using fetching employees");
}
