<script>
  import { scrambleChecker } from './scripts/scrambling.js'
  import data from './gamedata.js'
  import { replace } from 'svelte-spa-router'

  export let params = {}; // the router takes params from the url into this object
  const lvl = params.level;
  const lvlData = data.loadLevel(lvl);
  const word = data.getAvails(lvl);
  const validWords = lvlData.validWords;

  let lives = 5;
  let score = 0;
  let currentWord = '';
  let avails = word;
  let usedWords = [];


  function addLetter(letter) {
    currentWord = currentWord.concat(letter);
    avails = avails.split('').filter(l => l != letter).join('');
  }

  function reset(){
    currentWord = "";
    avails = word;
  }

  function scramble(){
    avails = scrambleChecker(avails, validWords);
  }

  function check() {
    if (validWords.includes(currentWord)) {
      if (!usedWords.includes(currentWord)) {
				// replace moves to the desired url only on the next tick of the event loop
				// so without putting it in a setTimeout to force it, nothing will happen initially
				// if the user wins or loses the level
				if (score === validWords.length - 1) { setTimeout(() => replace(`/win/${parseInt(lvl) + 1}`), 0); }
				else { score++; usedWords = usedWords.concat(currentWord) }
			}
    } else {
			if (lives === 1) { setTimeout(() => replace('/lose'), 0); }
			else lives--;
		}
    reset();
  }
</script>

<body>
  <header>
    <p><span style="font-size: 2em; position: relative; bottom: 0.18em;">{lvl} !</span></p>
    <div style="text-align: center;"><p id="counter" style="display: inline-block;"> {score} / {validWords.length} Words</p></div>
    <p id="lives">Lives: {lives}</p>
  </header>

  <h1 id="currentWord">{currentWord}</h1>

  <div style="text-align: center;">
    {#each avails as letter}
    <input type="text" class="letter" on:click={event => {addLetter(event.target.value); event.target.blur();}} value={letter}/>
    {/each}
  </div>

  <div style="text-align: center;" id="buttons">
    <button on:click={scramble}>Scramble!</button>
    <button on:click={reset}>Clear!</button>
    <button on:click={check}>Submit!</button>
  </div>
</body>

<style>

body{
	background-color: rgb(255, 192, 0);
	height: 100%;
}

h1{
	width: 8em;
	height: 1.5em;
	font-size: 7em;
	color: white;
	background-color: rgb(51, 63, 80);
	box-shadow: 0px 10px rgba(0, 0, 0, 0.65);
	text-align: center;
	padding-bottom: 0.5em;
	padding-top: 1.5em;
	margin: auto;
	font-family: "Assembled From Scratch", sans-serif;
}

input{
	border: none;
	text-decoration: none;
	font-family: "Lemon/Milk", sans-serif;
	font-size:4em;
	display: inline-block;
	width: 1.3em;
	height: 1.3em;
	text-align: center;
	color: white;
	padding: 0.4em;
	background-color: rgb(84, 130, 53);
	box-shadow: 0px 10px rgba(0, 0, 0, 0.65);
	margin: 0.5em;
	margin-top :1em;
	position: relative;
	bottom: 0;
	transition: background-color 0.1s, box-shadow 0.1s, width 0.1s, bottom 0.1s;
}

input:hover{
	box-shadow: 10px 15px rgba(0, 0, 0, 0.65);
	background-color: rgb(20, 144, 106);
	width: 1.6em;
	bottom: 10px;
}

button{
	color: white;
	font-family: "Lemon/Milk", sans-serif;
	margin: 0.5em;
	padding: 0.1em 1.3em;
	background-color: rgb(232, 92, 54);
	box-shadow: 0px 10px rgba(0, 0, 0, 0.65);
	border: 0px;
	font-size: 2em;
	display: inline-block;
	transition: background-color 0.1s, box-shadow 0.1s;
}

button:hover{
	background-color: rgb(109, 68, 140);
	box-shadow: 10px 15px rgba(0, 0, 0, 0.65);
}

button{
	display: inline-block;
}

header{
	height: 9em;
}

p{
	float: left;
	font-family: "Lemon/Milk", sans-serif;
	margin: 0;
	margin-left: 10px;
	color: rgb(51, 63, 80);
	font-size: 4em;
}

#lives{
	color: white;
	background-color: rgb(232, 92, 54);
	margin-right: 0.3em;
	width: 6em;
	text-align: center;
	margin-top: 0.7em;
	font-size: 	3em;
	float: right;
	padding: 0.01em 0.5em;
	box-shadow: 10px 10px rgba(0, 0, 0, 0.65);
}

#counter{
	color: white;
	background-color: rgb(232, 92, 54);
	margin-right: 0.4em;
	width: 7em;
	padding: 0.01em 0.5em;
	margin-top: 0.7em;
	font-size: 	3em;
	float: right;
	box-shadow: 10px 10px rgba(0, 0, 0, 0.65);
}

</style>