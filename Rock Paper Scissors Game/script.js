const btn=document.querySelectorAll("button")
// const resulte1= document.getElement("result")

let playerscore=0
let computerscore=0
btn.forEach((button)=>{

   
    button.addEventListener("click",()=>{
        const result=palyground(button.id,computerplay());
       document.querySelector(".result") .innerText=result;

        
        
    });

});






function computerplay(){
    const choice=["rock","paper","scissors"];
    const randomchoice=Math.floor(Math.random()*choice.length);
    return choice[randomchoice];
}
function palyground(playerselection,computerselection) {
    if (playerselection===computerselection) {
        return "it's a tie"
    }
    else if((playerselection==="scissors" && computerselection==="paper")||(playerselection==="rock" && computerselection==="scissors" )|| (computerselection==="rock" && playerselection==="paper") ) {
        playerscore++;
        document.getElementById("userscore") .innerText=playerscore;
       return ("You win! "+ playerselection + " beats "
+ computerselection)


    
} else {
    computerscore++;
    document.getElementById("computerscore") .innerText=computerscore;
return ("You lose! " +"computer choice " + computerselection + 
" beats " +"your choice "+ playerselection)

}
}