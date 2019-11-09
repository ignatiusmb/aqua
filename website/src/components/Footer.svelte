<script>
  import { onMount } from "svelte";

  let cdnData;
  onMount(async () => {
    const data = await fetch("https://cdn.imbagus.com/html/footer.html");
    cdnData = await data.text();
  });
</script>

<style>
  footer.gh-cdn {
    position: relative;
    padding: 4em 0 6em;
    text-align: center;
    font-family: "Rubik", sans-serif;
  }
  footer.gh-cdn .repository {
    font-size: 2rem;
  }
  :global(.ftr-social .social-links) {
    max-width: 12em;
    display: flex;
    justify-content: space-around;
    padding: 0.8em 0 0.6em;
    margin: auto;
    font-size: 2.5rem;
  }
  :global(.ftr-social .social-links a),
  :global(.ftr-social .social-links a:visited) {
    padding: 0.24em;
    transition: 0.15s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: #444;
  }
  :global(.ftr-social .social-links a:hover),
  :global(.ftr-social .social-links a:focus) {
    transition: 0.15s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: crimson;
  }
  :global(.ftr-social .social-links a:hover:nth-child(odd)),
  :global(.ftr-social .social-links a:focus:nth-child(odd)) {
    transform: rotate(6deg) scale(1.2) translateY(-20%);
  }
  :global(.ftr-social .social-links a:hover:nth-child(even)),
  :global(.ftr-social .social-links a:focus:nth-child(even)) {
    transform: rotate(-6deg) scale(1.2) translateY(-20%);
  }
</style>

<footer class="gh-cdn">
  <div class="repository">
    <a href="https://github.com/ignatiusmb/aqua">@ignatiusmb/aqua</a>
  </div>
  {@html cdnData}
</footer>
