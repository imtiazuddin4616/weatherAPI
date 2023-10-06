fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((value)=>{
  return value.json()
})
.then ((value)=>{

  document.getElementById("me").innerHTML=value.id;
  document.getElementById("im").innerHTML=value.title;
  document.getElementById("we").innerHTML=value.userId;
  console.log(value);
})