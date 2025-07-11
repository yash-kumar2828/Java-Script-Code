// console 
console.log("yash kumar");
console.log(700);
console.log(729.999999);
let a=10;
let b=20;
console.log("sum of=",a+b);


// template literals
let pencil=10;
let erasor=5;
let out=pencil+erasor
// console.log("the total price is=",out)
console.log(`the total price is ${out}`)
  

// operators
// arithmetic
let n1=100
let n2=90
console.log("addition is",n1+n2)
console.log("subtraction is",n1-n2)
console.log("multiplication is",n1*n2)
console.log("division is",n1/n2)
console.log("modulus is=",n1%n2)

// unary operator
console.log(n1++)
console.log(n1--)
console.log(++n1)
console.log(--n1)


// assignment operator
let c=10;
let d=20;
c=d
console.log(c)


// comparison operator
let age=20;
console.log(age>18)
console.log(age>=18)
console.log(age<18)
console.log(age<=18)
console.log(age==18)
console.log(age!=18)


// conditional statement 
// if statement 
let num=15;
if(num>18){
    console.log("you can vote")
}else{
    console.log("you can not vote")
}

let color="red";
if(color==="red"){
    console.log("stop");
}
if(color==="yellow"){
    console.log("slow down");
}
if(color==="green"){
    console.log("go");
}

// else if statement  
let age1=14;
if(age1>=18){
    console.log("you can vote")
}else if(age1<18){
    console.log("you can not vote")
}

// practice qs 
let size="l";
if(size=="xl"){
    console.log("xl price is 250")
}
if(size=="l"){
    console.log("l price is 200")
}
else if(size=="m"){
    console.log("m price is 100")
}
else{
    console.log("s price is 50")
}

//  logical operator
let num1=10;
let num2=20;
let num3=30
if(num1>num2&&num1>num3){
    console.log(num1,"is greater")
}
else if(num2>num1&&num2>num3){
    console.log(num2,"is greater")
}
else{
    console.log(num3,"is greater")
}



if(false){
    console.log("it has true");
}else{
    console.log("it is false")
}

// switch 
let week=6;
switch(week){
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log("friday")
        break;
    case 7:
        console.log("SATURDAY")
        break;
    default:
        console.log("invalid");
}

// alert("somthing is wrong");
// prompt("enter a number");
// let name=prompt("enter name");
// console.log(name);

let first=prompt("enter first name");
let sec=prompt("enter second name");
console.log("welcome",first, sec)


