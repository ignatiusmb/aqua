<script>
  import LinkExt from './LinkExt.svelte';
</script>

<footer>
  <slot />

  <section>
    <p>
      Copyright &copy;
      <LinkExt href="https://mauss.dev/">Ignatius Bagussuputra</LinkExt>
      2019 &ndash; {new Date().getFullYear()}
    </p>
    <p>
      Documentation made with ❤️ using
      <LinkExt href="https://svelte.dev/">Svelte</LinkExt>
    </p>
  </section>
</footer>

<style>
  footer {
    position: relative;
    padding: 3em 0;
    margin: auto 0 3em;
    text-align: center;
    font-family: 'Rubik', sans-serif;
  }
  section:last-of-type {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
    gap: 0.5em;
    font-family: 'Fira Code', 'Inconsolata', monospace;
  }
</style>
