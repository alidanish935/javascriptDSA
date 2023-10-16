


let arr=[];

const getArr=()=>{
    console.log('arrr start - ',arr)
}

const addfn =()=>{
    arr.push(1234);
    console.log("arr--",arr)//1234
}
console.log("arr22--",arr)//[]
const callFn=()=>{

    addfn()
    console.log("arr33--",arr)//1234
}
console.log("arr44--",arr)//[]
callFn()
getArr()
console.log("arr55--",arr)//1234
