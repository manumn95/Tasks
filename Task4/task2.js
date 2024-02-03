//Use the rest country API Url and display all countries flag in the console

let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function()
{
   let countries = JSON.parse(xhr.responseText);
   for(let index in Object.keys(countries))
   {
    console.log(countries[index].flag);
   }
}