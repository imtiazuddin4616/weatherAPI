 document.getElementById("we").innerHTML=va

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((value)=>{
  return value.json();
})
.then ((value)=>{
  console.log(value);
  document.getElementById("we").innerHTML=value.userId;
})