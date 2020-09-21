<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css">
	<link rel="shortcut icon" type="image/x-icon" href="images/memory.ico" />
	<title>AFP1</title>
</head>

<body>
	<div class="wrapper">
	  <a href="#"><div class="box 1">1</div></a>
	  <div class="box 2" id=b2 onclick="flip()">2</div>
	  <div class="box 3" id=b3 onclick="flip()">3</div>
	  <div class="box 4" id=b4 onclick="flip()">4</div>
	  <div class="box 5" id=b5 onclick="flip()">5</div>
	  <div class="box 6" id=b6 onclick="flip()">6</div>
	  <div class="box 7" id=b7 onclick="flip()">7</div>
	  <div class="box 8" id=b8 onclick="flip()">8</div>
	  <div class="box 9" id=b9 onclick="flip()">9</div>
	  <div class="box 10" id=b10 onclick="flip()">10</div>
	  <div class="box 11" id=b11 onclick="flip()">11</div>
	  <div class="box 12" id=b12 onclick="flip()">12</div>
	  <div class="box 13" id=b13 onclick="flip()">13</div>
	  <div class="box 14" id=b14 onclick="flip()">14</div>
	  <div class="box 15" id=b15 onclick="flip()">15</div>
	  <div class="box 16" id=b16 onclick="flip()">16</div>
	</div>
</body>
</html>

<script>
function flip() {
	document.getElementById('b2').innerHTML = "xd";
}
</script>