// Hoisting is a concept that enable us to extract the value of variable and func even before its initialisation.

console.log(x)
abc()
ab()
function abc(){
    console.log('hoisting---')
}

const ab=()=>{
    console.log('arrow func')
}

var x=4;