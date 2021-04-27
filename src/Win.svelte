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
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-items:center;
}

h1{
	font-size: calc(40px + (200 - 40) *  ((100vw - 300px)/(1600 - 300)));
	margin-top: 1em;
	margin-bottom: 0;
}

h2{
	font-size: calc(16px + (50 - 16) * ((100vw - 300px)/(1600 - 300)));
	margin-top: 0.1em;
	letter-spacing: 2px;
}

a{
	text-decoration: none;
	color: white;
}
</style>