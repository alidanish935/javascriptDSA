// const fetch = require("node-fetch");
// console.log('start');
// setTimeout(function cbT(){
//     console.log('cbT setTimeout')
// },1000)
// fetch("https://whatsup-server.onrender.com/users")
// .then(function cbF(){
//     console.log('cbF Netflix')
// })

// console.log('end')

const fetch = require("node-fetch");
console.log('start');
setTimeout(function cbT(){
    console.log('cbT setTimeout')
},1000)
fetch("https://whatsup-server.onrender.com/users")
.then(x =>x.json()).then(data=>console.log(data[0].email))

console.log('end')
// this is only for comparision b/w .then and async await
// async function getText(file) {
//     let x = await fetch(file);
//     let y = await x.text();
//     myDisplay(y);
//   }