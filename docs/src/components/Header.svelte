<script>
  import { version } from '../../../package.json';
</script>

<header>
  <h1>Aqua</h1>
  <h3>Version v{version}</h3>
</header>

<style>
  header {
    height: 100vh;
    display: grid;
    gap: 1em;
    align-content: center;
    background: #0082c8;
    background: -webkit-linear-gradient(to right, #000046, #1cb5e0);
    background: linear-gradient(to right, #000046, #1cb5e0);
    text-align: center;
    color: white;
  }
  h1 {
    font-size: 4rem;
    font-family: var(--aqua-heading);
  }
  h3 {
    font-size: 1.5rem;
    font-family: var(--aqua-monospace);
  }
</style>
