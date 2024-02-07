let resume = {
    name:'Manu MN',
    DOB:25/11/1995,
    email:'manumnofficial.95@gmail.com',
    qualification:'B.E(CSE)',
    expeerience:'fresher',
    skills:['html','css','javascript'],
    hobbies:['playing cricket','Reading books','Listening songs']
}

//Iterate using for-loop
let keys = Object.keys(resume);
console.log(keys);
for(let x=0;x<keys.length;x++)
{
    let values = resume[keys[x]];
    console.log('The',keys[x],'is',values);
}

//Iterate using for-in

for(let index in resume)
{
    console.log('The',index,'is',resume[index]);
}

//Iterate using for-of

for(let[key,value] of Object.entries(resume))
{
    console.log('The',key,'is',value);
}

//Iterate uisng for each


keys.forEach(key => {
    console.log('The',key,'is',resume[key]);
});
