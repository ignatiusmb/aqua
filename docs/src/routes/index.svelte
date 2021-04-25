<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		return {
			props: { sections: await fetch('docs.json').then((r) => r.json()) },
		};
	}
</script>

<script>
	export let sections;
	import { Docs } from '@mauss/devtools';
	import MetaHead from '$lib/components/MetaHead.svelte';
</script>

<MetaHead
	title="Aqua - Native DOM Enhancements"
	description="Aqua by Ignatius. An npm package to quickly build websites with predefined styles and components." />

<Docs {sections} repo="ignatiusmb/aqua" />
