<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Navigator from './Navigator.svelte';
</script>

<Header />
<div>
  <Navigator />
</div>
<Footer />

<style>
  :global(body) {
    background-color: var(--aqua-bg-light);
  }
  :global(a) {
    color: var(--aqua-primary);
  }
  :global(.aqua-code-box:first-of-type) {
    margin-top: 2em;
  }

  div {
    display: flex;
    flex-direction: column;
    padding-top: 4em;
  }
</style>
