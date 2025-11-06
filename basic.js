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