<script context="module">
	export async function preload() {
		return { sections: await this.fetch('docs.json').then((r) => r.json()) };
	}
</script>

<script>
	export let sections;
	import MetaHead from '../pages/MetaHead.svelte';
	import Wrapper from '../pages/Wrapper.svelte';
	import Sidebar from '../pages/Sidebar.svelte';
	import Section from '../pages/Section.svelte';
</script>

<MetaHead
	title="Aqua - Native DOM Enhancements"
	description="Aqua by Ignatius. An npm package to quickly build websites with predefined styles and components." />

<Wrapper>
	<Sidebar {sections} />

	<article>
		{#each sections as docs}
			<Section {docs} />
		{/each}
	</article>
</Wrapper>

<style>
	article {
		padding-top: 2em;
	}
</style>
