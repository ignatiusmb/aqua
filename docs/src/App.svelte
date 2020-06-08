<script>
  import { version } from '../../package.json';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Demo from './components/Demo.svelte';
  import documents from './documents';
</script>

<Header />
<div>
  <main>
    <article>
      {#each documents as { id, title, blocks }}
        <Demo {id} {title}>
          {#each blocks as data}
            {@html data}
          {/each}
        </Demo>
      {/each}
    </article>
  </main>
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
  article:not(:last-of-type) {
    border-bottom: 1em ridge;
    border-bottom-color: var(--aqua-primary);
  }
</style>
