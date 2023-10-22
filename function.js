var x=1;
a()
b()
console.log(x)

function a(){
    var x =10;
    console.log(x)
}
function b(){
    var x =100;
    console.log(x)
}

//whenever js run program first of all a global execution context is created it has two components 
// memory and code and also a call stack is created and global execution context is push in the call stack
// and before running a single code first of all it assign memory to variables and 
//function and then execution of code started and it assigns values to the variables and whenever 
//it found fun it created a new execution context which is completely independent and again push exection context in call stack which is fun a 