// Promise chaining is a technique in java Script which execute multiple asynchronous operations in sequence

function doSomething(){
    const pr = new Promise(function(resolve,reject){
        resolve('hello world')
    })
    return pr
}
function doSomethingElse(){
    const pr = new Promise((resolve,reject)=>{
        resolve('hiii')
    })
}

doSomething().then(doSomethingElse)






























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