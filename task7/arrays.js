let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function()
{
    let response = JSON.parse(xhr.responseText);

//1.Get all the countries from Asia continent /region using Filter function

    let asia = response.filter((con)=>
    {
        if(con.region == 'Asia')
        {
            console.log(`${con.name['common']} is an Asian continent`);
        }
    });
    
    console.log(asia);
console.log("----------------------------------------------------------------------");
    //2.Get all the countries with a population of less than 2 lakhs using Filter function

    let population = response.filter((pop)=>
    {
        if(pop.population > 200000)
        {
            console.log(`${pop.name['common']} have ${pop.population}`);
        }
    });
    console.log(population);
    console.log("----------------------------------------------------------------------");

    //3.Print the following details name, capital, flag, using forEach function
 let details = response.forEach(element => {
    console.log(`The country Name is:${element.name['common']},The Capital is ${element.capital},The flag is ${element.flag}`);
 });
 console.log(details);
console.log("-----------------------------------------------------------------------------");

//Print the total population of countries using reduce function

let totalPopulation = response.map((val)=> val.population).reduce((pre,curr)=>  pre + curr);
   console.log(`The total population is ${totalPopulation}`);

console.log("--------------------------------------------------------------------------------");

//Print the country that uses US dollars as currency.

// let currency = response.filter((val)=>
// {
//     console.log(val.currencies['DOP']);
   
// })
// console.log(currency);
const datas = response
.filter((item) => item?.currencies?.USD)
.map((value) => value.name['common']);
console.log('USD Currency Countries', datas);
} 

 


