/*
//interface는 js로 컴파일되지않는다 js에서 확인하려면 class를 이용한다.
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

*/
class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const ys = new Human("Yeonsu",36,"male");

// return 은 :를이요하여 정한다.
const sayHi = (person:Human):string => {
    return `Hello ${person.name}, you are ${person.age}, gender is ${person.gender}`;
};

console.log(sayHi(ys));

export {};