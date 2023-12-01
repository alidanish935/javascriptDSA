// // // callback fn

// // function abc(callback){
// //     console.log('calling abc')
// //     callback()
// // }
// // function xyz(){
// //     console.table('calling callback---')
// // }
// // abc(xyz)

// // higher order fn

// const radius = [1,2,3,4];
// const area = (val)=>{
//     return Math.PI*val*val
// }
// const circum = (val)=>{
//     return 2*Math.PI*val
// }
// const diameter = function(val){
//     return 2*val
// }

// const calculate = function(radius,operation){
//     let output = [];
//     for(let i=0;i<radius.length;i++){
//         output.push(operation(radius[i]))
//     }
//     return output
// }
// console.log(calculate(radius,area))
// console.log(calculate(radius,diameter))



let s = "is2 sentence4 This1 a3";
let a = s.split(" ");
console.log(a)