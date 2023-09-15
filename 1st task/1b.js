class Movie{
    constructor(title, Studio, Rating){
        this.tile=title
        this.Studio=Studio
        if (Rating==null){
            return this.Rating="pg"
        }
        else{
            return this.Rating=Rating
        }
       
    }
}
const movie1 = new Movie("vidamuyarchi","Studio Green","7.8p")
const movie2 = new Movie("Leo","Lyca","9.8p")
const movie3 = new Movie("Leo","Lyca")

console.log(movie1)
console.log(movie2)
console.log(movie3)