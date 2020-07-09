<script>
	import Link from '../svelte/Link.svelte';
	import Icon from '../svelte/Icon.svelte';
	import { version } from '../stores';
</script>

<header>
	<h1>Aqua</h1>
	<h3>Version v{$version}</h3>
	<Link href="https://github.com/ignatiusmb/aqua/" inherit invert>
		<Icon name="github" size="34" />
	</Link>
</header>

<style>
	header {
		height: 100vh;
		display: grid;
		gap: 1em;
		align-content: center;
		justify-content: center;
		background: #0082c8;
		background: -webkit-linear-gradient(to right, #000046, #1cb5e0);
		background: linear-gradient(to right, #000046, #1cb5e0);
		text-align: center;
		color: white;
	}
	h1 {
		font-size: 4rem;
		font-family: var(--aqua-heading);
	}
	h3 {
		font-size: 1.5rem;
		font-family: var(--aqua-monospace);
	}
</style>
