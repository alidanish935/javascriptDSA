// // first class function
// // function which return some value and which can be use later as a variable known as first class function
// function square(a){
//     return a*a
// }
// let res =square(4)
// console.log(res)
// let result = res+20
// console.log(result)

// callBack function
// a function which is passed inside a function as a parameter and can be reused accordingly
function abc(name,callBack){
    console.log(hiiii,{name})
    callBack()
}
function xyz(){
    console.log('calling callback...')
}
// abc("danish",xyz)

// HOF
// function those return function or takes parameter as a function
    