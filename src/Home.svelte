<svelte:head>
  <title>Home</title>
</svelte:head>

<style>

body{
  background-color: rgb(232, 92, 54);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1{
  font-family: "Assembled From Scratch", sans-serif;
  color: white;
  padding: 0.5em;
  margin-top: 50px;
  width: 70vw;
  font-size: calc(32px + (100 - 25) * ((100vw - 300px) / (1600 - 300)));
  border: 10px solid white;
  text-align: center;
  word-wrap: break-word;
}

h2{
  font-family: "Lemon/Milk", sans-serif;
  background-color: white;
  color: rgb(232, 92, 54);
  width: 40vw;
  font-size: calc(16px + (50 - 16) * ((100vw - 300px) / (1600 - 300)));
  padding: 0.3em;
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