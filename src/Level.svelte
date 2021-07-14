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
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Germania+One&family=Josefin+Sans:wght@700&family=Montserrat:wght@800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@900&display=swap" rel="stylesheet">
  <header>
    <h1>{lvl}!</h1>
    <div id="counters">
    <div class="counter">{score} / {validWords.length} <br> words</div>
      <div class="counter">{lives} <br> lives</div>
    </div>
  </header>

  <h2 id="currentWord">{currentWord}</h2>

  <div style="text-align: center;">
    {#each avails as letter}
      <input type="text" class="letter" on:click={event => {addLetter(event.target.value); event.target.blur();}} value={letter}/>
    {/each}
  </div>

  <div id="buttons">
    <button on:click={scramble}>Scramble!</button>
    <button on:click={reset}>Clear!</button>
    <button on:click={check}>Submit!</button>
  </div>
</body>

<style>
  body{
    background-color: #FFC000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: space-around;
  }

  header{
    display: block;
    width: 97vw;
    height: 15vh;
    margin-bottom: 5%;
  }

  h1{
    color: #181A56;
    font-family: "Source Code Pro";
    font-size: clamp(5em, 6vw, 6em);
    margin: 0;
    float: left;
  }

  .counter{
    width: 10%;
    height: 90%;
    text-align: center;
    float:right;
    font-size: clamp(1em, 0.15em + 3vw, 2em);
    background-color: #E85C36;
    color: #FAEDED;
    font-family: "Montserrat";
    margin: 5px;
    padding: 20px;
    border-radius: 20px;
  }

  #currentWord{
    background-color: #333F50;
    color: #FAEDED;
    font-family: "Montserrat";
    font-size: clamp(4em, 0.05vw, 5em);
    height: 25vh;
    width: 75vw;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    line-height: 25vh;
    margin-bottom: 3%;
    margin-top: 5px;
  }

  .letter {
    border: none;
    background-color: #E85C36;
    color: #FAEDED;
    font-family: "Germania One";
    text-align: center;
    text-transform: uppercase;
    font-size: clamp(1em, 0.05em + 5vw, 2.5em);
    width: 7vw;
    margin-right: 5px;
    margin-left: 5px;
  }

  button {
    border: none;
    background-color: #533864;
    color: #FAEDED;
    font-family: "Josefin Sans";
    text-align: center;
    font-size: clamp(1em, 0.05em + 3vw, 2em);
    padding: 15px;
  }
</style>
