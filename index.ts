const name = "Yeonsu", age = 24, gender = "male";

// optional variable ?
const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, gender is ${gender}`)
};

sayHi(name, age);

export {};