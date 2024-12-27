//Spread Operator
const hobbies = ['sports', 'cooking', 1, true, {
    sport: 'Cricket',
    ground: 'MCG',
}];

const person = {
    name : 'Maximilian Schwarzmuller',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name + '!');
    }
};

const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson ={...person};
console.log(copiedPerson);

//Rest Operator
// const toArray = (arg1,arg2,arg3) =>{
//     return
// }

const toArray = (arg1,arg2,arg3) =>{
    return [arg1,arg2,arg3];
};
console.log(toArray(1,2,3,4,5,6,7,8,9,10));

const restArray =(...args)=>{
    return args;
}

console.log(restArray(23904,230493,23782783,1,2,3,4,5,6,7,8,9,10));