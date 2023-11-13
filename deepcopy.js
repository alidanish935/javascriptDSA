
// // // deep copy 
// //deep copy
//     //all primitives will have deep copy
//     //separate memory address.
//     let fullName = "aliza";
//     let listName = fullName;
//     console.log(fullName);
//     console.log(listName);
//     listName = "falak";
//     console.log(fullName);
//     console.log(listName);


//     // let name = "danish"
//     // let fullname = name
//     // console.log(name)
//     // console.log(fullname)
//     // fullname = "sonu"
//     // console.log(name)
//     // console.log(fullname)// due to saperate memory address only fullname value changes


//     // shallow copy
//     // const arr=["danish","sonu"]
//     // const arr1=arr
//     // console.log(arr,'hiiiiii')
//     // console.log(arr1)
//     // arr1.push("ali")
//     // console.log(arr)
//     // console.log(arr1)



    

//     //array and object will have shallow copy
//     //both variable will refer to same address
//     let indianCity=['delhi','mumbai'];
//     let foreignCity = indianCity;
//     console.log(indianCity);
//     console.log(foreignCity);
//     foreignCity.push('tokyo');
//     console.log(indianCity);
//     console.log(foreignCity);



let obj={
    name:"danish",
    address:{
        city:"koderma",
        dist:"Hazaribagh"
    }
}

let newObj = obj
let newObj1 = {...obj}// 1st way-> make deep copy of 1st level only not to nested level
let newObj2 = JSON.parse(JSON.stringify(obj))//  2nd way-> it work on nested level but ignore func. and date 
// Lodash library is best


// newObj.name = "ali"// due to same memory address name will be ali in obj
// newObj1.name = "Aliza"// due to diff memory address name will not change in obj as we hv make deep copy using destructuring in line 58
// newObj1.address.city = "sariya" //city will change in obj, it is the limitation of making deep copy using destructuring won't work in 
                                    //nested level of obj
newObj2.address.city = "delhi"  // city won't change to delhi 
// newObj2.name = "Pari"

console.log(obj)
// console.log(obj2)