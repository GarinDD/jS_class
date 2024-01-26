const people = {
    name: ``,
    age: 0,
}

const driver = {...people, name: `Vasya`, age: 33,}
console.log(driver)

function human(name,age){
    this.name = name,
    this.age = age,
    this.printInfo = () => {
        console.log(`I am ${this.name}, I'm ${this.age}`)
    }
}

const worker = new human(`Petr`,43)
const user = new human(`Igor`,24)

worker.printInfo()
user.printInfo()

let num = 1.34513
console.log(num.toFixed(0)) 
// 0 digits after . => 1.34513 => 1

let arr = [5,6,7,10,3]


console.log(Math.max(...arr))


let h = `Hello World!`

console.log(h.indexOf(`ll`,2))