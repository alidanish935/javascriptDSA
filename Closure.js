function x(){
    var a=4
    function y(){
        console.log(a)
    }
     return y
}
 var a =x();
//  let a=10
a()
 
































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