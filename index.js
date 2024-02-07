   //Do the below programs in anonymous function & IIFE

//1.Print odd numbers in an array using anonymous function


let array1 = [1,5,3,9];
let array2 = [2,6,4,8];

let palindrome = function(value1,value2)
{
    let sort1 = array1.sort();
    let sort2 = array2.sort();
    let merge = sort1.concat(sort2);
    if(merge.length%2 == 0)
    {
        return ((merge[merge.length/2] + merge[merge.length/2-1]));
    }
    else{
        return merge[Math.floor(merge.length/2)]
    }
}
console.log(palindrome(array1,array2));





