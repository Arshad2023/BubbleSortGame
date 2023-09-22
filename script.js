var hitrn = 0
var score = 0
function makeBubb(){
  clut = ""
  for(var i = 1;i<=168;i++){
    var rn = Math.floor(Math.random()*10)
    clut += `<div class = "bubble">${rn}</div>`
    }
  document.querySelector("#pbtm").innerHTML = clut
}
function scoorex1(){
  score=0;
  document.querySelector("#scoreval").textContent = score
}
  
function scoorex(){
  score+=10;
  document.querySelector("#scoreval").textContent = score
}

function newhit(){
  hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent = hitrn
}
var fn;
function timerF(){
  var timer=31;
  fn=setInterval(function(){
    if(timer>0){
      timer= timer-1
    document.querySelector("#timeval").textContent = timer
    }else{
      document.querySelector("#pbtm").innerHTML = `<h1 style = "color:#2e2e52"> Game Over!! <br>Your score is ${score}</br> </h1>`
      document.querySelector("#pbtm").style.pointerEvents="none"
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
  }else{
    document.querySelector("#pbtm").innerHTML = `<h1 style = "color:#2e2e52"> Wrong Hit!! <br>Your score is ${score}</br> </h1>`
    document.querySelector("#pbtm").style.pointerEvents = "none"
    clearInterval(fn)
  }
})

document.querySelector("button").addEventListener("click",function(){
  clearInterval(fn)
  timerF()
  scoorex1()
  makeBubb()
  newhit()
  document.querySelector("#pbtm").style.pointerEvents = "auto"
})
const phone = window.matchMedia( '( max-height: 580px )' )
if(phone.matches){
    function makeBubb(){
  clut = ""
  for(var i = 1;i<=35;i++){
    var rn = Math.floor(Math.random()*10)
    clut += `<div class = "bubble">${rn}</div>`
    }
  document.querySelector("#pbtm").innerHTML = clut
}
}
const pc = window.matchMedia( '( min-height: 800px )' )
if(pc.matches){
    function makeBubb(){
  clut = ""
  for(var i = 1;i<=55;i++){
    var rn = Math.floor(Math.random()*10)
    clut += `<div class = "bubble">${rn}</div>`
    }
  document.querySelector("#pbtm").innerHTML = clut
}
}





timerF()
makeBubb()
newhit()



