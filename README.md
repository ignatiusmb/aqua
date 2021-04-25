# [Aqua](https://aqua.mauss.dev)&nbsp;&middot;&nbsp;![npm (scoped)](https://img.shields.io/npm/v/@ignatiusmb/aqua)&nbsp;![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@ignatiusmb/aqua?label=minzip)&nbsp;![npm](https://img.shields.io/npm/dm/@ignatiusmb/aqua?label=npm%20installs)&nbsp;[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/@ignatiusmb/aqua/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@ignatiusmb/aqua)&nbsp;[![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Faqua.mauss.dev)](https://aqua.mauss.dev)

> Native DOM enhancements

## Getting started

Full documentation, demos, and example, visit [aqua.mauss.dev](https://aqua.mauss.dev/)

### Installing

```bash
npm install @ignatiusmb/aqua
```

or use with CDN via [UNPKG](https://unpkg.com/browse/@ignatiusmb/aqua@latest/) or [jsDelivr](https://www.jsdelivr.com/package/npm/@ignatiusmb/aqua)

```html
<!-- Full Package via jsDelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@20.3.3/lib/aqua.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@20.3.3/lib/aqua.min.js"></script>

<!-- Full Package via UNPKG -->
<link rel="stylesheet" href="https://unpkg.com/@ignatiusmb/aqua@20.3.3/lib/aqua.min.css" />
<script defer src="https://unpkg.com/@ignatiusmb/aqua@20.3.3/lib/aqua.min.js"></script>

<!-- Callback Only via jsDelivr/UNPKG (choose either one) -->
<script defer src="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@20.3.3/lib/aqua.cbs.js"></script>
<script defer src="https://unpkg.com/@ignatiusmb/aqua@20.3.3/lib/aqua.cbs.js"></script>
```

### Usage

Usage with both npm and CDN requires the stylesheet, so either use a bundler to package your app with it or link it through the head, whichever works for you.

```javascript
import '@ignatiusmb/aqua/lib/aqua.min.css';
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@20.3.3/lib/aqua.min.css" />
<!-- or -->
<link rel="stylesheet" href="https://unpkg.com/@ignatiusmb/aqua@20.3.3/lib/aqua.min.css" />
```

## Contributing

To start developing and test in the docs, run

```bash
# Watch source files
npm run docs
```

then, spawn new terminal and run

```bash
cd docs
# Run on first time
npm install

# Use local package
npm install ..
npm run dev
```

### Building from source

```bash
npm run bundle
```

---

<h3><pre align="center">
@ignatiusmb/aqua - <a href=LICENSE>MIT License</a>
</pre></h3>

---

<pre align="center">
Copyright &copy; 2019 &ndash; 2020 <a href="https://mauss.dev">Ignatius Bagussuputra</a>
</pre>
