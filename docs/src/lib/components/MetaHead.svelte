<script>
	export let canonical = '';
	export let title, description;

	const hostTitle = 'Mauss';
	const hostname = 'mauss.dev';

	import { page } from '$app/stores';
	$: url = $page.host === hostname ? `https://${hostname}/${canonical}` : null;
</script>

<svelte:head>
	<title>{title} • {hostTitle}</title>
	<meta name="author" content="Ignatius Bagussuputra" />

	{#if url}
		<link rel="canonical" href={url} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
	{/if}

	<meta property="og:site_name" content={hostTitle} />
	<meta property="og:locale" content="en_ID" />
	<slot />
</svelte:head>
