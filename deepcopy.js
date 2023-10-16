
// // deep copy 
//deep copy
    //all primitives will have deep copy
    //separate memory address.
    let fullName = "aliza";
    let listName = fullName;
    console.log(fullName);
    console.log(listName);
    listName = "falak";
    console.log(fullName);
    console.log(listName);


    // let name = "danish"
    // let fullname = name
    // console.log(name)
    // console.log(fullname)
    // fullname = "sonu"
    // console.log(name)
    // console.log(fullname)// due to saperate memory address only fullname value changes


    // shallow copy
    // const arr=["danish","sonu"]
    // const arr1=arr
    // console.log(arr,'hiiiiii')
    // console.log(arr1)
    // arr1.push("ali")
    // console.log(arr)
    // console.log(arr1)



    

    //array and object will have shallow copy
    //both variable will refer to same address
    let indianCity=['delhi','mumbai'];
    let foreignCity = indianCity;
    console.log(indianCity);
    console.log(foreignCity);
    foreignCity.push('tokyo');
    console.log(indianCity);
    console.log(foreignCity);

