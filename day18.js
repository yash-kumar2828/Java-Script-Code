// object 
const student={
    name:'yash kumar',
    age:20,
    marks:438,
    city:'bihar'
};
student.city="vaishali";
student.gender="male";
delete student.age;
console.log(student.name);
console.log(student);

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:'e'
};
console.log(obj);

// object of object 
const classinfo={
    yash:{
        grade:'a+',
        city:'vaishali'
    },
    kalpana:{
        grade:'a+',
        city:'vaishali'
    }
};
console.log(classinfo.yash)
console.log(classinfo.kalpana)


// Array of object 
const info=[
    {
        name:'yash',
         grade:'a+',
        city:'vaishali'
    },
    {
        name:'kalpana',
         grade:'a+',
        city:'vaishali'
    }
];
info[1].city="bihar";
console.log(info);


// math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-12));
console.log(Math.pow(2,10));
console.log(Math.floor(1212.989));
console.log(Math.ceil(100.931));
console.log(Math.random());


// random number 
let num=Math.random();
num=num*10
num=Math.floor(num);
num=num+1;
console.log(num);

let num1=Math.floor(Math.random()*100)+1;
console.log(num1);

