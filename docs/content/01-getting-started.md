---
title: Getting Started
---

### Use in Node.js

```bash
~via npm
npm install @ignatiusmb/aqua
```

### Use in Browser

```html
~Direct Include --> jsDelivr CDN
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@VERSION/lib/aqua.min.css" />
<script defer src="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@VERSION/lib/aqua.min.js"></script>
```

```html
~Direct Include --> UNPKG CDN
<link rel="stylesheet" href="https://unpkg.com/@ignatiusmb/aqua@VERSION/lib/aqua.min.css" />
<script defer src="https://unpkg.com/@ignatiusmb/aqua@VERSION/lib/aqua.min.js"></script>
```

### Included Font Vars

```css
:root {
  --aqua-default: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Rubik', 'Ubuntu', 'Roboto', sans-serif;
  --aqua-heading: 'Karla', sans-serif;
  --aqua-monospace: 'Fira Code', 'Inconsolata', 'Consolas', monospace;
}

/* Example */
body {
  font-family: var(--aqua-default);
}
header {
  font-family: var(--aqua-heading);
}
footer {
  font-family: var(--aqua-monospace);
}
```

```html
~Use your own binaries or through CDN
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karla&display=swap">

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap">
```

### Important Note

Aqua provides stylesheets and script files, linking or including the stylesheet is mandatory to display the elements properly. A custom reset is included as well so it makes quick prototyping a breeze, everything should display properly, and it works without any additional configuration.

```html
~1.0 - without bundler
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@VERSION/lib/aqua.min.css" />
```

```javascript
~2.0 - with a bundler
import '@ignatiusmb/aqua/lib/aqua.min.css';
```

On the other hand, there's a couple of ways to use the script files. You can use and import the entire module through the CDN if you're using it in the client-side. But, if you use the parser from the server-side, you can just bundle the callback script file with your website or include it in the head.

```html
~1.0 - Parsing in client-side
<script defer src="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@VERSION/lib/aqua.min.js"></script>
```

```javascript
~2.0 - Parsing from server-side | With bundler
import '@ignatiusmb/aqua/lib/aqua.cbs';
```

```html
~2.1 - Parsing from server-side | No bundler
<script defer src="https://cdn.jsdelivr.net/npm/@ignatiusmb/aqua@VERSION/lib/aqua.cbs.js"></script>
```
