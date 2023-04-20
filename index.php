<?php
$sizeCh = 'M';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Clueguo Gameboard</title>
<link rel="stylesheet" href="css/w3modal.css">
<style>
.offscreenArt {
  display: none;
}
</style>
</head>
<body>

<canvas id="GameBoard" width="1500" height="1125"
style="border:4px solid black;">
Your browser does not support the HTML5 canvas tag.
</canvas>

<!-- "offscreen" images to be drawn into the canvas, not directly onto the page. -->
<img id="floor" src="images/guo-<?=$sizeCh?>/na clue flooring.png" class="offscreenArt">
<img id="courtyard" src="images/guo-<?=$sizeCh?>/courtyard.png" class="offscreenArt">
<img id="coraci" src="images/guo-<?=$sizeCh?>/coraci hall.png" class="offscreenArt">
<img id="hidden9" src="images/guo-<?=$sizeCh?>/hidden1.png" class="offscreenArt">
<img id="hidden16" src="images/guo-<?=$sizeCh?>/hidden2.png" class="offscreenArt">
<img id="player1" src="images/tokens/pawn_plum.png" class="offscreenArt">
<img id="arrow-left" src="images/arrow-left.png" class="offscreenArt">
<img id="arrow-right" src="images/arrow-right.png" class="offscreenArt">
<img id="arrow-up" src="images/arrow-up.png" class="offscreenArt">
<img id="arrow-down" src="images/arrow-down.png" class="offscreenArt">
<!-- end "offscreen" images meant for canvas -->

<div id="vid" class="modal">
<div class="modal-content">
  <center>
  <video id="myVideo" muted>
    <source id="myVideoSrc" src="" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  </center>
</div>
</div>

<script src="scripts/cluebase.js"></script>
</body>
</html>
