<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '@ignatiusmb/styles/core.css';
	import '@ignatiusmb/aqua/styles/var.css';
	import '@ignatiusmb/aqua/styles/code.css';
	import '$lib/styles/fonts.css';
</script>

<Header />

<slot />

<Footer />

<style>
	:global(body) {
		min-height: 100vh;
		display: grid;
		font-family: var(--aqua-default);
		background-color: var(--aqua-bg-light);
	}

	:global(a) {
		color: var(--aqua-primary);
	}
</style>
