---
title: Modules / API
---

Aqua doesn't have any named export by default, but it provides many props that has it, all available and listed below. First, import the entire module through its default export with the name `Aqua`.

```javascript
import Aqua from '@ignatiusmb/aqua';
```

### Code.js

```javascript
const { cbs, highlight, highlightAll, init } = Aqua.code;
```

`Aqua.code` provides 4 public methods

1. `init` - method used for client-side parsing
2. `cbs` - all the needed callbacks for toolbar onclick events
3. `highlight` - the highlighter function to parse code blocks
4. `highlightAll` - wrapper to call Prism highlightAll function

```html
~Client-side usage
<body>
  <pre class="aqua code-block" data-language="" data-title="">
  <!-- text to be preformatted -->
  </pre>

  <div id="root" class="container">
    <pre class="aqua code-block" data-language="" data-title="">
    <!-- text to be preformatted -->
    </pre>
  </div>
</body>

<script>
  // Defaults to document.body if no argument is passed
  // This will parse and highlight all <pre> tags
  // with class of 'aqua code-block' inside <body>
  Aqua.code.init();

  // Select tag with class of 'container' and id 'root'
  // as the starting element and will only parse
  // all <pre> tags inside tags with this class and id
  Aqua.code.init(document.querySelector('.container#root'));
</script>
```

```javascript
~Server-side usage | Simple
const markIt = require('markdown-it')({ highlight: (str, language) => Aqua.code.highlight(str, { language }) });
```

```javascript
~Server-side usage | With title parsing
const options = {
  highlight: (str, language) => {
    const strList = str.split('\n');
    const dataset = { language };

    // If the first line has a prefix of '~'
    // It will use the first line as the title
    if (strList[0][0] === '~') {
      dataset['title'] = strList[0].slice(1);
    }
    // Check if title exist and remove it from string to be parsed
    const content = strList.slice(dataset['title'] ? 1 : 0).join('\n');

    return Aqua.code.highlight(content, dataset);
  },
}
```

```javascript
~Server-side usage | With title and lineStart parsing
import Aqua from '@ignatiusmb/aqua';
const options = {
  highlight: (str, language) => {
    const strList = str.split('\n');
    const dataset = { language };

    if (strList[0][0] === '~') {
      const [title, lineNumber] = strList[0].split('#');
      dataset['title'] = title.slice(1);
      // Check if there's a hash '#' in the title and use it as start line number
      if (lineNumber) dataset['lineStart'] = +lineNumber;
    }
    const content = strList.slice(dataset['title'] ? 1 : 0).join('\n');

    return Aqua.code.highlight(content, dataset);
  },
}
```
