fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((value)=>{
  return value.json()
})
.then((value)=>{
  document.getElementById("id").innerHTML=value.id;
  document.getElementById("user").innerHTML=value.userId;
  document.getElementById("title").innerHTML=value.title;
  console.log(value);
})