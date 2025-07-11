// string 
// trim 
let str="       yash        kumar";
console.log(str)
let new_str=str.trim();
console.log(new_str)

// upper
let str1="yash kumar";
console.log(str1.toUpperCase())


// lower
let str2="YASH KUMAR";
console.log(str2.toLowerCase())


// method with arguments
let str3=" ILOVECODING";
console.log(str3.indexOf('O'));
console.log(str3.indexOf('CODING'));

// method chaining
let str4="      yash kumar singh";
console.log(str4.toLocaleUpperCase().trim())

// slice method 
let str5="yash kumar";
console.log(str5.slice(3))
console.log(str5.slice(2,9))
console.log(str5.slice(-4))


// replace
let str6="yash kumar";
console.log(str6.replace("kumar","singh"));

// repeat 
let str7="yash kumar";
console.log(str7.repeat(4));


// ARRAY 
let str8=["yash","kalpana","yash kalpana"];
console.log(str8);
console.log(str8[2]);
let data=["yash kumar",92,20,7.9]
console.log(data);
console.log(data[0].length);
data[0]="kalpana";
console.log(data);
data[10]="yash kalpana";
console.log(data);

// Array method 
let car=["audi","bmw","maruti"];
console.log(car); 
console.log(car.push("toyota"));
console.log(car.pop())

// practice
let month=["january","july","march","august"];
console.log(month)
month.shift()
month.shift()
console.log(month)
month.unshift("june");
month.unshift("july");
console.log(month);
console.log(month.slice(-1))
console.log(month.sort())

// indexOf 
let primary=["red","yellow","blue"];
console.log(primary.indexOf("yellow"));
console.log(primary.includes("green"));
console.log(primary.includes("yellow"));

// concat 
let first=["red","green","blue"];
let second=["orange","mango","litchi"]
console.log(first.concat(second));
console.log(first.reverse())


// sort 
let num=[1,2,5,3,5,64,35,543,32,2]
console.log(num.sort())


// nested Array
let num2=[[1,2,3,45,56,],[1,2,3,4,5,6,6,43,,3],[9,8,7,6,6,5,4]]
console.log(num2)
console.log(num2[2])
 

let game=[['x',null,'o'],[null,'x',null],['o',null,'x']];
console.log(game)




