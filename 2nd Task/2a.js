class Circle{
    constructor(radius, color){
        this.double=radius
        this.string=color
       
    }
    getRadius(){
        return(`the radius of circle is ${this.double}`)
    }
    setradius(double1){
        this.double=double1
    }
    setcolor(color1){
        this.string=color1
    }
    getcolours(){
        return(`the colour of the circle is ${this.string}`)
    }
    getArea(){
        return(`the Area of the circle is ${this.double*this.double*3.14}`)
    }
    getCircumference(){
        return(`the Circumference of the circle is ${this.double*2*3.14}`)
    }
}

const circle1 = new Circle(1.6,"yellow")
const circle2 = new Circle(2.6,"red")
circle1.setradius(5.6)
circle2.setradius("Green")

console.log(circle1.getRadius())
console.log(circle2.getcolours())
console.log(circle1.getArea())
console.log(circle1.getCircumference())