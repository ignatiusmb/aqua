const templates = [
  {
    page: 'login',
    body: {
      id: 'slide',
      cards: [
        {
          title: 'aqua.core',
          require: [
            'Requires',
            { link: '/#form', text: 'Aqua Form' },
            'and',
            { link: '/animation/#form', text: 'Aqua Form Animation' }
          ],
          boxes: [
            {
              language: 'html',
              title: 'Mandatory Foundation Sheet',
              body: `
<link rel="stylesheet" href="https://aqua.imbagus.com/core.css">
`
            }
          ]
        }
      ]
    }
  }
]

export default templates
