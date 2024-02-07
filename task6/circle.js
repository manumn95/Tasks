class Circle
{
    constructor(radius=1.0,string='red')
    {
        this.radius=radius;
        this.string = string;
    }
    getRadius()
    {
        return this.radius*this.radius;
    }
    setRadius(radius)
    {
        console.log(`The radius is ${radius}`);
    }
    getColor()
    {
        console.log(`The color is ${this.string}`);
    }
    setColor(colour)
    {
        console.log(`New color is ${colour}`);
    }
    toString()
    {
        console.log(`The radius is ${this.radius} and the color is ${this.string}`)
    }
    getArea()
    {
       let area= 3.14*this.radius*this.radius;
       console.log(`The area of circle is ${area}`);
    }
    getCircumference()
    {
        let circum =  2*3.14*this.radius;
        console.log(`The circumference is ${circum}`)
    }
}
let shape = new Circle();
shape.getRadius();
shape.setRadius(2.1);
shape.getColor();
shape.setColor('green');
shape.toString();
shape.getArea();
shape.getCircumference();