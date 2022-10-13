<script lang="ts">
	export let data: import('./$types').PageData;

	import { Docs } from '@mauss/devtools';
	import MetaHead from '$lib/components/MetaHead.svelte';
</script>

<MetaHead
	title="Aqua - Native DOM Enhancements"
	description="A package to quickly build websites with predefined styles and components."
/>

<Docs repo="ignatiusmb/aqua" sections={data.docs} />
