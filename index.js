

// let a=10;
// var ab = 9;
// abc()


// function abc(){
//     console.log('fun declaration')
// }

// let abcd = function (){
//     console.log('fun expression',c)

// }
// abcd()


// a=undefined


// let a =4;
//nnssbbu->number null string symbols boolean bigInt undefine  ->primitive data type -> hold single value and immutable
//obj arr date fn

// String str = danish
// StringBuilder sb = new StringBuilder("danish")


// const abc=(callback)=>{
//     console.log('abc---')
//     return callback
// }
// const xyz =()=>{
//     console.log('callback---')
// }

// let x = abc(xyz)()
// x()




// let arr=[1,2,3,4]

// const sum = (total,radius)=>{
//     return total+radius
// }
// // const diameter = (radius)=>{
// //     return 2*radius
// // }

// function calculate(arr,initialVal,operation){
//     let total = initialVal
//     for(let i=0;i<arr.length;i++){
//         total=operation(total, arr[i])
//     }
//     return total
// }
// console.log(calculate(arr,0,sum))
// // console.log(calculate(arr,diameter))





// let str = new String('danish')
// console.log(str)


// function a(callback){
//     console.log('a')
//     return callback
// }
// function b(callback){
//     console.log('b')
//     return callback
// }
// function c(callback){
//     console.log('c')
//     return callback
// }
// function d(){
//     console.log('d')
// }


// a(function(){
//     b(function(){
//         c(function(){
//             d()
//         })()
//     })()
// })()


// const promiseFn =()=>{
//     let promi = new Promise(function(resolve,reject){
//         let condition =true;
//         if(!condition){
//             resolve('resolved--')
//         }else{
//             // let err = new Error('rejected---')
//             reject('rejected')
//         }
//     })
//     return promi
// }
// const promiseFn1 = ()=>{
//     return 
// }

// promiseFn().then(x=>console.log(x)).catch(err=>console.log(err))







let promi = new Promise(function(resolve,reject){
            setTimeout(()=>{
                resolve('resolved--')
            },4000)          
        })
// let promi2 = new Promise(function(resolve,reject){
//             setTimeout(()=>{
//                 resolve('resolved--')
//             },8000)   
//         })



 async function ab(){
    let pr = await await promi
    console.log(pr)
    setTimeout(()=>{
        
        console.log('danish')
    },8000)
 }
 ab()

        // function abc(){
        //     promi.then(x=>console.log(x))
        //     console.log('danish---')
        // }
        // abc()




        setTimeout(()=>{
        
            console.log('danish')
        },5000)

        let startTime = new Date().getTime()

        let endTime = startTime

        while(startTime<=endTime+10000){
            endTime=new Date().getTime()
        }
        console.log('concurrency-')








// const area = (radius)=>{
//     return Math.PI*radius*radius
// }
// const diameter = (radius)=>{
//     return 2*radius
// }

// function calculate(arr,operation){
//     let output = [];
//     for(let i=0;i<arr.length;i++){
//         output.push(operation(arr[i]))
//     }
//     return output
// }
// console.log(calculate(arr,area))
// console.log(calculate(arr,diameter))


















// function area(arr){
//     let output = [];
//     for(let i=0;i<arr.length;i++){
//         output.push(Math.PI*arr[i]*arr[i]);
//     }
//     return output
// }
// function diameter(arr){
//     let output = [];
//     for(let i=0;i<arr.length;i++){
//         output.push(2*arr[i]);
//     }
//     return output
// }
// function circum(arr){
//     let output = [];
//     for(let i=0;i<arr.length;i++){
//         output.push(2*3.14*arr[i]);
//     }
//     return output
// }
// console.log(area(arr))
// console.log(diameter(arr))
// console.log(circum(arr))