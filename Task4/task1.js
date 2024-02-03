//How to compare two JSON have the same properties without order?

let obj1 = {
    name: "person 1",
    age:5
};
let obj2 = {
    name: "person 2",
    age: 5
};
let isObjectEquals = true;
if(Object.keys(obj1).length == Object.keys(obj2).length)
{
   for(let key in obj1)
   {
    if(obj1[key] == obj2[key])
    {
     continue;
    }
    else{
          isObjectEquals = false;
          break;
    }
   }
}
else{
    isObjectEquals = false;
}
console.log("Is the objects have same properties? :" + isObjectEquals);
