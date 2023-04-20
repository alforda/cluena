// -------------------------------------------
//   global data:
// -------------------------------------------
let player1 = {
  column: 7,
  row: 0
}

let arrows = [
  {dir: "left", column: 0, row: 0},
];

const size = 75; // dimensions of the indiv

// -------------------------------------------
//   functions:
//      drawArrows, drawFloor, drawImage,
//      drawPawns, drawRooms, movePawn,
//      playVideo, refresh
// -------------------------------------------
function drawArrows(){
  for ( var n = 0; n < arrows.length; n++ ){
    drawImage( `arrow-${arrows[n].dir}`, arrows[n].column * size, arrows[n].row * size );
  }
}

function drawFloor(){
  var canvas = document.getElementById("GameBoard");
  var ctx = canvas.getContext("2d");
  const columns = 20;
  const rows = 15;
  const colorA = "#ffffff"; // "#aa2244";
  const colorB = "#dddddd"; // "#aaeeaa";
  for ( var r = 0; r < rows; r++ ){
    const oddRow = r % 2 != 0;
    const color = oddRow ? colorA : colorB;
    ctx.fillStyle = color;
    for ( var c = 0; c < columns; c++ ){
      ctx.fillRect(c*size, r*size, size, size);
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.rect(c*size, r*size, size, size);
      ctx.stroke();
      ctx.fillStyle = ctx.fillStyle == colorA ? colorB : colorA;
    }
  }
}

function drawImage( id, x, y ){
  var canvas = document.getElementById("GameBoard");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById(id);
  ctx.drawImage( img, x, y );
}

function drawPawns(){
  drawImage( "player1", player1.column * size, player1.row * size);
}

function drawRooms(){
  drawImage("hidden9", 0, 0);
  drawImage("hidden16", 9*size, 0);
}

function movePawn(player, xSpaces, ySpaces){
  player.column += xSpaces;
  player.row += ySpaces;
  refresh();
}

function playVideo() {
  let videoFrame = document.getElementById("vid");
  videoFrame.style.display = "block";
  var video = document.getElementById("myVideo");
  var videoSource = document.getElementById("myVideoSrc");
  videoSource.src = "vidz/alford-denial.mp4";
  video.load();
  video.play();
}

function refresh(){
  drawFloor();
  drawRooms();
}

// -------------------------------------------
//   initialization call
// -------------------------------------------
window.onload = function(){
  refresh();
}
