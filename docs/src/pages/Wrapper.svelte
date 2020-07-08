<main>
	<slot />
</main>

<style>
	main {
		max-width: 84em;
		display: grid;
		gap: 1em;
		padding: 2em;
		margin: 2em auto;
	}
	@media only screen and (min-width: 769px) {
		main {
			grid-template-columns: minmax(12em, 25%) 1fr;
		}
	}
</style>
