// // How to delete properites of a key.

// const obj = {
//   prop1: "gkp",
//   prop2: "name",
// };
// console.log(obj);
// // after deleting properties
// delete obj.prop1;
// console.log(obj);

// // Math function
// const val = -9.6;
// console.log(Math.ceil(val));

// console.log(Math.floor(val));
// console.log(Math.trunc(val));
// // and math.random()

// // call apply and bind
// const obj1 ={
//     name: "gkp",
//     age: 20,
//     greet: function(fathername, mothername){
//         console.log(`hello ${this.name} ${fathername}, ${mothername}`);
//     }
// }
// const obj2 = {name: "Nitesh"};
// // call
// obj1.greet.call(obj2, "Har", "Nir");
// // apply
// obj1.greet.apply(obj2,["Har", "Nir"]);

// // bind

// function salary(){
//     console.log(`Your salary is ${this.salary}`);
// };

// const obj = {salary: 10000};

// const getSalary = salary.bind(obj);

// getSalary();

// In javascript array and object are assigned by pass by reference

/* DOM MANUPULATION */
// const element = document.querySelector("p");
// console.log(element);
// console.log(element.innerText);
// console.log(element.innerHTML);

// Getting and setting attributes to an element
// let anchorElement = document.querySelector("a");

// console.log(anchorElement.getAttribute("href"));

// anchorElement.setAttribute("href", "./pra.html");

// Adding the styles
// let heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// add remove and replace classes of elements
// let heading = document.querySelector("h1");

// heading.classList.add("bg-cl");

// heading.classList.add("text-cl");

// heading.classList.remove("text-cl");

// heading.classList.replace("bg-cl", "text-cl");

// Parent children and Siblings elements.

// let parentElement = document.querySelector(".content");

// console.log(parentElement.children);

// We can not run forEach loop on Array elements so,
// first convert it into array and then try to run the loop

// Array.from(parentElement.children).forEach((element) => {
//   console.log(element);
// });
// child element
// const childElement = document.querySelector(".content_children");
// print parent element of child element
// console.log(childElement.parentElement);

// print siblings of elements

// console.log(childElement.previousElementSibling);
// console.log(childElement.nextElementSibling);

/* EVENTS BASICS */

// let lists = document.querySelectorAll("li");
// console.log(lists);

// lists.forEach((element) => {
//     element.addEventListener("click", (e) => {
// console.log(element.innerText);
// console.log(e.target.innerText);
// e.target.style.textDecoration = "line-through";
/* HOW TO REMOVE A CONTENT AS USER WILL CLICK */
// e.target.remove();
//     });
// });
/* HOW TO ADD AN ELEMENT AS BUTTON WILL BE CLICKED */
// const btn = document.querySelector("button");
// const ul = document.querySelector("ul");
// btn.addEventListener("click",()=>{
//     const newElement = document.createElement("li");
//     newElement.innerText = "New Element";
//     ul.appendChild(newElement);
// });

/* EVENT BUBBLING AND DELEGATION */

/* 
*Event bubbling agar child element pe event ka event listener click hota hai to oo bs child tak hi nahi rahega 
* balki parent ke paas bhi jayega aur

*/

// let li = document.querySelector("li");
// li.addEventListener("click", ()=>{
//     console.log(li.innerHTML, 'Li ...');
// })
// document.querySelector("ul").addEventListener("click", (e)=>{
//     console.log(e.target.innerHTML, 'ul ...');
// });
// document.querySelector("body").addEventListener("click", (e)=>{
//     console.log(e.target.innerHTML, 'body ...');
// });
// document.querySelector("ul").style.backgroundColor = "red";

/* EVENT DELEGATION */
// baar baar child pe event listener lagane se accha hai ki ek baar
// parent par hi lagado
// aur usme child pe condition lagado

// let ul = document.querySelector("ul");
// ul.addEventListener("click",(e)=>{
//     if(e.target.tagName === "LI"){
//         e.target.style.textDecoration = "line-through";
//     }
// })

// dekh sakte hai hm ki hme sare child par event listener nahi lgane
// pade and that is event delegation.

// How to acess inputs of a form in a html

// const form = document.querySelector("form");
// console.log(form);

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(form.email.value);
//     console.log(form.password.value);
// });

// REGEX

// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const email = form.email.value;
//     const password = form.password.value;
//     if(emailPattern.test(email)){
//         console.log("valid email");
//     }else{
//         console.log("invalid email");
//     }
//     if(passwordPattern.test(password)){
//         console.log("valid password");
//     }else{
//         console.log("invalid password");
//     }
// });

// SOME ARRAY METHODS

const letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Reverse mutated the original array and also return the modified array

// const reverseLetters = letter.reverse();
// console.log(reverseLetters);

// CONTCATENATION OF TWO ARRAY IN JS
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* FIRST WAY */
// const comboArr = nums.concat(letter);
/* SECOND WAY */
// const comboArr = [...nums, ...letter];
// console.log("this is comboarr ", comboArr);

// JOIN

// const str26 = letter.join("");
// console.log(str26);
// const digits = nums.join("");
// console.log(digits);

// SLICE

// const newLetterArr = letter.slice(6, 13);
// console.log(newLetterArr);

// const newNum = nums.slice(-2); // this will print return last two elements from the array
// console.log(newNum);

// const num1 = [1, 2, 3, 4, 5];
// const num2 = [...num1];
// num2.push(6);
// console.log(num2, num1);

// AT METHOD
// console.log(nums.at(-2));
// this method can be used in strings

// I AM AWARE ABOUT THE METHODS MAP, FILTER, REDUCE

/* FIND METHOD VVIP*/
// const students = [
//   { id: 1, name: "John", age: 50 },
//   { id: 2, name: "Alex", age: 19 },
//   { id: 3, name: "cookie", age: 5 },
// ];
// const findStudent = students.find((student) => {
//   return student.name === "cookie" && student.age < 18;
// });
// console.log(findStudent);

/* FINDINDEX METHOD */
// This method is similar to the method findIndex the only difference is that
// this method will return index of the matched element

/* SOME AND EVERY METHOD */

// const score = [30, 40, 50, 60, 70, 80];

// const isTrue = score.some(item=> item>50);// value of isTrue will be true
// because we have one three elements which is satisfying the property
// console.log(isTrue);

// const isTrue2 = score.every(item=> item>50);// value of isTrue2 will be false
// because 30 and 40 are smaller that 50
// console.log(isTrue2);

/* FLAT METHOD */

// const score = [
//   [30, 40],
//   [50, 60, 70, 80],
// ];
// FLAT METHOD WILL BE USED TO
// REDUCE THE DEPTH OF ARRAY
// MEANS IF YOU WANT TO CONVERT THE 2D TO 1D THEN USE FLAT
// console.log(score.flat()); // Default depth value inside flat function is 1
// // but suppose you have a 3-d array and you want to convert it to 1D then
// // then you can explicitly provide the depth value inside flat function

// // e.g.
// const score2 = [
//   [30, 40],
//   [50, [60, 70], 80],
// ];
// console.log(score2.flat());// result will be a 2D array
// // But when I will provide a value like
// console.log(score2.flat(2));// result will be a 1D array

// const obj = [
//   { name: "Mobile Phone", quantity: 2, price: 500 },
//   { name: "Tablet", quantity: 2, price: 10000 },
// ];

// const res = obj.map((item) => {
//   if (item.name === "Mobile Phone") {
//     const returnObj = { name: "Screen Gaurd", quantity: 2, price: 500 };

//     return [item, returnObj];
//   }
//   else return item;
// });
// console.log(res);
// In the above example, I will get a 2-D Array because I am
// returnning a 2-D array
// But when I will use a flatMap function then it will convert the 2D array
// into 1D array and I will get a 1-D array as result

// const res2 = obj.flatMap((item) => {
//   if (item.name === "Mobile Phone") {
//     const returnObj = { name: "Screen Gaurd", quantity: 2, price: 500 };

//     return [item, returnObj];
//   }
//   else return item;
// });
// console.log(res2);

// Sorting of ARRAYS

// const list = [1, 3, -2, -5, 6, 7];
// const list1 = ["Harry", "bhai", "you", "are", "cool", "dude"];
// // Then what I will need is important to understand
// const li = list.sort();
// console.log(li);
// // sort it by length
// list1.sort((a, b)=> a.length - b.length);
// console.log(list1);

/* SPLICE METHODS IN JS */
// array.splice(start, deleteCount, item1, item2, ..., itemN)
// let fruits = ["apple", "banana", "cherry", "date"];
// const val = fruits.splice(2,1,  "Gauva");
// console.log(fruits);
/* CHAINING OF METHODS */

// const list = [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11];
// const sum = list.filter(item=> item%2 === 0).reduce((a,b)=> a+b)
// console.log(sum);

/* DATE AND TIME */

// const dateTime = new Date(year, month, day, hour, minute, second);
// const dateTime = new Date(2024, 6, 22,11, 34, 12 );
// console.log(dateTime);
// console.log(new Date().getTime());

/* ADVANCE DATE AND TIME METHODS */

// const hr5 = 5 *60 * 60 * 1000;

// const dateNow = new Date().getTime() +hr5;
// const newDate = new Date(dateNow);
// console.log(newDate);

/* LOCAL STORAGE IN BROWSER */
// Here we will discuss that how can we store the array data
// in local storage
// let vehicles = [
//   {company: "Honda", model: "2023"},
//   {company:"Maruti", model:"2009"}
// ]
// localStorage.setItem("vehicles", JSON.stringify(vehicles));

// const storedItem = JSON.parse(localStorage.getItem("vehicles"));
// console.log(storedItem);

/* OOPS IN JS  */

// console.log("OOPS IN JS");

// constructor by using a function

// const Person = function(name, age){
//   this.name = name;
//   this.age = age;
// }
// const person1 = new Person("Gautam", 23);
// console.log(person1);

// Prototypes
/* Every object created by the constructor function have an 
acess to all the methods present inside that constructor prototype */
// const Person = function(name, age){
//   this.name = name;
//   this.age = age;

// }
// Person.prototype.greet = function(){
//   console.log(`Welcome, I am ${this.name}`);
// }
// const person1 = new Person("Gautam", 23);
// const person2 = new Person("Gautam", 23);
// person1.greet();

//****** Object ke andar koi prototype nahi hota
//***** Jinse bane hai unke andar hi prototype hota hai

// YOU CAN CHECK THE PROTOTYPE OF OBJECT OR INSTANCES
// console.log(objectName.__proto__);
// isPrototypeOf method will return true if it is a prototype
// console.log(person1.__proto__.isPrototypeOf(Person));// false
// // kyuki Person person1 ka prototype nahi hai
// // Pr person1 is prototype of Person

// console.log(Person.prototype.isPrototypeOf(person1));// true

// Chaining of prototype
// const Animal = function () {};

// Animal.prototype.eat = function () {
//   console.log("Animal is eating");
// };

// const Dog = function () {};
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function () {
//   console.log(" Dog is barking");
// };
// const dog = new Dog();

// // Prototype chaining ka ek example ho gya.
// console.log(Dog.prototype.__proto__);// isme bas eat present hoga
// console.log(dog.__proto__.__proto__);//isme bhi bs eat hi milega

// New ways of creating objects and prototypes are

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   detailsOfCar(){
//     console.log(`Details of car \n${this.make} ${this.model} ${this.year}`);
//   }

// }
// const car = new Car("Maruti", "800", "2008");
// car.detailsOfCar();

/* IMPORTANT POINTS */
// classes are not hoisted
// Classes are first class citizens in js
// we can pass them as an argument or return it.
// Classes are executed in strict mode.

/* GETTER AND SETTER IN JS */
// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   set changeName(name){
//     console.log(this.name = name);
//   }
//   get details(){
//     return `Name is : ${this.name}, Age is : ${this.age}`;
//   }
// }
// const student1 = new Student("gautam", 10);

// student1.changeName = "Gautam";// this method will be treated as
// // properties not as methods
// // similarly
// // get methods also

// console.log(student1);
// console.log(student1.details)

// Apart from that we can also create static methods that will
// be run over class Name only
// class Car {
//   constructor( model, year) {
//     this.model = model;
//     this.year = year;
//   }
//   details(){
//     console.log(`Details of car \n${this.model} ${this.year}`);
//   }
// }
// // STATIC METHOD
// Car.method = function(){
//   console.log("This is a static method");
// }
// const car = new Car("Hyundai", 2024);
// car.details();
// // car.method();// will give error because it can not be called by using Objects.
// Car.method();

/* INHERITANCE IN JS */
// class Car {
//   constructor( model, year) {
//     this.model = model;
//     this.year = year;
//   }
//   details(){
//     console.log(`Details of car \n${this.model} ${this.year}`);
//   }
// }
// class Bike extends Car{
//   constructor(model, year, gear){
//     super(model, year);
//     this.gear = gear;
//   }
//   details(){
//     console.log(`Details of bike \n${this.model} ${this.year} ${this.gear}`);
//   }
// }

// const bike = new Bike("Honda", 2024, 4);

/* Inheritance by using Prototypes */

// const Car = function(model, year){
//   this.model = model;
//   this.year = year;
// }
// Car.prototype.minSpeed = function(){
//   console.log("Max Speed of Bike is", this.minSpeed);
// }
// const Bike = function(model, year, minSpeed){
//   Car.call(this, model, year);
//   this.minSpeed = minSpeed;
// }

// const carObj = new Car("Maruti", 2008);

/* ASYNCHRONOUS JAVASCRIPT */
// console.log("Asynchronous JAVASCRIPT");

// http response status code
// 100-199 Informational response status code
// 200- 299 Successful response status code
// 300- 399 Redirection response status code
// 400- 499 Client error response status code
// 500 - 599 Server error response status code

/* Callbacks in Javascript */
// Passing a function as an argument to another function
// e.g.
// function myFather(name, action){
//   console.log("My father name is ", name+ ".");
//   action();
// }
// function action(){
//   console.log("He loves me !");
// }

// myFather("Harendra Pandey", action);

/* Difference between asynch await and promises */
/*Promises provide a structured way to handle 
asynchronous operations using .then(), .catch(), and .finally() methods,
 suitable for chaining multiple operations.
async/await offers a more synchronous-looking syntax, 
improving readability and making sequential asynchronous
operations easier to manage with try/catch for error handling.
Choosing between Promises and async/await often comes
down to personal preference and the specific needs of your code.
For straightforward asynchronous operations, async/await
can make the code more readable, while Promises may be more 
suited to complex scenarios involving multiple asynchronous steps and chaining.*/

// const promiseToCookie = (pass) => {
//   return new Promise((resolve, reject) => {
//     if (pass) {
//       resolve("will go to water Park !");
//     } else {
//       reject("will not go to water Park!");
//     }
//   });
// };
// promiseToCookie(false)
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/* EcmaScript */
// console.log("EcmaScript ... 6");

// Destructuring of Array
// const arr = [1, 2, 3, 4, 5];
// const [a, b, c, d, e] = arr;
// const [a, b,...c] = arr;
// console.log(c);// c will be an array of three numbers.

// But supoose I don't want to assign even values to any variable
// const [a, , b, , c] = arr;
// console.log(a, b, c);
// you can swap two values by using destructuring
// let a =5, b= 6;
// console.log("Before swapping", a, b);
// [a, b] = [b, a];
// console.log(" After Swapping" , a, b);

// Destructuring in nested arrays
// let nums = [2, 3, [6, 9]];
// let [a, , b] = nums;
// console.log(a, b);// o/p : b will be an array in this case
// But I want to acess individual elements not arrays
// const [a, , [b]] = nums;
// console.log(a, b);// O/P: output will be 2 and 6.

// DESTRUCTURING IN OBJECTS

// const obj = {
//   name: "Gautam",
//   age: 23,
//   address: {
//     city: "Pune",
//     state: "Maharashtra",
//     country: "India",
//   }
// }

// const {name, age, address} = obj;

// console.log(name, age, address);
// const {name: myName, age:myAge, address: myAddress} = obj;

// console.log(myName, myAge, myAddress);
// while object destructuring we can also provide default values

/* DESTURCTURING IN  NESTED OBJECTS */

// const {name, address:{city, state}} = obj;

// console.log(name, state, city);

// we can also use rest operator on strings

// const name = "Gautam";

// let arr = [];
// arr = [...name];
// console.log(arr);/* O/P : ['G', 'a', 'u', 't', 'a', 'm'] */

/* Rest operators */

// const list = [1, 2, 8 ,3, 4, 5, 6];
// const [a, b, ...rest] = list;
// console.log(rest);
// We can try it with objects also
// const obj = {
//   name: "Gautam",
//   age: 23,
//   address: {
//     city: "Pune",
//     state: "Maharashtra",
//     country: "India",
//   }
// }
// const {name, ...rest} = obj;
// console.log(rest);

// Falsy values in js -> ""(empty string) ->undefined -> null -> 0 -> false

// How to change the propety name or key name of an object
// const lastName = "middleName";
// const name = {
//   firstName: "Gautam",
//   [lastName]: "Pandey",
// };
// // suppose I want to change lastName as variable
// // means It can be middleName or lastName

// console.log(name);

// Optional Chaining -> ?.

// LOOPING OBJECTS

const obj = {
  name: "Gautam",
  age: 23,
  address: {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
  },
};

// get all keys

// const keys = Object.keys(obj);
// for(let i of keys){
//   console.log(i);
// }

// get all values

// const values = Object.values(obj);
// console.log(values);
// for(let i of values){
//   console.log(i);
// }

// Set in Js

// const set = new Set();
// set.add(1);
// set.add(4);
// set.add(1);
// console.log(set);

// MAP IN JS

// const map = new Map();
// set, get, has,

// create a nested array of numbers
// const nums = [1, 2, 3, 4, 5, [1, 2, 3, 4], 3, 4];
// nums.forEach((item) => {
//   if (typeof item === "Array") {
//     item.forEach((i) => {
//       if (map.get(i) !== undefined) {
//         map.set(i, 1);
//       } else {
//         map.set(i, map.get(i) + 1);
//       }
//     });
//   } else {
//     if (map.get(item) !== undefined) {
//       map.set(item, 1);
//     } else {
//       map.set(item, map.get(item) + 1);
//     }
//   }
// });
// console.log(map);

