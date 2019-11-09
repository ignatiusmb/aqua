<script context="module">
  export async function preload(page, session) {
    console.log(page.params);
    const res = await this.fetch(`../templates.json`);
    const templates = await res.json();

    if (res.status === 200) return { templates };
    else this.error(res.status, templates.message);
  }
</script>

<script>
  export let segment;
  export let templates;
</script>

<style>
  /* your styles go here */
</style>

<svelte:head>
  <title>Aqua &bull; Template &rarr; Form Login</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->

<slot name="header">
  <div class="aqua-form-card aqua-form-wave aqua-form-slide">
    <div class="slide-container sign-up">
      <form class="aqua-form" action="#">
        <h1>Create Account</h1>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="date" placeholder="Date of Birth" />
        <input type="tel" placeholder="Phone Number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Re-type Password" />
        <button>Sign Up</button>
      </form>
    </div>
    <div class="slide-container sign-in">
      <form class="aqua-form" action="#">
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="." on:click|preventDefault>Forgot your password?</a>
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
</slot>

<main>
  {#each templates as template}
    {#if template.page === segment}
      {#each template.body as page}
        <section id={page.id}>
          <main>
            <div class="card">
              {#each page.cards as card}
                <div class="card">
                  <h1>{card.title}</h1>
                  {#if !card.type}
                    {#each card.boxes as box}
                      <pre
                        class="aqua-code"
                        data-language={box.language}
                        data-title={box.title}>
                        {box.body}
                      </pre>
                    {/each}
                  {:else}
                    {@html card.body}
                  {/if}
                </div>
              {/each}
            </div>
          </main>
        </section>
      {/each}
    {/if}
  {/each}
</main>

<main>

  <section id="slide">
    <main>
      <div class="card">
        <h1>Aqua Slide Login</h1>
        <code>
          Requires
          <a href="/#form">Aqua Form</a>
          and
          <a href="/animation/#form">Aqua Form Animation</a>
        </code>

        <pre class="aqua-code" data-language="html" data-title="<head>">
          &lt;link rel="stylesheet"
          href="https://aqua.imbagus.com/template/login/slide.css"> &lt;script
          defer
          src="https://aqua.imbagus.com/template/login/slide.js">&lt;/script>
        </pre>
        <pre class="aqua-code" data-language="html" data-title="Template">
          &lt;div class="aqua-form-card aqua-form-wave aqua-form-slide"> &lt;div
          class="slide-container sign-up"> &lt;form class="aqua-form"
          action="#"> &lt;h1>Create Account&lt;/h1> &lt;input type="text"
          placeholder="Full Name"> &lt;input type="email" placeholder="Email">
          &lt;input type="date" placeholder="Date of Birth"> &lt;input
          type="tel" placeholder="Phone Number"> &lt;input type="password"
          placeholder="Password"> &lt;input type="password" placeholder="Re-type
          Password"> &lt;button>Sign Up&lt;/button> &lt;/form> &lt;/div> &lt;div
          class="slide-container sign-in"> &lt;form class="aqua-form"
          action="#"> &lt;h1>Sign In&lt;/h1> &lt;input type="email"
          placeholder="Email"> &lt;input type="password" placeholder="Password">
          &lt;a href="#">Forgot your password?&lt;/a> &lt;button>Sign
          In&lt;/button> &lt;/form> &lt;/div> &lt;div class="form-overlay">
          &lt;div class="overlay"> &lt;div class="overlay-panel left">
          &lt;h1>Welcome Back!&lt;/h1> &lt;p>Login with your account to keep
          connected with us&lt;/p> &lt;button class="ghost white"
          id="sign-in">Sign In&lt;/button> &lt;/div> &lt;div
          class="overlay-panel right"> &lt;h1>Join Us!&lt;/h1> &lt;p>Enter your
          personal details and start a journey with us&lt;/p> &lt;button
          class="ghost white" id="sign-up">Sign Up&lt;/button> &lt;/div>
          &lt;/div> &lt;/div> &lt;/div>
        </pre>
      </div>
    </main>
  </section>
</main>
