// Live theme picker. THEMES is lifted verbatim from the product
// (ward/frontend/src/lib/themes.js) so the swatches on this page are the exact
// schemes a Ward user gets — clicking one restyles the marketing page the same
// way it restyles the app. Keep this list in sync when the app's changes.
(function () {
  var THEMES = [
    { key: 'ward',     name: 'Ward',        vars: { bg: '#0d1216', surface: '#141b21', surface2: '#1b242c', border: '#253039', border2: '#34424d', text: '#dce6ec', muted: '#8496a1', accent: '#2ba0b0', onBrand: '#04191c' } },
    { key: 'slate',    name: 'Slate',       vars: { bg: '#0f172a', surface: '#1e293b', border: '#334155', text: '#e2e8f0', muted: '#94a3b8', accent: '#6366f1' } },
    { key: 'midnight', name: 'Midnight',    vars: { bg: '#07101c', surface: '#0e1a2a', border: '#1e3048', text: '#c8d8e8', muted: '#4a6880', accent: '#c17f3b' } },
    { key: 'dusk',     name: 'Dusk',        vars: { bg: '#2a1f33', surface: '#362a40', border: '#4a3a55', text: '#e8ddf0', muted: '#7a6888', accent: '#e8906a' } },
    { key: 'patina',   name: 'Patina',      vars: { bg: '#0e1a14', surface: '#16261c', border: '#284032', text: '#d4c8a8', muted: '#507050', accent: '#b8963c' } },
    { key: 'tokyo',    name: 'Neon Tokyo',  vars: { bg: '#0a0a12', surface: '#12121f', border: '#2a2a40', text: '#e0e8f8', muted: '#4a5878', accent: '#ff2d78' } },
    { key: 'ether',    name: 'Ether',       vars: { bg: '#0d0221', surface: '#1a0a38', border: '#2a1a48', text: '#c0d0f0', muted: '#6a7aa8', accent: '#3060e8' } },
    { key: 'canvas',   name: 'Canvas',      vars: { bg: '#faf7f0', surface: '#ffffff', border: '#e6ddcd', text: '#2c1810', muted: '#8b6f5e', accent: '#c17f3b' } },
    { key: 'fog',      name: 'Fog',         vars: { bg: '#e8eceb', surface: '#f5f7f6', border: '#cdd6d4', text: '#1e2a28', muted: '#6a8480', accent: '#4a7a72' } },
    { key: 'chalk',    name: 'Chalk',       vars: { bg: '#f5f3ef', surface: '#ffffff', border: '#e0ddd5', text: '#1a1a18', muted: '#9a9488', accent: '#3b6e60' } },
    { key: 'skylight', name: 'Skylight',    vars: { bg: '#c8dff0', surface: '#eaf3fb', border: '#aecbe0', text: '#152535', muted: '#5b7f93', accent: '#3a91c4' } }
  ];

  // Same relative-luminance test the app uses to pick readable text on the accent.
  function luminance(hex) {
    var m = /^#?([0-9a-f]{6})$/i.exec(hex || '');
    if (!m) return 0;
    var n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
      .map(function (v) {
        var c = v / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      })
      .reduce(function (acc, c, i) { return acc + [0.2126, 0.7152, 0.0722][i] * c; }, 0);
  }

  function apply(theme) {
    var v = theme.vars;
    var derived = {
      surface2: v.surface2 || v.surface,
      border2: v.border2 || v.border,
      // the site uses a second accent for gradients; themes carry one, so
      // reuse it rather than inventing a hue the product never shows
      'accent-2': v.accent,
      'on-brand': v.onBrand || (luminance(v.accent) > 0.4 ? '#04191c' : '#ffffff')
    };
    var style = document.body.style;
    Object.keys(v).forEach(function (k) {
      if (k === 'onBrand') return;
      style.setProperty('--' + k.replace(/[A-Z]/g, function (c) { return '-' + c.toLowerCase(); }), v[k]);
    });
    Object.keys(derived).forEach(function (k) { style.setProperty('--' + k, derived[k]); });
  }

  function initThemePicker() {
    var mount = document.querySelector('[data-theme-picker]');
    if (!mount) return;

    THEMES.forEach(function (theme, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'swatch';
      b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
      b.innerHTML =
        '<span class="swatch-dots">' +
          '<span class="swatch-dot" style="background:' + theme.vars.bg + '"></span>' +
          '<span class="swatch-dot" style="background:' + theme.vars.surface + '"></span>' +
          '<span class="swatch-dot" style="background:' + theme.vars.accent + '"></span>' +
        '</span>' + theme.name;
      b.addEventListener('click', function () {
        apply(theme);
        mount.querySelectorAll('.swatch').forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
      });
      mount.appendChild(b);
    });
  }

  // Play the transcript in sequence when it scrolls into view, so the section
  // reads the way the conversation actually happened rather than as a wall.
  function initChatDemo() {
    var demo = document.querySelector('[data-chat-demo]');
    if (!demo || !window.IntersectionObserver) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var msgs = Array.prototype.slice.call(demo.querySelectorAll('.chat-msg'));
    if (!msgs.length) return;
    demo.classList.add('is-playing');

    var typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.setAttribute('aria-hidden', 'true');
    typing.innerHTML = '<i></i><i></i><i></i>';

    var timers = [];
    function play() {
      var delay = 0;
      msgs.forEach(function (msg, i) {
        var isWard = msg.classList.contains('chat-ward');
        // a beat before your own message, a longer "thinking" pause before Ward's
        delay += i === 0 ? 200 : isWard ? 620 : 460;
        if (isWard) {
          var showTyping = delay - 480;
          timers.push(setTimeout(function () {
            demo.insertBefore(typing, msg);
            typing.classList.add('is-in');
          }, showTyping));
        }
        timers.push(setTimeout(function () {
          if (isWard) typing.classList.remove('is-in');
          msg.classList.add('is-in');
        }, delay));
      });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.disconnect();
        play();
      });
    }, { threshold: 0.25 });
    io.observe(demo);

    // If the tab is hidden mid-play the timers still fire; that's fine, but bail
    // out cleanly on unload so nothing runs against a torn-down DOM.
    window.addEventListener('pagehide', function () {
      timers.forEach(clearTimeout);
    });
  }

  // Carry plan intent from the pricing CTAs into the early-access form. The site can't
  // run Checkout — that lives behind auth in the app — so the useful thing a pricing
  // button can do is record which plan someone came for.
  function initPlanIntent() {
    var field = document.querySelector('[data-signup-plan]');
    var note = document.querySelector('[data-signup-plan-note]');
    if (!field) return;

    document.querySelectorAll('[data-plan]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var plan = btn.getAttribute('data-plan');
        var price = btn.getAttribute('data-plan-price') || '';
        field.value = plan;
        if (note) {
          note.textContent = 'Asking about ' + plan + (price ? ' — ' + price : '') + '.';
          note.hidden = false;
        }
      });
    });
  }

  function boot() {
    initThemePicker();
    initChatDemo();
    initPlanIntent();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();

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
