var hitrn = 0
var score = 0;
function makeBubb(){
  clut = ""
  for(var i = 1;i<=168;i++){
    var rn = Math.floor(Math.random()*10)
    clut += `<div class = "bubble">${rn}</div>`
    }
  document.querySelector("#pbtm").innerHTML = clut
}
  
function scoorex(){
  score+=10;
  document.querySelector("#scoreval").textContent = score
}

function newhit(){
  hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent = hitrn
}
var timer = 30;
function timerF(){
  var timerint = setInterval(function(){
    if(timer>0){
      timer= timer-1
    document.querySelector("#timeval").textContent = timer
    }else{
      clearInterval(timerint)
      document.querySelector("#pbtm").innerHTML = `<h1 style = "color:#2e2e52"> Game Over!! <br>Your score is ${score}</br> </h1>`
    }
    var i = 0;
    function dis(){
      if(timer<5 && timer>0){
        var elem = document.querySelector("#timeval")
      var bgcolor = ["Red","White"]
      elem.style.backgroundColor=bgcolor[i]
      i=(i+1)%bgcolor.length
    }
    }
    setInterval(dis,100)
  },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
  var cn = Number(dets.target.textContent)
  if(hitrn===cn){
    scoorex()
    makeBubb()
    newhit()
  }
})
timerF()
makeBubb()
newhit()



