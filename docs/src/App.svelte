<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Navigator from './Navigator.svelte';

  import { afterUpdate } from 'svelte';
  import Aqua from '../../lib/aqua.esm.js';
  afterUpdate(() => Aqua.tsunami());
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

  div {
    display: flex;
    flex-direction: column;
    padding: 4em 0;
  }

  :global(h3) {
    font-size: 1.5rem;
    font-family: var(--aqua-font-mono-main);
  }
  :global(a) {
    color: var(--aqua-primary);
  }

  :global(section) {
    padding: 4em 0;
  }

  :global(section h1) {
    font-family: var(--aqua-font-mono-alt);
  }
  :global(section main) {
    max-width: 64em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1em;
    margin: auto;
  }

  :global(.demo) {
    max-width: 40em;
    width: 100%;
  }

  :global(.aqua-code-box:first-of-type) {
    margin-top: 2em;
  }
  :global(.aqua-code-box:not(:first-of-type)) {
    margin-top: 1em;
  }

  :global(.aqua-modal .aqua-modal-preview) {
    height: 100%;
    text-align: center;
  }
  :global(.aqua-modal .aqua-modal-preview div:first-child) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  :global(.aqua-modal .aqua-modal-preview h3) {
    margin-bottom: 1em;
  }
</style>
