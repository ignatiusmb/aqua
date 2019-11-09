<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  import "../../../lib/core.css";
  import "../../../lib/main.css";

  export let segment;
</script>

<style>
  :global(body) {
    background-color: var(--aqua-bg-light);
  }

  header {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #0082c8;
    background: -webkit-linear-gradient(to right, #000046, #1cb5e0);
    background: linear-gradient(to right, #000046, #1cb5e0);
    color: white;
  }
  header :global(h1) {
    font-size: 4rem;
  }
  :global(h1) {
    margin-bottom: 0.2em;
    text-align: center;
    font-size: 2.2rem;
    font-family: var(--aqua-font-heading-main);
  }
  :global(h3) {
    font-size: 1.5rem;
    font-family: var(--aqua-font-mono-main);
  }
  :global(a) {
    color: var(--aqua-primary);
  }

  article {
    display: flex;
    flex-direction: column;
  }
  article > aside {
    z-index: 2;
    position: sticky;
    bottom: 0;
    order: 3;
    background-color: white;
  }

  :global(section) {
    padding: 4em 0;
  }
  :global(section:not(:last-of-type)) {
    border-bottom: 1em ridge;
    border-bottom-color: var(--aqua-primary);
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

  :global(.card) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 1em 1em;
    border-radius: 0.5em;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    background: #fff;
  }
  :global(.card:not(:first-of-type)) {
    margin-top: 2em;
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

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 769px) {
    article > aside {
      top: 0;
      bottom: unset;
      order: unset;
    }
  }
</style>

<header>
  <slot name="header">
    <h1>Aqua</h1>
    <h3>Version 0.19.10</h3>
  </slot>
</header>

<article>
  <aside>
    <Nav {segment} />
  </aside>
  <slot />

  <Footer />
</article>
