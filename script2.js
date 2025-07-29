

let scoreboard=document.querySelector('.side2 .value')
let rockbtn=document.querySelector(".img").children[0]
let paperbtn=document.querySelector(".img").children[1]
let scissorbtn=document.querySelector(".img").children[2]
let spockbtn=document.querySelector(".img").children[3];
let lizardbtn=document.querySelector(".img").children[4]
let firststepdiv=document.querySelector('.firststep')
let secondstepdiv=document.querySelector('.secondstep')
let youpickimg=document.querySelector('.youpick')
let compickimg=document.querySelector('.computerpick')
let result=document.querySelector('.result>p>span')
let resultdiv=document.querySelector('.result')
let score=0;
let comdiv=document.querySelectorAll('.side2')[1].querySelector('p')
let comscore=0;
let playagain=document.querySelector('.result>button')
let rulebtn=document.querySelector('.rules')
let rulediv=document.querySelector('.rulediv')
let closerulediv=document.querySelector('.rulediv').firstElementChild

firststepdiv.style.display='block'

rulebtn.addEventListener('click',()=>{
    rulediv.style.display='block'
})

closerulediv.addEventListener('click',()=>{
    rulediv.style.display='none'
})



rockbtn.addEventListener("click",()=>{
    userslect('rock',rockbtn)
})
paperbtn.addEventListener("click",()=>{
    userslect('paper',paperbtn)
})
scissorbtn.addEventListener("click",()=>{
    userslect('scissor',scissorbtn)
})
spockbtn.addEventListener("click",()=>{
    userslect('spock',spockbtn)
})
lizardbtn.addEventListener("click",()=>{
    userslect('lizard',lizardbtn)
})


async function  userslect(id,image){
    console.log(id,image)
    firststepdiv.style.display='none'
    secondstepdiv.style.display='flex'
    let imgpathY;
    imgpathY=image.querySelector('img').getAttribute('src')
     youpickimg.src=`${imgpathY}`

     let any=Math.round(Math.random()*4);
    let comslect;
    compickimg.parentElement.style.background='black'
    compickimg.parentElement.style.borderColor='black'
    resultdiv.style.width='0px';

    await setTimeout(()=>{
        compickimg.parentElement.style.background='wheat'
       compickimg.parentElement.style.borderColor='red'

         
    if(any==0){
        compickimg.src=`images/icon-rock.svg`
        comslect='rock'
    }
    else if(any==1){
        compickimg.src=`images/icon-paper.svg`
         comslect='paper'
    }
    else if(any==2){
        compickimg.src=`images/icon-scissors.svg`
         comslect='scissor'
    }
    else if(any==3){
        compickimg.src=`images/icon-spock.svg`
         comslect='spock'
    }
    else{
        compickimg.src=`images/icon-lizard.svg`
        comslect='lizard'
    }
    calculateresult(id,comslect)

    },1000)
     
   

   
   
    
}
function calculateresult(you,com){
    console.log(you,com)

   setTimeout(()=>{
    resultdiv.style.width='100px'
    if(you=='rock'){
        if(com=='paper'){
         result.innerHTML='Loss'
         score--;
         comscore++;
        }
        if(com=='scissor'){
         result.innerHTML='Win'
         score++;
         comscore--;
 
        }
        if(com=='rock'){
         result.innerHTML='Draw'
        }
        if(com=='spock'){
            result.innerHTML='Loss'
            score--
            comscore++;
        }
        if(com=='lizard'){
            result.innerHTML='Win'
            score++;
            comscore--;
        }
        
     }
     else if(you=='paper'){
        
         if(com=='paper'){
             result.innerHTML='Draw'
            }
            if(com=='scissor'){
             result.innerHTML='Loss'
             score--
             comscore++;
     
            }
            if(com=='rock'){
             result.innerHTML='Win'
             score++;
             comscore--;
            }
            if(com=='spock'){
                result.innerHTML='Win'
                score++;
                comscore--;
            }
            if(com=='lizard'){
                result.innerHTML='Loss'
                score--;
                comscore++;
            }
     }
     else if(you=='scissor'){
        
         if(com=='paper'){
             result.innerHTML='Win'
             score++;
             comscore--;
            }
            if(com=='scissor'){
             result.innerHTML='Draw'
     
            }
            if(com=='rock'){
             result.innerHTML='Loss'
             score--;
             comscore++;
            }
            if(com=='spock'){
                result.innerHTML='Loss'
                score--;
                comscore++;
            }
            if(com=='lizard'){
                result.innerHTML='Win'
                score++;
                comscore--;
            }

    }
    else if(you=='spock'){
        
        if(com=='paper'){
            result.innerHTML='Loss'
            score--;
            comscore++;
           }
           if(com=='scissor'){
            result.innerHTML='Win'
            score++;
            comscore--;
    
           }
           if(com=='rock'){
            result.innerHTML='Win'
            score++;
            comscore--;
           }
           if(com=='spock'){
               result.innerHTML='Draw'
              
           }
           if(com=='lizard'){
               result.innerHTML='loss'
               score--;
               comscore++;
           }

   }
   else{
        
    if(com=='paper'){
        result.innerHTML='Win'
        score++;
        comscore--;
       }
       if(com=='scissor'){
        result.innerHTML='Loss'
        score--;
        comscore++;

       }
       if(com=='rock'){
        result.innerHTML='Loss'
        score--;
        comscore++;
       }
       if(com=='spock'){
           result.innerHTML='Win'
           score++;
           comscore--;
          
       }
       if(com=='lizard'){
           result.innerHTML='Draw'
           
       }

}

    if(score>-1){
         scoreboard.innerText=score;
        
    }else{
        score=0;
    }

    if(comscore>-1){
        comdiv.innerText=comscore;
       
   }else{
       comscore=0;
   }
   
       
   
   }
,1000)
   
}
playagain.addEventListener('click',()=>{
    secondstepdiv.style.display='none'
    firststepdiv.style.display='flex'
})



