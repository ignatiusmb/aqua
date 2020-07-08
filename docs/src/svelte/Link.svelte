<script>
	export let href = '';
	export let inherit = false;
	export let invert = false;
	export let label = null;
</script>

<a
	{href}
	rel={href.includes('//') ? 'noopener noreferrer' : 'preload'}
	target={href.includes('//') ? '_blank' : '_self'}
	aria-label={label}
	class:disabled={!href}
	class:inherit
	class:invert>
	<slot />
</a>

<style>
	a {
		cursor: pointer;
	}
	a.disabled {
		cursor: not-allowed;
	}
	a.inherit {
		color: inherit !important;
	}
	a.invert:hover {
		filter: invert() hue-rotate(180deg);
	}
</style>
