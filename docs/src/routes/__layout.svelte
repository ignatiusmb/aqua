<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '@ignatiusmb/aqua/lib/aqua.cbs.js';
	import '@ignatiusmb/aqua/lib/aqua.min.css';
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
