//slice(start,end): Returns a new array containing elements from the original array within the specified rang.
let number=[1,2,3,4,5];
let sliced=number.slice(1,4);
console.log(sliced)

//some(callback):checks if one or more elements is tru. will return true.
let numbers=[1,3,2,7];
let even=numbers.some(x=>x%2==0);
console.log(even)

//every(callback):checks is all the elements in the array is tru then will return true if one is falsethen whole is false
let num=[1,3,2,7];
let ehe=numbers.every(x=>x%2==0);
console.log(ehe)

//concar(array):
//let f1=["apple","banana"]


let fruits=["strawberry","raspberry","serenity"];
let fff=fruits.splice[0,2,"blueberry","avocado"];
console.log(fff)