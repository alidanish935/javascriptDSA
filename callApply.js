
// call method is used to invok a fn directly by passing in the refrence which points to this variable inside the method

// const name={
//     firstName:"danish",
//     lastName:"ali"
// }
// const name2={
//     firstName:"Aliza",
//     lastName:"falak"
// }
// let printFullName = function(){
//     console.log(this.firstName," ",this.lastName);
// }
// printFullName.call(name)
// printFullName.call(name2)




//---------------------------------------------------call method if we pass parameter---------------------------------------------
const name={
    firstName:"danish",
    lastName:"ali"
}

const name2={
    firstName:"Aliza",
    lastName:"falak"
}
let printFullName = function(town){
    console.log(this.firstName," ",this.lastName);
}
printFullName.call(name,"koderma")
printFullName.call(name2)





















// const name={
//     firstname:'danish',
//     lastname:'ali'
// }
// const name2={
//     firstname:'Aliza',
//     lastname:'falak'
// }
// let printFullName= function(){
//     console.log(this.firstname," ",this.lastname)
// }
// // printFullName.call(name)


// printFullName.call(name2)
// console.log(typeof null)























// const name = {
//     firstname:"danish",
//     lastname:"ali"
// }
// const name2 = {
//     firstname:"sonu",
//     lastname:"danish"
// }
// let printFullName = function(){
//     console.log(this.firstname+this.lastname)
// }
// printFullName.call(name2)