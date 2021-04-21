<svelte:head>
  <title>You Win!</title>
</svelte:head>

<script>
  export let params = {};
	const level = params.level;
</script>

<body>
	{#if level > 10}
	<h1>You Won The Game!</h1>
	{:else}
	<h1>You Win!</h1>
	<a href={`#/game/${level}`}><h2>Next Level</h2></a>
	{/if}
	<a href='#/'><h2>Back to Home</h2></a>
</body>

<style>

body{
	background-color: rgb(84, 130, 53);
	color: white;
	font-family: "Lemon/Milk", sans-serif;
	text-align: center;
	margin: auto;
	height: 100%;
}

h1{
	font-size: 10em;
	margin-top: 1em;
	margin-bottom: 0;
}

h2{
	font-size: 2em;
	margin-top: 0.3em;
	letter-spacing: 2px;
}

a{
	text-decoration: none;
	color: white;
}
</style>