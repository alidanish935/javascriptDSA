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























const name = {
    firstname:"danish",
    lastname:"ali"
}
const name2 = {
    firstname:"sonu",
    lastname:"danish"
}
let printFullName = function(){
    console.log(this.firstname+this.lastname)
}
printFullName.call(name2)