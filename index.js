//constructor (build object)

function person(name, age){
    this.name = name;
    this.age = age;
};

let person1 = new person("james", 20);
console.log(person1);


//class

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static getAge(){
        console.log('cool');
    };
};

let human1 = new Human("red", 30);
console.log(Human.getAge());