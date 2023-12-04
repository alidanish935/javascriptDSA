// A function which is passed inside another fn as an argument is known as callback function.
function abc(name,callback){
    console.log('hiii','---',name)
    callback()
}
function xyz(){
    console.log('calling callback')
}
abc('danish',xyz)






// //------------------------------call back as setTimeOut
// setTimeout(function (){
//     console.log('hii there--')
// },1)
// xyz('Danish')
// function xyz(name){
//     console.log('hii ',name)
// }




//-------------------------------------------------------------------

// function abc(callback){
//     console.log('hii Danish')
//     callback()
// }
// function xyz(){
//     console.log('calling callback--')
// }
// abc(xyz)

//-------------------------------------------------------------------

// setTimeout(function(){
//     console.log('will call you back--')
// },1000)
// xyz('Danish')

// function xyz(name){
//     console.log('hii ',name)
// }


//-------------------------------------------------------------------
function doSomething(callback){
    console.log('doing something---')
    callback()
}
function doSomethingElse(){
    console.log('doSomethingElse--------')
}
doSomething(doSomethingElse)