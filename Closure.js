// function x(){
//     var a=4
//     function y(){
//         console.log(a)
//     }
//      return y
// }
//  var a =x();
// //  let a=10
// a()


// // here we can access count variable any where in code but if create closure (illustrated below)
// var count = 0;

// function increamentCounter(){
//     count++;
// }
// increamentCounter()
// console.log(count)

// function counter(){
//     var count = 0;

//     function increamentCounter(){
//         count++;
//         console.log(count)
//     }
//  return increamentCounter
// }

// //console.log(count) due to closure we cant access count here
// counter()()

function Counter(){
    var count = 0;
    this.increaseCounter = function(){
        count++;
        console.log(count)
    }
    this.decreaseCounter = function(){
        count--;
        console.log(count)
    }
}
var counter1 = new Counter()
counter1.increaseCounter()
counter1.increaseCounter()
counter1.decreaseCounter()
 

// function a(){
//     var x=19;
//     function b(){
//         console.log(x)
//     }
//     return b
// }
// a()()































// function abc(outer_num){
//     function innerabc(inner_num){
//         return outer_num + inner_num;
//     }
//     return innerabc;
// }
// // var resp=abc(5);
// // console.log(resp(4));










// function outerabc(a){
//     function innerabc(b){
//         return a+b;
//     }
//     return innerabc
// }
// let res = outerabc(5)
// console.log(res(3))