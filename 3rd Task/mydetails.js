class Person{
    constructor(name, qualification, age, dob, Skill, hobbies ){
        this.name=name
        this.qualification=qualification
        this.age=age
        this.dob=dob
        this.Skill=Skill
        this.hobbies=hobbies
       
    }
    getpersons2(){
       return(`the details of person2 is ${this.name}, ${this.qualification}, ${this.age}, ${this.Skill}, ${this.hobbies}`)
    }
    setpersons2(age1){
        this.age=age1
    }
   
    getpersons3(){
        return(`the details of person3 is ${this.name}, ${this.qualification}, ${this.age}, ${this.Skill}, ${this.hobbies}`)
    }
    setpersons3(hobbies1){
        this.hobbies=hobbies1
    }
    // getArea(){
    //     return(`the Area of the circle is ${this.double*this.double*3.14}`)
    // }
    // getCircumference(){
    //     return(`the Circumference of the circle is ${this.double*2*3.14}`)
    // }
}

const person1 = new Person("Ajith","Bsc",24,"24-9-1998","web Developer","book Reading")
const person2 = new Person("Ajay","Bsc",24,"29-01-1999","mobile app Developer","video gaming")
const person3 = new Person("sakthi","BE",25,"27-6-1998","Cadd","House farming")
person2.setpersons2(22)
person3.setpersons3("cycling")
// circle2.setradius("Green")

console.log(person1)
console.log(person2.getpersons2())
console.log(person3.getpersons3())
