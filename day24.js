// first video 
let div=document.querySelector('div');
let ul1=document.querySelector('ul');
let lis=document.querySelectorAll('li');
div.addEventListener("click",function(){
    console.log("click div");
});
ul1.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("click ul");
});
for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("click li");
    });
}


//  second video 
let btn=document.querySelector("button");
let ul=document.querySelector('ul');
let inp=document.querySelector('input');
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});
let delBtns=document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par)
        par.remove();
    });
}







// third video 
ul.addEventListener("click",function(event){
    console.log(event.target);
    console.log("click");
});