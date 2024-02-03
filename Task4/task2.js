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
    console.log("Country Code:" +countries[index].flag);
    console.log("png file:" +countries[index].flags['png']);
    console.log("svg file:" +countries[index].flags['svg']);
    console.log('--------------------------------------------------');
   }
}