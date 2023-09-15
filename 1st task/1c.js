class Movie{
    constructor(title, Studio, Rating){           
        this.title=title
        this.Studio=Studio
        this.Rating=Rating
        
    }
    getPG() 
        {
            
            return(`the movie name ${this.title} and the rating is ${this.Rating}`)
        }
}

let movie1 = new Movie ("leo","dream Warriors","PG")
let movie2 = new Movie ("Jailer","Sun Pictures","8.0p")

console.log(movie1.getPG())
console.log(movie2.getPG())
