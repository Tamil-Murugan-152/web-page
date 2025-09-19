if(confirm("shall we play game??")){
    let name=prompt("choose rock,paper,scissor ?");
    name=name.trim().toLowerCase();
    if(name.length===0 ) {confirm("enter correct Input")?location.reload():"thank you";
    }
    else{
    let comp=Math.floor(Math.random()*3)+1; 
    let result; 
    switch(comp){
        case 1:
            result="rock"; 
            break;
        case 2:
            result="paper";
            break;
        case 3:
            result="scissor"; 
            break;
}

let ans=name===result?"tie":name==="rock"&&result==="scissor"?"you wins":name==="paper"&&result==="rock"?"you wins":name==="scissor"&&result==="paper"?"you wins":"you lose.";
confirm(ans)?location.reload():"thank you";  
    }
}
else{ 
    alert("Thank you");
}  
