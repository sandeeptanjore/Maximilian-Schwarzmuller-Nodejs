const person = {
    name : 'Maximilian Schwarzmuller',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name + '!');
    }
};

person.greet();

const hobbies = ['sports', 'cooking', 1, true, {
    sport: 'Cricket',
    ground: 'MCG',
}];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

console.log(hobbies.map(hobby =>{
    return 'Sandeep\'s Hobbies: ' + JSON.stringify(hobby);
}));
console.log(hobbies);



