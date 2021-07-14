<svelte:head>
  <title>You Lose!</title>
  <link rel="stylesheet" type="text/css" href="./styles/lose.css">
</svelte:head>

<body>
  <h1>Game Over!</h1>
  <a href="#/"><h2>Back to Home</h2></a>
</body>

<style>

body{
	background-color: rgb(38, 38, 38);
	color: white;
	font-family: "Lemon/Milk", sans-serif;
	text-align: center;	
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-items:center;

}

h1{
  font-size: clamp(2em, 10vw + 1em, 10em);
	margin-top: 1em;
	margin-bottom: 0;
}

h2{
	font-size: clamp(1em, 5vw + 1em, 5em);
	margin-top: 0.3em;
	letter-spacing: 2px;
}

a{
	text-decoration: none;
	color: white;
}
</style>
