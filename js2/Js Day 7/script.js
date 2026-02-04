let user={
    fullname:"Pragya Sinha",
    address:{
        station:"dwarka",
        city:"west delhi",
        state:"Delhi",
        country:"india",
        continent:"Asia",},
    class: "1st year",
    mobileno:1234567890,
    favcolor:["black","white","pink"],
    demo:function(){
        return "hello world";
    }
}
console.log(user.fullname,user.address.city,user.mobileno,user.favcolor[1],user.demo);
//if we add() in demo it will call the function and if we don't add() it will give the full function definition inconsole.
console.log("My name is "+user.fullname+".My fav color is "+user.favcolor[0]);

//string literal
console.log(`My name is ${user.fullname}.My fav color is ${user.favcolor[0]} `);

//object methods
//object.keys(variable name)
//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));


const car = {
    make:"Mahindra",
    model:"Thar"
};
//object.freeze(car); //we cant add a new key and valuebpair and we can't change or update the existing value

Object.seal(car)// we cant add a new key and value pair but we can change and update the exisiting value
x
car.model="XUV700"
car.color="zblack";
console.log(car);
