// Suppose we have some peace of code and after that we have a setTimeout fn for 5 sec and after that we have millions of code which will
// take 10sec to execute .so in this case setTimeout will execute after 10sec bcz main thread was busy on executing code present in 
//Global Execution Context and in the mean-while setTimeout will be waiting on callback queue,this is known as concurrency in js .

console.log('start--')

setTimeout(function(){
    console.log('callback--')
},5000)

console.log('end')

let startdate = new Date().getTime()
let endDate = startdate
while(endDate<=startdate+7000){
    
    endDate = new Date().getTime()

}
console.log('concurrency----')
// output will be first -> start --> end --> (after 7sec) concurrency --> callback  
// callback will print in last as our main thread was busy on while loop for 7sec 





































// console.log('start--')

// setTimeout(function(){
//     console.log('callback--')
// },5000)

// console.log('end')
// for(let i=0;i<10;i++){
//     setTimeout(function(){

//         console.log(i)
//     },i*1000)
// }
// console.log('darain')