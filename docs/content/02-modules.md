---
title: Modules / API
---

Aqua provides a couple of modules and exports.

### Core

This is the main module from the root import.

```typescript
import type { ActionReturn } from 'svelte/action';

export function listen(node: HTMLElement): void;
export function hydrate(node: HTMLElement, _: any): ActionReturn
```

Usage using [SvelteKit](https://kit.svelte.dev/) would simply be

```svelte
<script>
  import { hydrate } from '@ignatiusmb/aqua';
  import { navigating } from '$app/stores';
</script>

<main use:hydrate={$navigating}>
  <!-- content here -->
</main>
```

Passing in the `navigating` store is used to trigger the update inside `hydrate` function and re-hydrate the DOM when the page changes but is not remounted.

### Marker

This isn't usually necessary if you're using [Marqua](https://github.com/ignatiusmb/marqua), but in case you didn't, here's how you can tap into the function provided by the marker module.

```typescript
export interface Dataset {
	language?: string;
	lineStart?: number;
	title?: string;
}

export function transform(source: string, dataset: Dataset): string;
```

A simple example would be passing a raw source code as a string.

```javascript
import { transform } from '@ignatiusmb/aqua/marker'

const source = `
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 0,
  name: 'User'
}
`

transform(source, { language: 'typescript' });
```
