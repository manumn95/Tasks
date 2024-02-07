//write a person class to hold all the details

class Person{
    constructor()
    {
        this.name='John',
        this.DOB='25/11/1991',
        this.qualification='B.E',
        this.experience = 'fresher'
    }
    getBasicDetail()
    {
        console.log(`The name is ${this.name}`)
        console.log(`The D.O.B is ${this.DOB}`)
    }
    getAcademic()
    {
        console.log(`Qualification is ${this.qualification}`);
        console.log(`Experience is ${this.experience}`);
    }
    getHobbies(hobbies)
    {
        console.log(`The hobbies are ${hobbies}`);
    }
}
let person1 = new Person();
person1.getBasicDetail();
person1.getAcademic();
person1.getHobbies(['Reading','Listening songs']);