const r=document.getElementById("red");
const b=document.getElementById("blue");
const g=document.getElementById("green");
const display=document.getElementById("sub");
r.addEventListener("click",()=>{
// display.classList.toggle("red1");
display.style.backgroundColor="red";
})
b.addEventListener("click",()=>{
// display.classList.toggle("blue1");
display.style.backgroundColor="blue";
})
g.addEventListener("click",()=>{
// display.classList.toggle("green1");
display.style.backgroundColor="green";
})