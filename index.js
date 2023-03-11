//constructor (build object)

function person(name, age){
    this.name = name,
    this.age = age;
};

let person1 = new person("james", 20);
console.log(person1);


//class

class Human{
    constructor(name, age){
        this.name = name,
        this.age = age;
    }
    static getAge(){
        console.log('cool');
    };
};

let human1 = new Human("red", 30);
console.log(Human.getAge());

//extend class subclass!!

class Parent{
    constructor(mother, father){
        this.mother = mother,
        this.father = father;
    }
    greeting(){
        console.log('Hello, world');
    };
};

let parent1 = new Parent('mya', 'daung');

//console.log(parent1);

class Children extends Parent{
    constructor(mother, father, childName){
        //super => parent
        //sub => children

        super(mother, father);
        this.childName = childName;
    }
};

let child1 = new Children('mya', 'daung', 'zayn');
console.log(child1);
child1.greeting();