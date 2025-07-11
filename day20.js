// this is js 
const student={
    name:"yash",
    age:20,
    eng:70,
    math:89,
    phy:70,
    getavg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
};

function getavg(){
    console.log(this);
}


// try and catch 
// let a=5;
try{
    console.log(a)
}catch(err){
    console.log("caught an error a is not defined");
    console.log(err)
}


// arrow function
const sum=(a,b)=>{
    console.log(a+b);
};
sum(20,20);


const cube=(n)=>{
    return n*n*n;
};

const pow=(a,b)=>{
    return a**b;
};

// implicit return
const mul=(a,b)=>(a*b);

// setTimeout

console.log("yash kumar  11");
setTimeout(()=>{
    console.log("yash kumar");
},4000);
console.log("yash kumar  12");

// set interval 
let id=setInterval(() => {
    console.log("yash kumar");
},5000);
console.log(id);

let id2=setInterval(() => {
    console.log("yash kumar");
},5000);
console.log(id2);
clearInterval(id)
clearInterval(id2)


// this with arrow functions


const student1={
    name:"yash",
    age:20,
    eng:70,
    math:89,
    phy:70,
    prop:this,
    getname:function(){
        console.log(this);
        return this.name;
    },
    getmark:function(){
        setTimeout(()=>{
            console.log(this)
        },2000)
    },
    getinfo:function(){
        setTimeout(function (){
            console.log(this);
        },2000)
    },
};