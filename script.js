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
