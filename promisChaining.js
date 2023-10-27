// Promise chaining is a technique in java Script which execute multiple asynchronous operations in sequence

// function doSomething(){
//     const pr = new Promise(function(resolve,reject){
//         if(true){
//             resolve('doSomething')
//         }else{
//             reject('doSomething-----')
//         }
//     })
//     return pr
// }
// function doSomethingElse(){
//     const pr = new Promise((resolve,reject)=>{
//         resolve('doSomethingElse')
//     })
//     return pr
// }
// function doSomethingExtra(){
//     const pr = new Promise((resolve,reject)=>{
//         if(!true){
//             resolve('doSomethingExtra')
//         }else{
//             reject('doSomethingExtra rejected---')
//         }
//     })
//     return pr
// }

// doSomething().then(doSomethingElse).then(doSomethingExtra).then(x=>console.log(x)).catch(err=>console.log(err))

// -------------------------------------2nd Example ----------------------------------------
function criticalWork(){
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('criticalWork----')
        }else{
            let err = new Error('level1 rejected--')
            reject(err)
        }
    })
}
const mostImpWork =()=>{
    const pr = new Promise(function(resolve,reject){
        if(true){
            resolve('mostImpWork done')
        }else{
            let err = new Error('mostImpWork rejected--')
            reject(err)
        }
    })
    return pr
}
function impWork(){
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('impWork done-')
        }else{
            let err = new Error('impWork rejected-')
            reject(err)
        }
    })
}
function necessaryWork(){
    const pr = new Promise(function(resolve,reject){
        if(!true){
            resolve('necessaryWork done')
        }else{
            let err = new Error('necessaryWork rejected')
            reject(err)
        }
    })
    return pr
}

criticalWork().then(mostImpWork).then(impWork).then(necessaryWork).then(x=>console.log(x)).catch(err=>console.log(err.message))






























// function doSomething() {
//     return new Promise((resolve, reject) => {
//         resolve('hello world');  
//     });
//   }
  
//   function doSomethingElse(result) {
//     return new Promise((resolve, reject) => {
//         resolve(result + '!');
//     });
//   }
  
//   doSomething()
//     .then(doSomethingElse)
//     .then((result) => {
//       console.log(result);
//     });