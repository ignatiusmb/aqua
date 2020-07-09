<script>
	export let docs;
	import Link from '../svelte/Link.svelte';
	import Icon from '../svelte/Icon.svelte';
	import Edit from '../svelte/Edit.svelte';
	let anchor = false;
</script>

<section>
	<h2 id={docs.slug} class:anchor on:mouseenter={() => (anchor = true)} on:mouseleave={() => (anchor = false)}>
		<Link href={docs.slug}>
			<Icon name="link" />
		</Link>
		<span>{docs.title}</span>
		<Edit path="docs/content/{docs.index}-{docs.slug}.md" />
	</h2>
	{@html docs.content}
</section>

<style>
	section:not(:first-child) {
		margin-top: 4em;
		padding-top: 1em;
		border-top: 0.25em solid var(--aqua-primary);
	}
	h2 {
		position: relative;
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.5em;
		text-transform: uppercase;
		font-family: var(--aqua-heading);
		font-size: 2rem;
		font-weight: bold;
	}
	h2 > :global(a:first-child) {
		position: absolute;
		left: -0.15em;
		transform: translateX(-100%) rotate(-45deg);
		transition: opacity 240ms;
		opacity: 0;
	}
	h2.anchor > :global(a:first-child) {
		opacity: 1;
	}
	h2 + :global(h3:first-of-type) {
		padding-top: 0;
		margin-top: 0;
		border-top: 0;
	}

	section :global(h3) {
		position: relative;
		display: grid;
		gap: 0.5em;
		grid-template-columns: auto auto 1fr;
		align-items: center;
		margin: 2em 0 1em;
		font-size: 1.5rem;
		font-weight: 500;
	}
	section :global(h3::before) {
		content: '';
		width: 0.5em;
		height: 0.5em;
		border-radius: 50%;
		margin-left: 0.25em;
		box-shadow: 0 0 0 0.25em rgba(0, 112, 187, 0.6);
		background-color: var(--aqua-primary);
	}
	section :global(h3::after) {
		content: '';
		width: 100%;
		height: 0.15em;
		background-color: rgba(0, 112, 187, 0.6);
	}
	section :global(p) {
		margin-bottom: 1em;
		line-height: 1.5;
	}
	section :global(.aqua.code-box) {
		margin-top: 0;
		margin-bottom: 1.5em;
	}
</style>
