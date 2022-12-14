<script lang="ts">
	export let data: import('./$types').PageData;

	import { hydrate } from '@ignatiusmb/aqua';
	import { Docs } from '@mauss/devtools';
	import { navigating } from '$app/stores';
	import MetaHead from './MetaHead.svelte';
</script>

<MetaHead
	title="Aqua - Code Syntax Highlighter"
	description="A preprocessor for code syntax highlighting"
/>

<div style="display: contents" use:hydrate={$navigating}>
	<Docs repo="ignatiusmb/aqua" sections={data.docs} />
</div>
