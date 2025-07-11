// 1st video call stack 
function hello(){
    console.log("inside hello fun");
    console.log("hello");
}
function demo(){
    console.log("calling hello fun");
    hello();
}
console.log("calling demo fun");
demo();
console.log("done");


// 2nd video visualizing the call stack 
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans=two()+one();
    console.log(ans);
}
three();


// 3rd video breakpoints 

// 4th video JS is single threaded 
setTimeout(()=>{
    console.log("yash kumar");
},2000);
setTimeout(()=>{
    console.log("hello yash");
},2000);
console.log("hello");


// 5th video callback hell 
h1=document.querySelector("h1");

function changeColor(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color=color;
        nextColor();
    },delay);
}
    changeColor("red",1000,()=>{
      changeColor("orange",1000,()=>{
        changeColor("green",1000);
      });  
    });

changeColor("red",1000);
changeColor("orange",2000);
changeColor("green",3000);



// 6th video promise 
function save(data){
    let internet=Math.floor(Math.random()*10)+1;
    if(internet>4){
        console.log("data save",data); 
    }else{
    console.log("data not save");
    }
}