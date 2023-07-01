var button=document.getElementById("buttons");
var res=document.getElementById("result")
button.addEventListener("click",foo);
document.body.append(button);
function foo(){
    fetch ('https://randomfox.ca/floof/')
    .then((data)=>data.json())
    .then((data1)=>{
       res.innerHTML=`<img src="${data1.image}" />`
    });
}