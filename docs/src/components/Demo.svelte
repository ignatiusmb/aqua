<script>
  export let id, title;
</script>

<section {id}>
  <div>
    <h1>{title}</h1>
    <slot />
  </div>
</section>

<style>
  section {
    width: 100%;
    max-width: 64em;
    padding: 0 1em;
    margin: 0 auto;
  }
  section:not(:first-child) {
    margin-top: 1em;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 1em 1em;
    border-radius: 0.5em;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    background: #fff;
  }
  div:not(:first-of-type) {
    margin-top: 2em;
  }
  h1 {
    margin-bottom: 0.2em;
    text-align: center;
    font-size: 2.2rem;
    font-family: var(--aqua-font-heading-main);
  }
</style>
