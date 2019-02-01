//argument object no longer bound with the arrow function

const add = (a,b) => {
    return a + b;
}

console.log(add(9,2,3));

//this keyword no longer bound with the arrow function

const user = {
    name: 'Bhagyashree',
    cities : ['Mumbai', 'Pune', 'Mysore','Chicago'],
    placesStayed : function(){
        //this.cities.forEach(city =>{
        //    console.log(this.name + ' has lived in '+city);
        //})
        
        const message = this.cities.map((city) => {
            return city + '!!';
        });
        return message;
    }
} 
console.log(user.placesStayed());
console.log(user.cities);

//challenge

const multiplier  = {
numbers : [10, 20, 30],
multiplyBy : 100,
multiply : function(){
    return this.numbers.map((n) => n*this.multiplyBy);
} 
}

console.log(multiplier.multiply());