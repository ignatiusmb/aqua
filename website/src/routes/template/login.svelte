<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`/template/template.json`);
    const templates = await res.json();

    if (res.status === 200) return { templates };
    else this.error(res.status, templates.message);
  }
</script>

<script>
  import "@ignatiusmb/aqua/lib/animation/form/wave.css";
  import "@ignatiusmb/aqua/lib/template/login/slide.css";

  import { stores } from "@sapper/app";
  export let templates;

  const { page } = stores();
  const path = $page.path.split("/");
  const slug = path[path.length - 1];
</script>

<style>
  /* your styles go here */
</style>

<svelte:head>
  <title>Aqua &bull; Template &rarr; Form Login</title>
</svelte:head>
<!-- markup (zero or more items) goes here -->

<main>
  {#each templates as template}
    {#if template.page === slug}
      <section id={template.body.id}>
        <main>
          <div class="card">
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
                    <p>
                      Enter your personal details and start a journey with us
                    </p>
                    <button class="ghost white" id="sign-up">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            {#each template.body.cards as card}
              <div class="card">
                <h1>{card.title}</h1>
                <code>
                  {#each card.require as req}
                    {#if typeof req === 'object'}
                      <a href={req.link}>{req.text}</a>
                    {:else}{req}{/if}
                  {/each}
                </code>
                {#each card.boxes as box}
                  <pre
                    class="aqua-code"
                    data-language={box.language}
                    data-title={box.title}>
                    {box.body}
                  </pre>
                {/each}
              </div>
            {/each}
          </div>
        </main>
      </section>
    {/if}
  {/each}
</main>
