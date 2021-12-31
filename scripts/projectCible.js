// global variable for the project
// default initial width and heigth for the target
var TARGET_WIDTH = 40;
var TARGET_HEIGHT = 40;
// chrono management
// value of time in tenth of seconds
var time = 0;
// YOUR NAME HERE
var student="Hamza KHIAR"
// YOUR CODE BELOW
var terrain=document.getElementById("terrain");

var minute=parseInt(document.getElementById("minutes").innerText);
var seconds=parseInt(document.getElementById("seconds").innerText);
var tenth=parseInt(document.getElementById("tenth").innerText);


function stopWatch(){
    if (seconds==59) {
      document.getElementById("minutes").innerText=++minute;
        seconds=0;
    }if (tenth>=9) {
      document.getElementById("seconds").innerText=++seconds;
        tenth=0;
    }if (time==0) {
        document.getElementById("tenth").innerText=++tenth;
      }
    }
    function starter() {
  setInterval(stopWatch,100);
  createBall.removeAttribute("disabled")
}
var demarrer=document.getElementById("start")
demarrer.addEventListener("click",starter)



function creation() {
  var ball=document.createElement("canvas");
  ball.classList.add("target","on")
  function positioning() {
      var terrainStyle=window.getComputedStyle(terrain);
      var WIDTH=parseInt(terrainStyle.width);
      var HEIGHT=parseInt(terrainStyle.height);
      var x=Math.random()*(WIDTH-30);
      var y=Math.random()*(HEIGHT-30);
      return [x,y];
    };
    positioning();
    let [x,y]=positioning();
    ball.style.top=y+"px";
    ball.style.left=x+"px";
    var nbTarget=document.getElementById("nbtargets").value
      if (document.querySelectorAll(".target.on").length>=nbTarget) {
        createBall.setAttribute("disabled",true)
      }
    terrain.appendChild(ball)
    ball.addEventListener("click",()=>{
      ball.classList.add("hit")
    })
  }

var createBall=document.getElementById("create");
createBall.addEventListener("click",creation)



// var addBall=document.getElementById("create").addEventListener("click",)
