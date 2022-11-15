<script lang="ts">
  let email: String = null,
    subject: String = null,
    message: String = null,
    emailval = false,
    subjectval = false,
    messageval = false;

  function validatemail(e) {
    email = e.target.value;
    if (
      email &&
      !!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      emailval = true;
    else emailval = false;
  }

  function validatesubject(e) {
    subject = e.target.value;
    if (subject) subjectval = true;
    else subjectval = false;
  }

  function validatetextarea(e) {
    message = e.target.value;
    if (message) messageval = true;
    else messageval = false;
  }
</script>

<header>
  <h2 class="h2 article-title">Contact</h2>
</header>

<section class="mapbox" data-mapbox>
  <figure>
    <iframe
      title="google map"
      src="https://www.google.com/maps?q=[53/3 south tank st . Muthamzhil nagar, Kadaperi, Tambaram, Chennai, Tamil Nadu 600045, India]&output=embed"
      width="400"
      height="300"
      loading="lazy"
    />
  </figure>
</section>

<section class="contact-form">
  <h3 class="h3 form-title">Contact Form</h3>

  <form
    action="https://formspree.io/f/mjvzobkv"
    method="POST"
    class="form"
    data-form
  >
    <div class="input-wrapper">
      <input
        value={subject}
        on:input={validatesubject}
        type="text"
        name="fullname"
        class="form-input"
        placeholder="Full name"
        required
        data-form-input
      />

      <input
        value={email}
        on:input={validatemail}
        type="email"
        name="email"
        class="form-input"
        placeholder="Email address"
        required
        data-form-input
      />
    </div>

    <textarea
      value={message}
      on:input={validatetextarea}
      name="message"
      class="form-input"
      placeholder="Your Message"
      required
      data-form-input
    />

    {#if emailval && subjectval && messageval}
      <button class="form-btn" type="submit" data-form-btn>
        <ion-icon name="paper-plane" />
        <span>Send Message</span>
      </button>
    {:else}
      <button class="form-btn" type="submit" disabled data-form-btn>
        <ion-icon name="paper-plane" />
        <span>Send Message</span>
      </button>
    {/if}
  </form>
</section>