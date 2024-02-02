let strbtn=document.querySelector(".button");
let gamest=document.querySelector(".gameStatement");
let gameboard=document.querySelector(".board");
let gameplay=false;
let turn="X";
let count = 0;
let allcells=document.querySelectorAll(".cell");
strbtn.addEventListener("click",function(){
    if(gameplay==true)
    {
        gameplay=false;
        strbtn.innerHTML="Start";
        strbtn.style.background="blue";
        gamest.innerHTML="";
    }
    else
    {
        gameplay=true;
        count=0;
        strbtn.innerHTML="Press to restart";
        strbtn.style.background="red";
         gamest.innerHTML = "X turns";
    }
      
});

//used event deligation for next line
gameboard.addEventListener("click",function(event){
    let targetEle=event.target;
    if(gameplay==true && targetEle.innerHTML=="")
    {
        targetEle.innerHTML=turn;
        count++;
        if(turn == "X")
        {
            turn = "0";
        }
        else{
            turn = "X";
        }
        gamest.innerHTML=turn+"'s turn"

         let winRes = checkwinner();
      

        if(winRes==1){ // zero is winner 
            gamest.innerHTML = "0 Wins ";
            clearAll();
            restartTheGame();  
        }
        else if( winRes == 2 ){ // x is winner 
            gamest.innerHTML = "X Wins ";
            clearAll();
            restartTheGame();
        }
        else if(count==9){
            gamest.innerHTML="tie";
            clearAll();
             restartTheGame();
        }
    }
});
function checkwinner()
{
   console.log("function call");
    if((allcells[0].innerHTML=="0" && allcells[1].innerHTML=="0" && allcells[2].innerHTML=="0")||
    (allcells[3].innerHTML=="0" && allcells[4].innerHTML=="0" && allcells[5].innerHTML=="0")||
    (allcells[6].innerHTML=="0" && allcells[7].innerHTML=="0" && allcells[8].innerHTML=="0")||
    (allcells[0].innerHTML=="0" && allcells[3].innerHTML=="0" && allcells[6].innerHTML=="0")||
    (allcells[1].innerHTML=="0" && allcells[4].innerHTML=="0" && allcells[7].innerHTML=="0")||
    (allcells[2].innerHTML=="0" && allcells[5].innerHTML=="0" && allcells[8].innerHTML=="0")||
    (allcells[0].innerHTML=="0" && allcells[4].innerHTML=="0" && allcells[8].innerHTML=="0")||
    (allcells[2].innerHTML=="0" && allcells[4].innerHTML=="0" && allcells[6].innerHTML=="0"))
      {
        return 1;
    }
    else if((allcells[0].innerHTML=="X" && allcells[1].innerHTML=="X" && allcells[2].innerHTML=="0")||
    (allcells[3].innerHTML=="X" && allcells[4].innerHTML=="X" && allcells[5].innerHTML=="X")||
    (allcells[6].innerHTML=="X" && allcells[7].innerHTML=="X" && allcells[8].innerHTML=="X")||
    (allcells[0].innerHTML=="X" && allcells[3].innerHTML=="X" && allcells[6].innerHTML=="X")||
    (allcells[1].innerHTML=="X" && allcells[4].innerHTML=="X" && allcells[7].innerHTML=="X")||
    (allcells[2].innerHTML=="X" && allcells[5].innerHTML=="X" && allcells[8].innerHTML=="X")||
    (allcells[0].innerHTML=="X" && allcells[4].innerHTML=="X" && allcells[8].innerHTML=="X")||
    (allcells[2].innerHTML=="X" && allcells[4].innerHTML=="X" && allcells[6].innerHTML=="X"))
    {
        return 2;
    }  
}
function clearAll()
{
    for(let i=0;i<allcells.length;i++)
    {
        allcells[i].innerHTML=" ";
    }
}
function restartTheGame() {
    strbtn.disabled = true;
    setTimeout(() => {
      strbtn.disabled = false;
      strbtn.click();
    }, 1000);
  }