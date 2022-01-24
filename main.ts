export {}
// A module has it's own scope whereas a script has a global scope
// By adding an export statement at the top, typescript treats this a a module but not a script
// How TS works? You have a typescript file which get transpiled into a JS file and then will be used in your application
let message = 'Hello world sreekanth!'
console.log(message)

// variable declarations 
let x = 10
const y = 20

let sum

const title = 'sreekanth'

// variable types 

let isBeginner: boolean = true
let total:number = 2
let name:string = 'sreekanth'
let sentence:string = `My name is ${name} and I am playing around with typescript`

// null and undefined are sub-types in TS which are of not much use by themselves

let n:null = null;
let u:undefined = undefined;

let isNew:boolean = null;
let myName:string = undefined;

let list1:number[] = [1,2,3]
let list2:Array<number> = [1,2.3]

// arrays of mixed types: tuples
// problem: the order and size of the array is fixed
let person1:[string,number] = ['sree',2]


//enum types - way of giving more friendly names to a set of numeric values
enum Color{Red,Green,Blue}

let c:Color = Color.Green


// any type - if you're unsure of what a variable type would be => make use of 'any' type
// let myVariable1:any = 10;
// console.log(myVariable1.name)
// myVariable1()
// myVariable1.toUpperCase();


// unknown type - To give the ability to add static type checking for 'any' type, typescript introduced 'unknown' type which will give errors when trying to assign some type
// let myVariable2:unknown = 10;
// // console.log(myVariable2.name) - throws an error
// // myVariable2() - throws an error
// (myVariable2 as string).toUpperCase(); // we're saying it is a string 

// type inference
let a;
a = 10;
a = true;

let b = 20
// here you cannot reassign 'b' to something else

//union type
let multiType: number | boolean

multiType = 20;
multiType = true



// Functions

function add(num1:number, num2: number): number{
    return num1 + num2
}

add(5,10)

// Functions with default parameters
function addDefault(num1:number, num2:number = 200): number{
    return num1+num2
}
addDefault(5)

// Interfaces 
interface Person{
    firstName: string,
    lastName?: string
}
function fullName(person:Person){
    console.log(`${person.firstName} ${person.lastName}`)
}
let p = {
    firstName: 'sreekanth'
}
fullName(p)

// Classes 

class Employee {
    employeeName: string
    constructor(employeeName: string){
        this.employeeName = employeeName
    }
    greet(){
        console.log(`Hello ${this.employeeName}`)
    }
}

let emp1 = new Employee('sreekanth')
console.log(emp1.employeeName)
emp1.greet()

class Manager extends Employee{
    constructor(managerName:string){
        super(managerName)
    }
    delegateWork(){
        console.log(`Manager delegating tasks`)
    }
}

let m1 = new Manager('Bruce')
console.log('manager',m1.employeeName)
m1.greet()
m1.delegateWork()

// There are 3 access modifiers to set or define the accessibility of variables outside the classes
// public - lets you access anywhere
// private - lets you access only inside the parent class
// protected - lets you access parent and children but not externally