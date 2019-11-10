<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`index.json`);
    const components = await res.json();

    if (res.status === 200) return { components };
    else this.error(res.status, components.message);
  }
</script>

<script>
  import { onMount } from "svelte";
  import * as Aqua from "@ignatiusmb/aqua";

  export let components;

  onMount(() => {
    Aqua.code.init();
    Aqua.code.highlight();
    Aqua.form.init();
    Aqua.modal.init();
  });
</script>

<style>

</style>

<svelte:head>
  <title>Aqua &bull; Component</title>
</svelte:head>

<main>
  {#each components as section}
    <section id={section.id}>
      <main>
        {#each section.cards as card}
          <div class="card">
            <h1>{card.title}</h1>
            {#if !card.type}
              {#each card.boxes as box}
                <pre
                  class="aqua-code"
                  data-language={box.language}
                  data-title={box.title}>
                  {box.body}
                </pre>
              {/each}
            {:else}
              {@html card.body}
            {/if}
          </div>
        {/each}
      </main>
    </section>
  {/each}
</main>
