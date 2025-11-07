# JavaScript Concepts Overview

This document provides a quick revision of key JavaScript concepts with examples and concise explanations. It covers hoisting, spread and rest operators, function types, and object creation patterns.

---

## 🔁 Hoisting

console.log(a);
var a = 10;

- Variable declarations (with `var`) are hoisted to the top of their scope.
- Output will be `undefined` since assignment happens after logging.

---

## 🧩 const Keyword

const b = "hii";
console.log(b);
b = "Hello"; // ❌ Not possible - const values are immutable


- Constants cannot be reassigned once defined.

---

## 📦 Spread Operator

### Arrays
let a1 = ;
let a2 = [1, ...a1, 5];
console.log(a2); //

let a1 = ;
let a2 = [1, ...a1, 5];
console.log(a2); //

- Expands elements of an array into another array.

### Objects

let person = { name: "Ashrith", age: 22 };
let address = { city: "Hyderabad", pincode: 500070 };
let personDetails = { ...person, ...address };
console.log(personDetails);

- Combines multiple objects into one.

---

## 🧮 Spread Operator in Function Calls
function add(a, b, ...c) {
console.log(typeof c); // object
console.log(c + " I am array"); // Array becomes string when concatenated
let sum = 0;
for (let i = 0; i < c.length; i++) {
sum += c[i];
}
return a + b + sum;
}

let nums = ;
console.log(add(nums, ...nums)); // 25


- Spread (`...nums`) passes multiple arguments.
- Rest (`...c`) collects remaining arguments into an array.

---

## 📥 Rest Parameters

function numbers(...args) {
console.log(args);
}
numbers(1, 3, 5, 6, 8);


- Packs all provided values into an array for flexible input handling.

---

## ⚙️ Types of Functions in JavaScript

### 1. Arrow Function

let sum = (a, b) => { return a + b; };
console.log(sum(4, 5));

// Short version
let sum1 = (a, b) => a + b;
console.log(sum1(4, 5));

- Shorter syntax introduced in ES6.
- Does not have its own `this`.

---

### 2. Function Declaration

function greet() {
console.log("Hi, This is Function Declaration");
}
greet();


- Defined using the `function` keyword.
- Hoisted: can be called before its definition.

---

### 3. Function Expression
const expressionFun = function () {
console.log("Function Expression");
};
expressionFun();


- Function assigned to a variable.
- Not hoisted: must be declared before use.

---

## 🚗 Object Creation Patterns

### Factory Function

function createCar(color, brand) {
return {
color: color,
brand: brand,
start: function () {
console.log("Started");
},
};
}

let car1 = createCar("blue", "BMW");
console.log(car1);
car1.start();


#### Shortcut Syntax (ES6)

function createCar1(color, brand) {
return {
color,
brand,
start() {
console.log("Started");
},
};
}

let car2 = createCar1("Red", "Audi");
console.log(car2);
car2.start();



- Uses camelCase naming (`createCar`).
- Returns an object explicitly.
- Does not require the `new` keyword or `this`.

---

### Constructor Function

function Car(color, brand) {
this.color = color;
this.brand = brand;
this.start = function () {
console.log("Started");
};
}

let obj1 = new Car("blue", "Audi");
console.log(obj1);
obj1.start();


- Uses PascalCase naming (`Car`).
- Requires the `new` keyword to create an instance.
- Uses `this` to refer to the current object.

---

## ⚡ Key Takeaways

- **Hoisting:** Moves declarations to the top of their scope.
- **const:** Creates immutable bindings.
- **Spread (`...`)** expands arrays/objects or arguments.
- **Rest (`...`)** groups multiple inputs into an array.
- **Functions:** 
  - Arrow: concise, no own `this`.
  - Declaration: traditional, hoisted.
  - Expression: stored in variable, not hoisted.
- **Object Creation:**
  - Factory Functions return objects.
  - Constructor Functions use `new` and `this`.

---
