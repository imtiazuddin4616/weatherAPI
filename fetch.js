// let p =fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((value1) =>{
//   return value1.json()
// })
// .then((value2)=>{
//   console.log(value2)
// })


// fetch("https://goweather.herokuapp.com/weather/Ny")
// .then((value)=>{
//   return value.json()
// })
// .then((value)=>{
//   console.log(value);
// })

// fetch("https://goweather.herokuapp.com/weather/Ny")
// .then ((Res)=>{
//   return Res.json()
// })
// .then((res)=>{
//   console.log(res);
// })

fetch("https://api.nationalize.io/?name=nathaniel")
.then((value)=>{
  return value.json()
})
.then ((value)=>{
  document.getElementById("we").innerHTML=value.name;
  document.getElementById("me").innerHTML=value.count;

  console.log(value);
})