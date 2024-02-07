//calculate the uber price

class Uber
{
  constructor()
  {
    this.totalKm = 0;
    this.minFare = 50;
    this.maxFare = 100;
    this.start = false;
  }

  getRide(ride,km)
  {
    if(ride)
    {
        this.start = true;
    }
    else{
        console.log('Fetching rides.......');
    }
    if(this.start == true)
    {
        console.log("Your ride starts");
        if(km <= 5)
        {
            console.log(`Your ride is in between 5km and your pay is ${this.minFare}rs`);
        }
       else if(km>=50)
       {
        this.totalKm =km*this.maxFare;
        console.log(`Distance is ${km} km`);
        console.log(`Your total fare is ${this.totalKm}rs`);
       }
       else
       {
        this.totalKm =km*this.minFare;
        console.log(`Distance is ${km} km`);
        console.log(`Your total fare is ${this.totalKm}rs`);
       }
    }
  }
}
let rides = new Uber();
rides.getRide(true,5);