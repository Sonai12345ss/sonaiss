 let userscore=0;
 let computerscore=0;
let btns=document.querySelectorAll(".btn");
console.log(btns);
const gencopmchoice = () =>{
    const opinion=["stone", "paper" ,"seger"];
    const randomidx=Math.floor(Math.random() * 3);
    return opinion[randomidx];

}
const msg=document.querySelector("#msg");
const user=document.querySelector("#yc");
const comp=document.querySelector("#cc");
const drowgame =() =>{
    console.log("game is drow please restart");
    msg.innerText="Game drow! please restart";
    msg.style.backgroundColor="aqua";
}
const showwinner = (youwin) =>{
    if(youwin=== true){
        userscore++;
        user.innerText=userscore;
        console.log("bhaenchod hum jite hay!");
        msg.innerText="you win!";
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++;
        comp.innerText=computerscore;
        console.log("computer jite hay sala!");
        msg.innerText="computer win!";
        msg.style.backgroundColor="red";
    }
}
const playgame= (userchoice) =>{
console.log("USERCHOICE =", userchoice);
const copmchoice=gencopmchoice();
console.log("COMPUTERCHOICE =", copmchoice);
if(userchoice===copmchoice){
    drowgame();
}else{
    let youwin = true;
    if(userchoice==="stone"){
       youwin= copmchoice==="paper"? false:true;
    }else if(userchoice==="paper"){
        youwin= copmchoice==="seger"?false :true ;
    }else{
        youwin = copmchoice==="stone"?false: true;
    }
    showwinner(youwin);
}
}
for(let btn of btns){
    btn.addEventListener("click" , () =>{
        const userchoice=btn.getAttribute("id");
        playgame(userchoice);
    });
}
