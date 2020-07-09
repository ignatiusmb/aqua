<script>
  export let path;
  import Link from './Link.svelte';
  import Icon from './Icon.svelte';
  let link = 'https://github.com/ignatiusmb/mauss/edit/master';
</script>

<span>
  <Link href="{link}/{path}">
    <Icon name="edit" />
  </Link>
</span>

<style>
  span {
    display: flex;
    align-items: center;
    color: var(--aqua-primary);
  }
  span :global(a) {
    display: flex;
  }
</style>
