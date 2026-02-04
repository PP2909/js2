//map method

let arr=[1,2,3,4,5]
let resuklt=arr.map((x)=>x+2)
console.log(resuklt)

//filter method
let scores=[12,7,22,15,32,6,4,27,11,16];
let highScores=
scores.filter((score)=>{
    if(score>=15){
        console.log(score,"pass")
    }
else{
    console.log(score,"fail")
}});

//reduce method


//let sum = numbers.reduce((acc,current)+> console.log(current));
