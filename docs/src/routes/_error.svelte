<script>
	export let status, error;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<article>
	<section>
		<h1>{status}</h1>
		<p>{error.message}</p>
	</section>

	{#if process.dev && error.stack}
		<section>
			<pre>{error.stack}</pre>
		</section>
	{/if}
</article>

<style>
	section {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	section:first-of-type {
		text-align: center;
	}

	h1 {
		font-size: 5em;
	}
	p {
		font-size: 2em;
	}
</style>
