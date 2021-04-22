<svelte:head>
  <title>Home</title>
</svelte:head>

<style>

body{
  background-color: rgb(232, 92, 54);
  height: 100%;
}

h1{
  font-family: "Assembled From Scratch", sans-serif;
  color: white;
  padding: 0.5em;
  margin: auto;
  margin-top: 50px;
  width: 10em;
  font-size: 7em;
  border: 10px solid white;
  text-align: center;
  overflow: hidden;
  word-wrap: break-word;
}

h2{
  font-family: "Lemon/Milk", sans-serif;
  background-color: white;
  color: rgb(232, 92, 54);
  width: 24em;
  font-size: 3em;
  padding: 0.3em;
  margin: auto;
  margin-top: 0.3em;
  text-align: center;
  word-wrap: break-word;
}

a{
  text-decoration: none;
}
</style>

<body>
  <h1>Word Unscrambler!</h1>
  <a href= "#/game/1"><h2>Unscramble!</h2></a>
</body>