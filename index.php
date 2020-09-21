<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css">
	<link rel="shortcut icon" type="image/x-icon" href="images/memory.ico" />
	<title>AFP1</title>
</head>

<?php 
	echo "hi";
	function flip() {
		log("clicked box2");
	 }
?>

<body>
	<div class="wrapper">
	  <a href="#"><div class="box 1">1</div></a>
	  <div onclick="flip()" class="box 2">2</div>
	  <div class="box 3">3</div>
	  <div class="box 4">4</div>
	  <div class="box 5">5</div>
	  <div class="box 6">6</div>
	  <div class="box 7">7</div>
	  <div class="box 8">8</div>
	  <div class="box 9">9</div>
	  <div class="box 10">10</div>
	  <div class="box 11">11</div>
	  <div class="box 12">12</div>
	  <div class="box 13">13</div>
	  <div class="box 14">14</div>
	  <div class="box 15">15</div>
	  <div class="box 16">16</div>
	</div>
</body>
</html>

