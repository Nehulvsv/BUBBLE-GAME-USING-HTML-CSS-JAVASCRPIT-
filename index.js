var score = 0
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function makeBubbles() {
    var clutter = "";
    for(var i = 1 ; i <= 168; i++){
        var numinbubble = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${numinbubble}</div>`;
    }
    document.querySelector("#bottom").innerHTML = clutter;
}
function gameover() {
    document.getElementById("end").style.visibility = "visible" ;
   
}   
var timer = 60;  
function runTime(){
    var timerint = setInterval(function(){
        if (timer > 0){
            timer--;
            document.querySelector("#times").textContent=timer;
        } else {
            clearInterval(timerint)
            document.querySelector("#bottom").innerHTML = "";
            
            gameover();
        }
    },1000);
    
}
var numhit = 0 ;
function runHit(){
    numhit= Math.floor(Math.random()*10) ;
    document.querySelector("#hitval").textContent = numhit ;

}

document.querySelector("#bottom").addEventListener("click" , function(e){ 
    var clikednum = Number(e.target.textContent);
    if(clikednum === numhit){ 
        increasescore();
        makeBubbles();
        runHit();
    }else{
        console.log("error");
    }
});
runTime()
makeBubbles()
runHit()

function reset(){
    timer = 60 ;
     document.querySelector("#times").textContent = timer;
    score = 0;
     document.querySelector("#scoreval").textContent = 0;
    makeBubbles()
    runHit()
     document.getElementById("end").style.visibility = "hidden" ;
    
}
