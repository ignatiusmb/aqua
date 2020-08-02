<script context="module">
	export async function preload() {
		return { sections: await this.fetch('docs.json').then((r) => r.json()) };
	}
</script>

<script>
	export let sections;
	import MetaHead from '../components/MetaHead.svelte';
	import { Docs } from '@ignatiusmb/dev-kit';
	const repo = 'ignatiusmb/aqua';
</script>

<MetaHead
	title="Aqua - Native DOM Enhancements"
	description="Aqua by Ignatius. An npm package to quickly build websites with predefined styles and components." />

<Docs {sections} {repo} />
