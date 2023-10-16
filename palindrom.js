const str = "Text contains malayalam and level words"

let arr = str.split(" ")
let ans=[];
let k=0;
for (let i = 0; i < arr.length; i++) {
   const p = isPalindrome(arr[i])
   if(!p){
    ans[k]=arr[i];
    k++;
   }
}
console.log(ans)

function isPalindrome(str1){
    let n = str1.length;
    for (let j = 0; j < n/2; j++) {
        if (str1.charAt(j) !== str1.charAt(n - j - 1)) {
            return false
        }
    }
    return true;
}


