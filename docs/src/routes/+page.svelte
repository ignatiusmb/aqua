<script lang="ts">
	export let data: import('./$types').PageData;

	import { Docs } from '@mauss/devtools';
	import MetaHead from '$lib/components/MetaHead.svelte';
</script>

<MetaHead
	title="Aqua - Code Syntax Highlighter"
	description="A preprocessor for code syntax highlighting"
/>

<Docs repo="ignatiusmb/aqua" sections={data.docs} />
