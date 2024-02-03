//print all country name,regions,sub-region and populations

let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function()
{
    let response = JSON.parse(xhr.responseText);
    for(let index in Object.keys(response))
    {
        console.log("The Country Name  is: "+response[index].name['common'] );
        console.log("The region is: "+response[index].region);
        console.log("The sub-region is: "+response[index].subregion);
        console.log("The population is: "+response[index].population);
        console.log('------------------------------------------------------------------');
    }
}