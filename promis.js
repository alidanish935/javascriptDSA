// const fetch = require('node-fetch')
// //promiss is an object representing the eventually completion or failure of an asyncronus operation
// function prom(status){
//     return new Promise(function(resolve,reject){
//         if(status){
//             resolve("i am success")
//         }else{
//             reject("i am rejected")
//         }
//     })
// }



// // console.log(prom(true))
// // console.log(prom(false))


// --------------------handling promissess--------------------




// const promis = fetch("https://whatsup-server.onrender.com/users")
// // .then(x=> x.json()).then(data=>console.log(data))
// promis.then(function(x){
//     x.json()
//     console.log(x)
// }).then(function(d){
//     console.log(d)
// })




// --------------------creating  promissess--------------------

// const prom = new Promise(function(resolve,reject){
//     if(!true){
//         resolve('i am resolve')
//     }else{
//         let err = new Error('i am failed')
//         reject(err)
//     }
// })
// prom.then(res=>console.log(res))
// prom.catch(err=>console.log(err.message))
// console.log(prom)

function promis(status){
    const prms = new Promise((resolve,reject)=>{
        if(status){
            resolve('i am resolve')
        }else{
            reject('i am rejected')
        }
    })
    return prms
}
let res = promis(!true)
res.then(x=>console.log(x))
res.catch(err=>console.log(err))
