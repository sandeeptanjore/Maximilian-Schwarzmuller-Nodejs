//Destructuring

const person = {
    name : 'Maximilian Schwarzmuller',
    age: 29,
    country: 'Germany',
    greet(){
        console.log('Hi, I am ' + this.name + '!');
    }
};

const printName = ({name, age, country})=>{
    console.log(name, age,country);
}

printName(person);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby2,hobby1);