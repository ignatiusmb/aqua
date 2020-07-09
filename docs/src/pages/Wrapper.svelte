<main>
	<slot />
</main>

<style>
	main {
		max-width: 84em;
		display: grid;
		gap: 2em;
		grid-template-columns: minmax(0, 1fr);
		align-items: flex-start;
		padding: 0 2em;
		margin: 2em auto;
	}
	@media only screen and (min-width: 769px) {
		main {
			grid-template-columns: minmax(12em, 20%) minmax(0, 1fr);
		}
	}
</style>
