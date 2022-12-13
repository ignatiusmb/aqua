<script>
	import '@ignatiusmb/styles/core.css';
	import '@ignatiusmb/aqua/styles/var.css';
	import '@ignatiusmb/aqua/styles/code.css';
	import './fonts.css';

	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
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
