// return 은 :를이요하여 정한다.
const sayHi = (name:string, age:number, gender:string):string => {
    return `Hello ${name}, you are ${age}, gender is ${gender}`;
};

console.log(sayHi("yeonsu", 36, "male"));

export {};