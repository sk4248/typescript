"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// A module has it's own scope whereas a script has a global scope
// By adding an export statement at the top, typescript treats this a a module but not a script
// How TS works? You have a typescript file which get transpiled into a JS file and then will be used in your application
var message = 'Hello world sreekanth!';
console.log(message);
// variable declarations 
var x = 10;
var y = 20;
var sum;
var title = 'sreekanth';
// variable types 
var isBeginner = true;
var total = 2;
var name = 'sreekanth';
var sentence = "My name is ".concat(name, " and I am playing around with typescript");
// null and undefined are sub-types in TS which are of not much use by themselves
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2.3];
// arrays of mixed types: tuples
// problem: the order and size of the array is fixed
var person1 = ['sree', 2];
//enum types - way of giving more friendly names to a set of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
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
var a;
a = 10;
a = true;
var b = 20;
// here you cannot reassign 'b' to something else
//union type
var multiType;
multiType = 20;
multiType = true;
// Functions
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// Functions with default parameters
function addDefault(num1, num2) {
    if (num2 === void 0) { num2 = 200; }
    return num1 + num2;
}
addDefault(5);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'sreekanth'
};
fullName(p);
// Classes 
var Employee = /** @class */ (function () {
    function Employee(employeeName) {
        this.employeeName = employeeName;
    }
    Employee.prototype.greet = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('sreekanth');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
console.log('manager', m1.employeeName);
m1.greet();
m1.delegateWork();
// There are 3 access modifiers to set or define the accessibility of variables outside the classes
// public - lets you access anywhere
// private - lets you access only inside the parent class
// protected - lets you access parent and children but not externally
