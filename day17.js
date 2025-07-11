// for loop
for(let i=1;i<=10;i++){
    console.log(i)
}

for(let j=10;j>=1;j--){
    console.log(j)
}

// odd numbers 
for(let i=1;i<=15;i++){
    if(i%2!=0){
        console.log("odd number=",i)
    }
}

// even number 
for(let i=1;i<=15;i++){
    if(i%2==0){
        console.log("even number=",i)
    }
}

// multiplication of 5
for(let i=5;i<=50;i=i+5){
    console.log(i)
}

// nested loop
for(let i=1;i<=2;i++){
    for(let j=1;j<=2;j++){
        console.log(j)
    }
}

// while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}


// game  
const favmovie="avtar";
let guess=prompt("enter movie name=");
while((guess!=favmovie)&&(guess!='quit')){
    guess=prompt("wrong guess please try again =");
}
if(guess==favmovie){
    console.log("cograts")
}

for(let i=1;i<10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}

// loops with array 
let fruits=["mango","banana","apple"];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}


// for of loop 
let fruits1=["mango","banana","apple"];
for(list of fruits1){
    // console.log(fruits1)
    console.log(list)
}

for(char of "yash kalpana"){
    console.log(char);
}


