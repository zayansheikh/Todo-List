var a = [];
function save() {
  var todo = document.getElementById("todo").value;
  todo = todo.charAt(0).toUpperCase() + todo.slice(1);
  var email = document.getElementById('day').value
  email = email.charAt(0).toUpperCase() + email.slice(1);
  
  if (todo == "") {
    alert("Enter Task..")
  }
  else if(email == ""){
    var con = confirm("Are you sure you want save with day")
    if(con == true){
      var obj = {
        todolist: todo,
        uEmail: email
      };
      a.push(obj);
      localStorage.setItem("task-list", JSON.stringify(a));
    }
    // alert("Enter day..")
  } 
  else{
    var obj = {
      todolist: todo,
      uEmail: email
    };
    a.push(obj);
    localStorage.setItem("task-list", JSON.stringify(a));
    // alert("Save to local storage")
    // return
  }
}
function get() {
  var get = JSON.parse(localStorage.getItem("task-list"));
  var table = "<tr><th class='fs-5'>Task<hr></th><th class='fs-5'>Day<hr></th></tr>";
  for (let i = 0; i < get.length; i++) {
    table +=
      "<tr><td>" +
      get[i].todolist+ "</td><td>" + get[i].uEmail +"</td><td><button type='button' class='deletebtn btn-outline-warning' onclick='deleteitem(" +
      i +
      ")'>Delete</button></td></tr>";
  }
  document.getElementById("table-id").innerHTML = table;
}
function deleteitem(index) {
  var get = JSON.parse(localStorage.getItem("task-list"));
  get.splice(index, 1);
  localStorage.setItem("task-list", JSON.stringify(get));
  location.reload();
}
get();
