<script>
	import IconList from '../svelte/IconList.svelte';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import '@ignatiusmb/aqua/lib/aqua.min.css';
	import '../styles/fonts.css';
</script>

<IconList />

<Header />
<slot />
<Footer />

<style>
	:global(#sapper) {
		min-height: 100vh;
		display: grid;
		font-family: var(--aqua-default);
		background-color: var(--aqua-bg-light);
	}

	:global(a) {
		color: var(--aqua-primary);
	}
</style>
