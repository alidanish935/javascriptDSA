const fetch = require('node-fetch')
//promiss is an object representing the eventually completion or failure of an asyncronus operation
function prom(status){
    return new Promise(function(resolve,reject){
        if(status){
            resolve("i am success")
        }else{
            reject("i am rejected")
        }
    })
}


// console.log(prom(true))
// console.log(prom(false))
const promis = fetch("https://whatsup-server.onrender.com/users")
// .then(x=> x.json()).then(data=>console.log(data))
promis.then(function(x){
    x.json()
    console.log(x)
}).then(function(d){
    console.log(d)
})