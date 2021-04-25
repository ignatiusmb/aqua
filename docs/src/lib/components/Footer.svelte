<script>
	import { Link } from 'svelement';
</script>

<footer>
	<section>
		<p>
			Copyright &copy;
			<Link href="https://mauss.dev/" invert>Ignatius Bagussuputra</Link>
			2019 &ndash; {new Date().getFullYear()}
		</p>
		<p>
			Documentation made with ❤️ using
			<Link href="https://kit.svelte.dev/" invert>SvelteKit</Link>
			+
			<Link href="https://github.com/ignatiusmb/aqua/" invert>Aqua</Link>
		</p>
	</section>
</footer>

<style>
	footer {
		width: 100%;
		max-width: 84em;
		position: relative;
		display: grid;
		gap: 0.5em;
		padding: 3em 2em;
		margin: 0 auto;
		text-align: center;
		font-family: var(--aqua-monospace);
		font-size: clamp(0.8em, 3vw, 1em);
	}
	section:last-of-type {
		display: grid;
		gap: 0.5em;
	}
</style>
