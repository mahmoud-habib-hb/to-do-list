let input=document.querySelector(".input");
let add=document.querySelector(".add");
let result=document.querySelector(".result");
 
 if(localStorage.getItem("tasks")){
  result.innerHTML=localStorage.getItem("tasks");
  let p =document.querySelectorAll("p");
  p.forEach(function(e){
    e.onclick=function(e){
       e.target.parentNode.remove();
    save();
    console.log(e.target.parentElement)
    }
    })
 }
add.onclick=function(){
    if(input.value !==""){
      let div =document.createElement("div");
      let p =document.createElement("p");
      p.appendChild(document.createTextNode("select"));
      div.append(input.value);
      div.className="tasks";
      div.appendChild(p);
      result.appendChild(div);
      input.value="";
      save();
      p.onclick=function(e){
      e.target.parentNode.remove();
      save();
      }
    }
}

function save(){
  window.localStorage.setItem("tasks",result.innerHTML);
  
}
/* */
let navp=document.querySelector(".nav")
let body=document.querySelector("body")
let nav=document.querySelector("nav")
navp.onclick = function(){
  if(body.style.background==="white"){
    black();
  }
  else{
    color();
  }
} 
 
  function color(){
    body.style.background="white";
    nav.style.background="#0d6efd";
    add.style.background="#0d6efd";
    result.style.background="#0d6efd";
  
  }
  
function black(){
  body.style.background="#444";
  nav.style.background="#007425";
  add.style.background="rgb(1, 110, 1)";
  result.style.background="#000000ea";

}