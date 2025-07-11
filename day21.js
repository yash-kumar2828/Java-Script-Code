// array method 
let arr=[1,2,3,4,45,67,3];
let print=function (el){
    console.log(el);
};
arr.forEach(print);

// arr.forEach(function (el) {
//     console.log(el);
// });

// arr.forEach((el)=> {
//     console.log(el);
// });

let arr1 =[{
    name:"yash",
    marks:96
},{
    name:"yash",
    marks:95
},{
    name:"yash",
    marks:97
}]

arr1.forEach((student)=>{
    console.log(student.marks)
});

let gpa=arr1.map((el)=>{
    return el.marks/10;
});
console.log(gpa);

// map 

let num=[1,2,3,4,5,6,7];
let double=num.map((el)=>{
    return el*el;
});
console.log(double);

// filter 
let num1=[1,2,34,5,6,7,89,9,9];
let even= num1.filter((el)=>{
     return el%2==0;
});
console.log(even);


// every
let eve=num1.every((el)=>el%2==0);
console.log(eve);

// reduce 
let red=num1.reduce((res,el)=>(res+el));
console.log(red);

let red1=num1.reduce((res,el)=>(res*el));
console.log(red1);

let max=-1;
for(let i=0;i<num1.length;i++){
    if(max<num1[i]){
        max=num1[i]
    }
}
console.log(max)


let max1=num1.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max1)


// default parameter
function sum(a,b=3){
    return a+b;
}
console.log(sum(204))


// spread 
let char="yash kumar";
let new1=[...char];
console.log(new1);

let arr2=[1,2,34,567,78,89,5,3,3];
let new2=[...arr2];
console.log(new2);


let data={
    email:"yk@gmail.com",
    password:12345678
};
const datacopy={...data};
console.log(datacopy);


// rest 
function sum(...arg){
    for(let i=0;i<arg.length;i++){
        console.log("you gave us:",arg[i]);
    }
}
sum(1,2,3,4);

function min(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
}
min(1,2,3,4)

function sum1(...args){
    return args.reduce((sum,el)=>sum+el);
}
console.log(sum1(11,2,3));

// destructuring
let names=["yash","kalpana","yash kalpana","kalpana yash"];
let [winner,runnerup,...other]=names;
console.log(winner);
console.log(runnerup);
console.log(other);


let student={
    name:"yash kumar",
    age:20,
    class:"bca",
    subject:["OT","PY","PHP","DBMS","SE"],
    username:"yk@gmail.com",
    password:1234
};
let {username:user,password:pas,city="vaishali",...other1}=student;
console.log(user);
console.log(pas);
console.log(city);
console.log(other1)