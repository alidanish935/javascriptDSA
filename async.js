
//// async is a keyword used to create async function
//// async function will always return a promise . if return value is not a promise then it will be wrapped inside promise and
//// if returned data is already promise then it will simply return. it won't wrapped inside promise as it is already a promise ,see eg. 2
//----------------example 1---------------------------
// async function data(){
//     return "danish" // as it is string so it will be wrapped inside a promise
// }
// let d = data()
// console.log(d)// will get promis
// data().then(d=>console.log(d))// output danish




// -------------------------example 2--------------------------




// let p = new Promise((resolve,reject)=>{
//     if(true){
//         resolve(' resolved')
//     }else{
//         let err = new Error('failed')
//         reject(err)
//     }
// })

// async function abc(){
//     return p
// }
// abc().then(x=>console.log(x))
// //console.log(abc())  // wont wrap inside promise






// -------------------------handling promise using both async await and .then--------------------------

//await can only be used inside async function

// let p = new Promise(function(resolve,reject){
//     resolve('promise resolved---')
// })
// async function handlingPromis(){
//     const data = await p
//     console.log(data)
// }
// handlingPromis()

// // handled using .then()
// function getData(){
//     p.then(res=>console.log(res))
// }
// //getData()








// -------------------------difference between async await and promise--------------------------

// //example 1
// let pr = new Promise((resolve,reject)=>{
//     setTimeout(function(){

//         resolve('resolved-')
//     },5000)
// })
// // // in async await js engine will wait for promise to resolve(if promise will take time to resolve)
// // const handlingUsingAsync=async()=>{
// //     let res = await pr
// //     console.log('danish') // both danish and resolve will print after 5sec
// //     console.log(res)
// // }
// // handlingUsingAsync()

// // // in promise by using .then() js engine will not wait to resolve promiss
// function handlingUsingPromis(){
//     pr.then(x=>console.log(x))
//     console.log('danish')// danish will print first then after 5sec it will print resolve as js engine will not wait for promise to resolve
// }
// handlingUsingPromis()

//-------------------------------------


//example 2

// let pr = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('resolve')
//     },5000)
// })
// // all 4 log will print after after 5sec
// async function handlingUsingAsync(){
//     let res = await pr
//     console.log('danish 1')
//     console.log(res)

//     let res2 = await pr
//     console.log('danish 2')
//     console.log(res2)
// }

// handlingUsingAsync()

//------------------------------


// example 3

let pr1 = new Promise(function(resolve,reject){
    setTimeout(()=>{

        resolve('resolved-1')
    },8000)
})
let pr2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('resolved-2')
    },5000)
})

const handlingUsingAsync=async()=>{
    let res = await pr1
    console.log('danish-1')
    console.log(res)


    let res2 = await pr2
    console.log('danish-2')
    console.log(res2)
}
handlingUsingAsync()

