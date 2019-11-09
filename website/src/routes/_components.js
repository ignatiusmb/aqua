const components = [
  {
    id: 'core',
    cards: [
      {
        title: 'aqua.core',
        boxes: [
          {
            language: 'html',
            title: 'Mandatory Foundation Sheet',
            body: `
            <link rel="stylesheet" href="https://aqua.imbagus.com/core.css">
            `
          }
        ]
      },
      {
        title: 'Font Links',
        boxes: [
          {
            language: 'html',
            title: '<head>',
            body: `
            <!-- Font Awesome v5 Icons -->
            <link rel="stylesheet" href="https://cdn.imbagus.com/css/fa.v5.css">
            <!-- Font Families -->
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karla&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap">
            <!-- Optional Fonts -->
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cabin&display=swap">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono&display=swap">
            `
          },
          {
            language: 'css',
            title: 'CSS Rules',
            body: `
            /* font: 'Fira Code' */
            font-family: var(--aqua-font-code);
            /* font: 'Inconsolata' */
            font-family: var(--aqua-font-mono-main);
            /* font: 'Karla' */
            font-family: var(--aqua-font-heading-main);
            /* font: 'Rubik' */
            font-family: var(--aqua-font-default-main);
            /* font: 'Ubuntu' */
            font-family: var(--aqua-font-default-alt-1);

            /* font: 'Cabin' */
            font-family: var(--aqua-font-default-alt-2);
            /* font: 'Space Mono' */
            font-family: var(--aqua-font-mono-alt);
            `
          }
        ]
      }
    ]
  },
  {
    id: 'code',
    cards: [
      {
        title: 'aqua.code',
        boxes: [
          {
            language: 'html',
            title: '<head>',
            body: `
            <link rel="stylesheet" href="https://aqua.imbagus.com/code.css">
            <script defer src="https://aqua.imbagus.com/code.js"></script>
            `
          },
          {
            language: 'html',
            title: '<template />',
            body: `
            <pre class="aqua-code" data-language="html" data-title="">
            <!-- place your code here -->

            <!-- escape html code with &amp;lt; -->
            &lt;script>&lt;/script>
            </pre>
            `
          }
        ]
      },
      {
        title: 'Initialization',
        boxes: [
          {
            language: 'javascript',
            title: 'index.js --> Initialize',
            body: `
            window.addEventListener('DOMContentLoaded', () => {
              if (Aqua.code) Aqua.code.init()
            })
            `
          },
          {
            language: 'javascript',
            title: 'index.js --> Syntax Highlighting',
            body: `
            window.addEventListener('load', () => {
              if (Aqua.code) Aqua.code.highlight()
            })
            `
          }
        ]
      },
      {
        type: 'demo',
        title: 'Code Demo',
        body: `
        <pre class="aqua-code" data-language="python" data-title="Example">
        import os

        # Build paths inside the project like this: os.path.join(BASE_DIR, ...)
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        PRODUCTION = os.environ.get('DATABASE_URL') is not None

        ALLOWED_HOSTS = ['ignatiusmb', 'aqua', 'imbagus']

        INSTALLED_APPS = [
            ...
            'django.app',
        ]

        MIDDLEWARE = [
            ...
            'aqua.imbagus',
        ]

        TEMPLATES = [
            {
                'BACKEND': 'django.template.backends.django.DjangoTemplates',
                'DIRS': [os.path.join(BASE_DIR, 'aqua')],
                'APP_DIRS': True,
                'OPTIONS': {
                    'context_processors': [
                        'django.template.context_processors.debug',
                        'django.template.context_processors.request',
                        'django.contrib.auth.context_processors.auth',
                        'django.contrib.messages.context_processors.messages',
                    ],
                },
            },
        ]
        </pre>
        `
      }
    ]
  },
  {
    id: 'form',
    cards: [
      {
        title: 'aqua.form',
        boxes: [
          {
            language: 'html',
            title: '<head>',
            body: `
            <link rel="stylesheet" href="https://aqua.imbagus.com/form.css">
            <script defer src="https://aqua.imbagus.com/form.js"></script>            
            `
          },
          {
            language: 'html',
            title: '<template />',
            body: `
            <form class="aqua-form">
              <input type="email" placeholder="Email">
              <input type="password" placeholder="Password">
              <button type="submit">Login</button>
            </form>
            `
          }
        ]
      },
      {
        title: 'Initialization',
        boxes: [
          {
            language: 'javascript',
            title: 'index.js --> Initialize',
            body: `
            window.addEventListener('DOMContentLoaded', () => {
              if (Aqua.form) Aqua.form.init()
            })
            `
          }
        ]
      },
      {
        type: 'demo',
        title: 'Form Demo',
        body: `
        <div class="demo">
          <form action="#" class="aqua-form">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <button type="submit">Login</button>
          </form>
        </div>
        `
      }
    ]
  },
  {
    id: 'modal',
    cards: [
      {
        title: 'aqua.modal',
        boxes: [
          {
            language: 'html',
            title: '<head>',
            body: `
            <link rel="stylesheet" href="https://aqua.imbagus.com/modal.css">
            <script defer src="https://aqua.imbagus.com/modal.js"></script>
            `
          },
          {
            language: 'html',
            title: '<template />',
            body: `
            <div class="aqua-modal">
              <div class="aqua-modal-preview">
                <div>
                  <!-- your content preview here -->
                <div>
                <div class="overlay">
                  <!-- your overlay content here -->
                <div>
              <div>
              <div class="aqua-modal-popup">
                <div class="content aqua">
                  <!-- your popup content here -->
                <div>
              <div>
            <div>
            `
          }
        ]
      },
      {
        title: 'Initialization',
        boxes: [
          {
            language: 'javascript',
            title: 'index.js --> Initialize',
            body: `
            window.addEventListener('DOMContentLoaded', () => {
              if (Aqua.modal) Aqua.modal.init()
            })
            `
          }
        ]
      },
      {
        type: 'demo',
        title: 'Modal Demo',
        body: `
        <div>
          <div class="aqua-modal">
            <div class="aqua-modal-preview">
              <div>
                <h3>Modal Preview</h3>
                <p>Lorem ipsum dolor sit, amet</p>
              </div>
              <div class="overlay"></div>
            </div>
            <div class="aqua-modal-popup">
              <div class="aqua content">
                <h1>popup content</h1>
              </div>
            </div>
          </div>
          <div class="aqua-modal">
            <div class="aqua-modal-preview">
              <div>
                <h3>Modal Preview</h3>
                <p>Lorem ipsum dolor sit, amet</p>
              </div>
              <div class="overlay"></div>
            </div>
            <div class="aqua-modal-popup">
              <div class="aqua content">
                <h1>popup content</h1>
              </div>
            </div>
          </div>
        </div>
        `
      }
    ]
  }
]

for (const component of components) {
  for (const card of component.cards) {
    if (card.boxes) {
      for (const box of card.boxes) {
        box.body = box.body.replace(/^ {12}/gm, '')
      }
    }
    if (card.body) {
      card.body = card.body.replace(/^ {8}/gm, '')
    }
  }
}

export default components
