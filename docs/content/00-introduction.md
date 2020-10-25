---
title: Introduction
---

Aqua acts as a preprocessor for Web Components and markdown parsers, mainly built to be compatible with [Svelte](https://svelte.dev), but it could also work in browsers natively as a callable API.

This parses markdown/markups and returns a styled `HTMLElement` block that could be injected to any DOM or directly replace the processed `Node` if used natively in a browser.

It only utilizes [prism](https://prismjs.com/), everything else is built from the ground up using native Web APIs and modern CSS layouts, preprocessed to be compatible with both modern and old browsers.

### Quick Start

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@VERSION/lib/aqua.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@VERSION/lib/aqua.cbs.js"></script>
```

```javascript
~Use as highlighter function
import Aqua from '@ignatiusmb/aqua';
const options = {
  highlight: (str, language) => Aqua.code.highlight(str, { language });
}

// Use it like so as 'markdown-it' options
const markIt = require('markdown-it')(options);
```

The output from the parsed block of code should then look like the code block above. There's also a couple more examples below in the [Modules / API section](#modules). This documentation is also built with Aqua.

You should be able to use `highlight` API from `code` with any markdown parser that allows you to handle the syntax highlighting yourself. This is basically the custom highlight function replacement, and it respects the DOM hierarchy by starting with the `<pre>` tag so there won't be any unnecessary nesting happening.
