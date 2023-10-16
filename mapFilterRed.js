// const productList=[
//     {
//         name:'samsung',
//         specification:'12gb',
//         color:'red',
//         amount:20000,
//         discount:0,
//         available:true
//     },
//     {
//         name:'sony',
//         specification:'12gb',
//         color:'red',
//         amount:50000,
//         discount:0,
//         available:false
//     },
//     {
//         name:'mx',
//         specification:'52gb',
//         color:'red',
//         amount:10000,
//         discount:0,
//         available:true
//     }
// ];

// const res = productList.filter((obj)=>{
//     return obj.available === true
// }).map((item)=>{
//     return item.amount
// }).reduce((a,b)=>{
//     return a+b
// })
// console.log(res)












// // let result = productList.filter((obj)=>{
// //           return obj.available === true;
// // })
// // .map((obj)=>{
// //     return obj.amount;
// // })
// // .reduce((a,b)=>{
// //   return a+b;
// // })
// // .toString();
// // console.log(result);









// Write a function which generates a promise which randomly gets success or failure.





//  function rest(a,b,...arr){
//     console.log('hiii',arr,'a',a,'b',b)
//  }
//  rest(1,2,3,4,5,6)


// function spread(...arr){
//     console.log('hiii',arr)
//  }
//  let arr = [5,6,7]
//  let arr1=[1,2,3]

 
// //  spread(...arr)// 1, 2,3

// let arr2 = [...arr,...arr1]
// // function abc(){
    
//     console.log(arr2)
// // }

// let a=13;
// let b=15;
// let c=12;
// c>a?console.log(a):console.log(b)

// var plusOne = function(digits) {
//     let num =digits.join("")
//     const conv = BigInt(num)+BigInt(1)
//     // console.log('conv',conv)
//     // console.log('num',num,typeof(num))
//      let text = conv.toString().split("");
//      const res = text.map((item)=>Number(item))
//     //  console.log('text',text)
//      console.log('res',res)
//      return res
//  };
// plusOne([4,3,2,1,9])


// [9]
// // [1,2,9]
// // [4,3,2,1,9] [4,3,2,2,0]
// // digits[i]=0
// // [1,2,0]
// for (int i = digits.length - 1; i >= 0; i--) {//
// 	if (digits[i] < 9) {
// 		digits[i]++;
// 		return digits;
// 	}
// 	digits[i] = 0;
// }

// digits = new int[digits.length + 1];
// digits[0] = 1;
// return digits;

// var merge = function(nums1, m, nums2, n) {
//     const arr = [];
//     for(let i=0;i<m;i++){
//         arr.push(nums1[i])
//     }
//     for(let i=0;i<n;i++){
//         arr.push(nums2[i])
//     }
//     arr.sort((a,b)=>a-b)
//     console.log(arr)
//     return arr
// };
// merge([1,2,3,0,0,0],3,[2,5,6],3)

// var x = 10;
// function m() {
    
//     console.log("x:: at the start is: ", x);
//     var x = 20;
//   console.log("x:: at the end is: ", x);
// }
// m();

let a = 'danish'
let b = 'danos'
console.log(a.includes(b))
