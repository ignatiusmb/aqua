<script>
  import { version } from '../../package.json';
  import Usage from './aqua/Usage.svelte';
</script>

<main>
  <div>
    <Usage {version} />
  </div>
</main>

<style>
  div:not(:last-of-type) {
    border-bottom: 1em ridge;
    border-bottom-color: var(--aqua-primary);
  }
</style>
