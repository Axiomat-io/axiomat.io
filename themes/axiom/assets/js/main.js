// Early-access capture. Submits over fetch so the visitor never leaves the page;
// falls back to a normal form POST if fetch isn't available.
(function () {
  function init() {
    document.querySelectorAll('[data-signup]').forEach(function (form) {
      if (!window.fetch) return; // let the browser do a plain POST instead

      var msg = form.querySelector('[data-signup-msg]');
      var button = form.querySelector('button[type=submit]');

      form.addEventListener('submit', function (event) {
        event.preventDefault();

        var data = new FormData(form);

        if (data.get('company_website')) return; // honeypot tripped

        var email = (data.get('email') || '').trim();
        if (!email || email.indexOf('@') < 1) {
          setMessage('error', 'Please enter a valid email address.');
          return;
        }

        var label = button.textContent;
        button.disabled = true;
        button.textContent = 'Sending…';
        setMessage('', '');

        fetch(form.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data
        })
          .then(function (response) {
            if (!response.ok) throw new Error('Request failed: ' + response.status);
            form.reset();
            setMessage('ok', "You're on the list. We'll be in touch shortly.");
          })
          .catch(function () {
            setMessage(
              'error',
              "That didn't go through. Please try again, or email hello@axiomat.io."
            );
          })
          .then(function () {
            button.disabled = false;
            button.textContent = label;
          });
      });

      function setMessage(state, text) {
        if (!msg) return;
        msg.textContent = text;
        msg.className = 'signup-msg' + (state ? ' is-' + state : '');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
