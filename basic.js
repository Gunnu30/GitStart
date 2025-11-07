console.log(a)
var a = 10; // hoisting

const b = "hii"
console.log(b)
b = "Hello" // not bossible cause const type is immutable

//spread operator with arrays
let a1 = [2,1]
let a2 = [1,...a1,5]
console.log(a2)

//spread operator with obj

let person = {name : "Ashrith", age : 22};
let address = {city : "Hyderabad" ,pincode : 500070};
let personDetails = {...person , ...address}
console.log(personDetails)

//spread operator with funcation call
function add(a,b,...c){
    console.log(typeof c)
    console.log(c  + " I am array") // if we try to concat array with string then it will become a obj
    let sum = 0;
    for(let i =0;i<c.length;i++){
        sum += c[i];
    }
    return a + b + sum;
}
let nums = [ 1, 3,4 ,5,7];
console.log(add(nums[3],...nums));

//pack multiple values into an array 
function numbers(...args){
    console.log(args);
}
numbers(1,3,5,6,8);

//types of defining functions 

// 1 -> arrow function

let sum = (a,b) =>{
    return a+b;
}
console.log(sum(4,5));
// or 

let sum1 = (a,b) => a+b;
console.log(sum1(4,5));

// 2 function Declaration

function greet(){
    console.log("Hi , This is Functions Declaration");
}
greet();

// 3 function Expression

const expressionFun = function(){
    console.log("Function Expression");
}
expressionFun();

// Factory Function ->   It is also a type of function, but I wanted to write it separately.

function createCar(color , brand){
    return {
        color:color,
        brand : brand,
        start : function(){ // start is a function -> start()
            console.log("Started");
        }
    };
}
let car1 = createCar("blue" , "BMW"); // it is not an instance but give obj as return
console.log(car1);
car1.start();  // calling the start function

// in short cut -> is a camelCase decleration "createCar"
function createCar1(color,brand){
    return {
        color,
        brand , 
        start(){
            console.log("Started");
        }
    }
}
// it gives an obj explicitly.
let car2 = createCar1("Red" , "Audi");
console.log(car2);
car2.start();

// constructor function
// it is different from factor function 
// PascalCase representation -> like "CreateCar"
// "new" key-ward is imp

function Car(color,brand){
    this.color = color;
    this.brand = brand;  // "this" key-word refers the current instance or obj.
    this.start = function(){ 
        console.log("Started");
    }
}

// it gives an obj implicitly.
let obj1 = new Car("blue" , "Audi");
console.log(obj1);
obj1.start();

