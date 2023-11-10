//--------------------Without Higher Order Fn----------------------------
const values =[1,2,3,4]

let calculateSum= function(values){
    let sum =0;
    for(let i=0;i<values.length;i++){
        sum = sum+values[i];
    }
    return sum;
}
let calculateMultiplication=(values)=>{
    let mul = 1
    for(let i=0;i<values.length;i++){
        mul = mul*values[i]
    }
    return mul
}

// console.log(calculateSum(values))
//console.log(calculateMultiplication(values))

//--------------------With Higher Order Fn----------------------------

let sum = function(total,value){
    return total+value
}
let mul = function(total,value){
    return total*value
}

let calculate = (values,initialValue,operation)=>{
    let total = initialValue
    for(let i=0;i<values.length;i++){
        total = operation(total,values[i])
    }
    return total
}
// console.log(calculate(values,0,sum))
// console.log(calculate(values,1,mul))

const radius = [1,2,3,4];

let area = function(val){
    return Math.PI*val*val
}
let circumfarnce = (val)=>{
    return 2*Math.PI*val
}
let diameter = function(val){
    return 2*val
}

const calculat=(radius,operation)=>{
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(operation(radius[i]))
    }
    return output;
}
console.log(calculat(radius,area))
console.log(calculat(radius,circumfarnce))
console.log(calculat(radius,diameter))