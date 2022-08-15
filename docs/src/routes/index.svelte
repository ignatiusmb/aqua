<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	export const load: Load = async ({ fetch }) => {
		const sections = await fetch('/docs.json').then((r) => r.json());
		return { props: { sections } };
	};
</script>

<script lang="ts">
	export let sections: ComponentProps<Docs>['sections'];

	import type { ComponentProps } from 'svelte';
	import { Docs } from '@mauss/devtools';
	import MetaHead from '$lib/components/MetaHead.svelte';
</script>

<MetaHead
	title="Aqua - Native DOM Enhancements"
	description="A package to quickly build websites with predefined styles and components."
/>

<Docs {sections} repo="ignatiusmb/aqua" />
