<script>
  export let segment;

  let active;
</script>

<style>
  nav {
    overflow: hidden;
    max-width: 64em;
    display: flex;
    justify-content: space-around;
    padding: 0.5em 1em;
    margin: 0 auto;
  }
  a {
    z-index: 2;
    cursor: pointer;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5em 0;
    border-radius: 0.7em;
    color: var(--aqua-primary);
    transition: 0.3s;
  }
  a .icon {
    font-size: 1.5rem;
    transition: 300ms;
    transform: translateY(25%);
  }
  a .icon .icon-active {
    display: none;
  }
  a span {
    opacity: 0;
    font-size: 0.8rem;
    transition: 300ms;
  }
  a.active {
    background-color: #e4f2ff;
    transform: scale(1.1);
  }
  a.active .icon {
    transform: translateY(0);
  }
  a.active .icon i {
    display: none;
  }
  a.active .icon i.icon-active {
    display: unset;
  }
  a.active span {
    opacity: 1;
  }
  .tab-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #e4f2ff;
    transition: 300ms;
  }

  @media only screen and (min-width: 769px) {
    nav {
      justify-content: center;
    }
    nav a {
      margin: 0 1em;
    }
  }
</style>

<nav>
  <a class:active={segment === undefined} href="/">
    <div class="icon">
      <i class="fas fa-bars" />
      <i class="fas fa-bars icon-active" />
    </div>
    <span>Component</span>
  </a>
  <a class:active={segment === 'template'} href="template">
    <div class="icon">
      <i class="far fa-folder" />
      <i class="far fa-folder-open icon-active" />
    </div>
    <span>Template</span>
  </a>
  <div class="tab-overlay" />
</nav>
