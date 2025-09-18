const add = document.getElementById('add');
const mul = document.getElementById('mul');
let res = document.getElementById("result");
const reset=document.getElementById("res");
// let ans=parseFloat(document.getElementById("result").value);

add.addEventListener("click", (e) => {
  e.preventDefault(); // stop form submit
  let a = parseFloat(document.getElementById("input1").value);
  let b = parseFloat(document.getElementById("input2").value);
 let ans=parseFloat(res.innerText);
  res.innerHTML = ans+a + b;
});

mul.addEventListener("click", (e) => {
  e.preventDefault();
  let a = parseFloat(document.getElementById("input1").value);
  let b = parseFloat(document.getElementById("input2").value);
   let ans=parseFloat(res.innerText);
  res.innerHTML =ans* a * b;
});

reset.addEventListener('click',(e)=>{
    e.preventDefault();
    res.innerText=0;

}) 