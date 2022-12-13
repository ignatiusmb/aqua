---
title: Getting Started
---

The official recommended way to build with Aqua is to use [Marqua](https://github.com/ignatiusmb/marqua).

```bash
~Install via a package manager
pnpm install @ignatiusmb/aqua
```

### Include base styles

Make sure to include these stylesheets to your app

```svelte
<script>
  // process with JS bundler
  import '@ignatiusmb/aqua/var.css';
  import '@ignatiusmb/aqua/code.css';
</script>

<!-- choose one but not both -->

<style>
  /* process with CSS bundler */
  @import '@ignatiusmb/aqua/var.css';
  @import '@ignatiusmb/aqua/code.css';
</style>
```

The following CSS variables will be made available

```css
:root {
  --aqua-default: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Rubik', 'Ubuntu', 'Roboto', sans-serif;
  --aqua-heading: 'Karla', sans-serif;
  --aqua-monospace: 'Fira Code', 'Inconsolata', 'Consolas', monospace;
}
```

```html
~Use your own binaries or through CDN
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karla&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap">
```
