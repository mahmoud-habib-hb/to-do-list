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
