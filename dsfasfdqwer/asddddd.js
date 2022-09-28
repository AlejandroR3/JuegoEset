function dibujar(){
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var nave = new Image()



nave.src = "CACA/naveBuena.png";

nave.onload = function(){
    ctx.drawImage(nave, 10, 10);
  }
}