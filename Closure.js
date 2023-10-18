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

function counter(){
    var count = 0;

    function increamentCounter(){
        count++;
        console.log(count)
    }
 return increamentCounter
}

//console.log(count) due to closure we cant access count here
counter()()
 
































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