<script>
  import { version } from "@ignatiusmb/aqua/package.json";
</script>

<style>
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
  header h1 {
    font-size: 4rem;
  }
</style>

<!-- markup (zero or more items) goes here -->
<header>
  <slot>
    <h1>Aqua</h1>
    <h3>Version {version}</h3>
  </slot>
</header>
