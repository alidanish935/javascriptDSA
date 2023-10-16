let list=[34,45,66,33,223];
// let sum =0;
// for(let obj of list){
//     sum +=obj
// }
// console.log(sum)

const res = list.reduce((a,b)=>{
    return a+b;
},100)
console.log(res)