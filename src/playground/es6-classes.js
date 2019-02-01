class Person{
    constructor(name ='Anonymous', age =0){
        this.name=name;
        this.age = age;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old!`;
    };

    getGreeting(){
        return `Hi! I am ${this.name}.`
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation = 'Nowhere'){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.hasHomeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()){
            greeting = greeting + " am travelling from "+this.homeLocation;
        }
        return greeting;
    }
}
const p1 = new Person('Bhagyashree', 25);
const p2 = new Person();

const t1 = new Traveler("Bhagyashree", 25, "Mumbai");
const t2 = new Traveler();

console.log(t1.getGreeting());
console.log(t2.getGreeting());