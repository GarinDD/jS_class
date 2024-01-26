const people = {
    name: ``,
    age: 0,
}

const driver = {...people, name: `Vasya`, age: 33,}
console.log(driver)

function Human(name,age){
    this.name = name,
    this.age = age,
    this.printInfo = () => {
        console.log(`I am ${this.name}, I'm ${this.age}`)
    }
}

const worker = new Human(`Petr`,43)

worker.printInfo()