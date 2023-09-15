class Uber{
    constructor(Distance, Waitingtime, Rpk, sedanrate, minirate){
        this.Distance=Distance
        this.Waitingtime=Waitingtime
        this.Rpk=Rpk
        this.sedanrate=sedanrate
        this.minirate=minirate
        
       
    }
    getridedetails(){
       return(`the distance of rider is ${this.Distance}Km with waitingtime of ${this.Waitingtime}Ms with rpk  ${this.Rpk}/- for sedan is ${this.sedanrate}/-`)
    }
   
    getprice(){
        if (this.Waitingtime > 6){
            const wtime= this.Waitingtime - 5
            const actualrate= (this.Distance * this.rpk) + (6 * wtime)
            return ("the actual rate of rider2 is", actualrate)
        }
        else{
            return(`the price uberride for rider2 is ${this.Distance * this.Rpk} `)
        }
        
    }
    setRider3sedan(sedrate){
        this.sedanrate=sedrate
    }
    getrider3sedan(){
        return(`the price uberride for rider3 is ${this.Distance * this.sedanrate} `)
    }
    getrider4mini(){
        return(`the price uberride for rider4 mini is ${this.Distance * this.minirate} `)
    }
    setRider4mini(minrate){
        this.minirate=minrate
    }
}

const rider1 = new Uber(15,10,25,50)
const rider2 = new Uber(18,10,25,50)
const rider3 = new Uber(30,10,15,35,30)
const rider4 = new Uber(30,10,15,35,30)
rider3.setRider3sedan(50)
rider4.setRider4mini(35)
console.log(rider1.getridedetails())
console.log(rider2.getprice())
console.log(rider3.getrider3sedan())
console.log(rider3.getrider4mini())
console.log(rider4.getrider4mini())