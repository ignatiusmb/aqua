<script>
	export let sections;
</script>

<aside>
	{#each sections as { slug, title }, i}
		<a href="#{slug}" data-index={i + 1}>{title}</a>
	{/each}
</aside>

<style>
	aside {
		position: sticky;
		top: 0;
		display: none;
		align-content: flex-start;
		padding-top: 2em;
	}
	a {
		line-height: 4ch;
	}
	a::before {
		content: attr(data-index);
		margin-right: 0.75em;
		font-family: var(--aqua-monospace);
	}

	@media only screen and (min-width: 769px) {
		aside {
			display: grid;
		}
	}
</style>
