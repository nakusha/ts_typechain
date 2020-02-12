interface Human {
    name:string;
    age:number;
    gender:string;
}

const person = {
    name: "Yeons",
    age: 36,
    gender: "male"
}

// return 은 :를이요하여 정한다.
const sayHi = (person:Human):string => {
    return `Hello ${person.name}, you are ${person.age}, gender is ${person.gender}`;
};

console.log(sayHi(person));

export {};