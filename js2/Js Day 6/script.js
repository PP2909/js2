let sentence="i am a comma seperated sentence";
console.log(sentence.length);
let words=sentence.split("a");
console.log(words)

//Q1. count the occurence of "r" in the given string.

let str="tu meri me tera me tera tu meri";
let repitition=str.split("r");
console.log(repitition.length-1)

//first class function
function test(){
    return function test2(){
        console.log("test2")
    }
    console.log("test")
}
let value=test()
value();

function test(){
    return function test2(){
        console.log("test2")
        return function test3(){
            console.log("test3")
        }
    }    
}    
//test()()()
//let value=test()
//let value2=value();
//value2()

//anonymous function

Map(function(){
    })

//self invoking function
(function(){
    console.log("demo")
})()