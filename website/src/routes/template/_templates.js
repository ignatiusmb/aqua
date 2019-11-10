const templates = [
  {
    page: 'login',
    body: {
      id: 'slide',
      cards: [
        {
          title: 'Aqua Slide Login',
          require: [
            'Requires ',
            { link: '/#form', text: 'Aqua Form' },
            ' and ',
            { link: '/animation/#form', text: 'Aqua Form Animation' }
          ],
          boxes: [
            {
              language: 'html',
              title: '<head>',
              body: `
<link rel="stylesheet" href="https://aqua.imbagus.com/template/login/slide.css">
<script defer src="https://aqua.imbagus.com/template/login/slide.js">
`
            },
            {
              language: 'html',
              title: 'Template',
              body: `
<div class="aqua-form-card aqua-form-wave aqua-form-slide">
  <div class="slide-container sign-up">
    <form class="aqua-form" action="#">
      <h1>Create Account</h1>
      <input type="text" placeholder="Full Name">
      <input type="email" placeholder="Email">
      <input type="date" placeholder="Date of Birth">
      <input type="tel" placeholder="Phone Number">
      <input type="password" placeholder="Password">
      <input type="password" placeholder="Re-type Password">
      <button>Sign Up</button>
    </form>
  </div>
  <div class="slide-container sign-in">
    <form class="aqua-form" action="#">
      <h1>Sign In</h1>
      <input type="email" placeholder="Email">
      <input type="password" placeholder="Password">
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  </div>
  <div class="form-overlay">
    <div class="overlay">
      <div class="overlay-panel left">
        <h1>Welcome Back!</h1>
        <p>Login with your account to keep connected with us</p>
        <button class="ghost white" id="sign-in">Sign In</button>
      </div>
      <div class="overlay-panel right">
        <h1>Join Us!</h1>
        <p>Enter your personal details and start a journey with us</p>
        <button class="ghost white" id="sign-up">Sign Up</button>
      </div>
    </div>
  </div>
</div>
`
            }
          ]
        }
      ]
    }
  }
]

export default templates
