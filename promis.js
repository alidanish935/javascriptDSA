//promiss is an object representing the eventually completion or failure of an asyncronus operation
function prom(status){
    return new Promise(function(resolve,reject){
        if(status){
            resolve("i am success")
        }else{
            reject("i am rejected")
        }
    })
}


console.log(prom(true))
console.log(prom(false))