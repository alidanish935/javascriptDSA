
const obj ={
    name:'danish',
    roll:23,
    details:function(){
    console.log('hii')
    console.log(this)
    }
}
obj.details()
console.log('out')