// function in js 
function calculate(){
    let a=10;
    let b=20;
    console.log(a+b);
}
calculate();

function vote(){
    let age=19;
    if(age>=18){
        console.log("you can vote");
    }else{
        console.log("you can vote");
    }
}
vote();

// let random=Math.floor(Math.random()*6);
function role(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random)   
}
role();

// function with arguments
function print(name,age){
    console.log(`${name} is a ${age} years old`);
}
print("yash",20);

// return keyword
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

// sum of n number 
function num(n){
    let sum=0;
    for(let i=0;i<=n;i++){
       
        sum=sum+i
    }
    return sum
}console.log(num(50));

let str=["hi","hello","bye"];
function concat(str){
    let res="";
    for(let i=0;i<str.length;i++){
        res+=str[i];
    }
    return res;
}
console.log(concat(str));

// scope 
// function scope 
function sum1(a,b){
    let sum=a+b;
    console.log(sum)
}
sum1(10,11);

// block scope 
{
    let a=25;
    console.log(a)
}

// lexical scope 
function out(){
    let x=5;
    let y=6;
    function inner(){
        let a=10;
        console.log(x);
        console.log(y);
    } 
    console.log(a); 
    inner();  
}


let greet="hello";
function change(){
    let greet="namaste";
    console.log(greet);
    function inner(){
        console.log(greet)
    }
}
console.log(greet);
change();

// function expression
let name="yash kumar";
let sum4=function(a,b){
    return a+b
}
console.log(sum4(12,12))

// higher order function
function mul(func,count){
    for(let i=0;i<=count;i++){
        func();
    }
}
let greet1=function(){
    console.log("hello")
}
mul(greet1,10)