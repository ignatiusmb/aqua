---
title: Introduction
---

Aqua is a preprocessor for code syntax highlighting powered by [Shiki](https://github.com/shikijs/shiki), the output is just raw HTML string that can be shown directly, like the example code blocks below.

### Quick Start

```bash
pnpm install @ignatiusmb/aqua
```

```javascript
~Use as highlighter function
import { transform } from '@ignatiusmb/aqua/marker';

const options = {
  highlight: (str, language) => transform(str, { language });
}

// passing as a 'markdown-it' options
const marker = require('markdown-it')(options);
```

```svelte
~Hydrating the toolbar buttons
<script>
  import { hydrate } from '@ignatiusmb/aqua';
</script>

<main use:hydrate>
  <!-- content here -->
</main>
```
