/* =====================================================================
   Portfolio behaviour  (plain JavaScript, no libraries)
   You should not need to edit this file to change your content —
   use assets/js/data.js instead.
   ===================================================================== */
(function () {
  "use strict";

  var data = window.portfolioData || (typeof portfolioData !== "undefined" ? portfolioData : null);
  var root = document.documentElement;
  var body = document.body;
  // Pages inside /projects/ set data-base="../" so asset paths still work
  var BASE = body.getAttribute("data-base") || "";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.add("js");

  /* ---------- small helpers ---------- */
  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function asset(path) {
    if (!path) return "";
    if (/^(https?:|mailto:|tel:|\/|#)/.test(path)) return path;
    return BASE + path;
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function chips(items, extra) {
    if (!items || !items.length) return "";
    return '<ul class="chips' + (extra ? " " + extra : "") + '">' +
      items.map(function (t) { return '<li class="chip">' + esc(t) + "</li>"; }).join("") + "</ul>";
  }
  function list(items) {
    return "<ul>" + (items || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }
  function paragraphs(text) {
    return String(text || "").split(/\n\s*\n/).map(function (p) { return "<p>" + esc(p.trim()) + "</p>"; }).join("");
  }
  function fill(name, html) {
    var el = $('[data-render="' + name + '"]');
    if (el) el.innerHTML = html;
    return el;
  }

  /* =================================================================
     PROFILE: links, email, resume, form endpoint
     ================================================================= */
  function applyProfile() {
    if (!data || !data.profile) return;
    var p = data.profile;
    var links = {
      linkedin: p.linkedin,
      github: p.github,
      resume: asset(p.resume),
      email: p.email ? "mailto:" + p.email : ""
    };
    $all("[data-profile-link]").forEach(function (a) {
      var key = a.getAttribute("data-profile-link");
      var url = links[key];
      if (url) { a.setAttribute("href", url); }
      else {
        // Hide the link (or its list item) when the value is left empty
        var li = a.closest("li");
        (li || a).hidden = true;
      }
    });
    $all("[data-profile-text]").forEach(function (el) {
      var key = el.getAttribute("data-profile-text");
      if (p[key]) el.textContent = p[key];
    });
    var form = $("#contact-form");
    if (form && p.formspreeEndpoint) form.setAttribute("action", p.formspreeEndpoint);

    // Hero extras
    var badge = $('[data-hero="badge"]');
    if (badge) { if (data.heroBadge) badge.textContent = data.heroBadge; else badge.closest(".badge").hidden = true; }
    var typed = $('[data-hero="typed"]');
    var phrases = typedPhrases();
    if (typed && phrases.length) typed.textContent = phrases[0];
    renderWordRing();
  }

  /* =================================================================
     WORD RING: the phrases in data.js (heroTags) set on a circle
     around the photo. The text size is worked out so the last word
     meets the first one and the ring closes exactly.
     ================================================================= */
  var RING_RADIUS = 216;                       // matches the circle path in index.html
  var RING_LENGTH = 2 * Math.PI * RING_RADIUS; // one full turn, in SVG units
  var RING_GAP = "\u00a0\u00a0\u2022\u00a0\u00a0"; // the dot between phrases

  function renderWordRing() {
    var svg = $(".portrait__words");
    if (!svg) return;
    var tags = (data.heroTags || []).filter(function (t) { return t && String(t).trim(); });
    if (!tags.length) { svg.style.display = "none"; return; }
    var tp = svg.querySelector("textPath");
    tp.innerHTML = tags.map(function (t) {
      return esc(String(t).toUpperCase()) + '<tspan class="portrait__sep">' + RING_GAP + "</tspan>";
    }).join("");
    var caption = $('[data-hero="focus"]');
    if (caption) caption.textContent = "Focus areas: " + tags.join(", ") + ".";
  }

  function initWordRing() {
    var svg = $(".portrait__words");
    if (!svg || svg.style.display === "none") return;
    var text = svg.querySelector("text");
    var words = text.textContent, count = words.length;
    var TRACK = 0.13;                          // preferred letter spacing, in em
    var pen = document.createElement("canvas").getContext("2d");
    function fit() {
      if (!count || !pen) return;
      // width of the letters alone, per 1px of text size (measured on a canvas in the same font)
      var style = getComputedStyle(text);
      pen.font = style.fontWeight + " 100px " + style.fontFamily;
      var letters = pen.measureText(words).width / 100;
      // letters + spacing must add up to one full turn of the circle
      var size = Math.max(10.5, Math.min(18, RING_LENGTH / (letters + count * TRACK)));
      var spacing = (RING_LENGTH - letters * size) / count;
      text.style.fontSize = size.toFixed(3) + "px";
      text.style.letterSpacing = spacing.toFixed(3) + "px";
      // turn the ring so the first phrase sits centred at the top
      var first = words.indexOf("\u00a0") < 0 ? count : words.indexOf("\u00a0");
      var arc = pen.measureText(words.slice(0, first)).width / 100 * size + first * spacing;
      text.setAttribute("transform", "rotate(" + (-(arc / RING_LENGTH) * 180).toFixed(2) + " 252 252)");
    }
    fit();
    // fit again once the real font has arrived: the fallback font has different widths
    window.addEventListener("load", fit);
    if (document.fonts) {
      if (document.fonts.load) document.fonts.load("700 15px " + getComputedStyle(text).fontFamily).then(fit, function () {});
      if (document.fonts.ready) document.fonts.ready.then(fit);
      if (document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", fit);
    }
  }

  /* =================================================================
     BACK TO TOP: the name in the header and the footer link
     ================================================================= */
  function initScrollTop() {
    $all('a[href="#top"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      });
    });
  }

  /* =================================================================
     CV VIEWER: every "View CV" button opens the CV pages as pictures
     in a full-screen reader on the same page. There is no download
     button and the PDF itself is not part of the site.
     Pages are listed in data.js (profile.resumePages).
     ================================================================= */
  function resumePages() {
    var list = (data && data.profile && data.profile.resumePages) || [];
    return list.filter(Boolean).map(asset);
  }
  function resumePagesHtml() {
    var pages = resumePages(), name = (data.profile && data.profile.name) || "";
    return pages.map(function (src, i) {
      return '<figure class="cv-page"><img src="' + esc(src) + '" alt="CV of ' + esc(name) + ", page " + (i + 1) + " of " + pages.length +
        '" draggable="false"' + (i ? ' loading="lazy"' : "") + "></figure>";
    }).join("");
  }
  function initResumeViewer() {
    var pages = resumePages();
    var onPage = $('[data-render="resumePages"]');      // resume.html shows the pages directly
    if (onPage && pages.length) onPage.innerHTML = resumePagesHtml();
    var links = $all('[data-profile-link="resume"]');
    if (onPage) { links.forEach(function (a) { a.setAttribute("aria-current", "page"); }); return; }
    if (!pages.length || !links.length || !window.HTMLDialogElement) return; // links then open resume.html

    var dialog = null;
    function build() {
      dialog = document.createElement("dialog");
      dialog.className = "cv-viewer";
      dialog.setAttribute("aria-label", "CV");
      dialog.innerHTML =
        '<div class="cv-viewer__bar">' +
          '<p class="cv-viewer__title">' + esc((data.profile && data.profile.name) || "CV") + ' <span class="cv-viewer__meta">CV, ' + pages.length + (pages.length === 1 ? " page" : " pages") + "</span></p>" +
          '<div class="cv-viewer__tools">' +
            '<button class="icon-btn cv-viewer__zoom" type="button" data-zoom="-1" aria-label="Zoom out" title="Zoom out">&minus;</button>' +
            '<button class="icon-btn cv-viewer__zoom" type="button" data-zoom="1" aria-label="Zoom in" title="Zoom in">+</button>' +
            '<button class="btn btn--outline btn--small cv-viewer__close" type="button">Close</button>' +
          "</div>" +
        "</div>" +
        '<div class="cv-viewer__scroll" tabindex="0"><div class="cv-pages">' + resumePagesHtml() + "</div></div>";
      body.appendChild(dialog);
      dialog.querySelector(".cv-viewer__close").addEventListener("click", function () { dialog.close(); });
      // zoom buttons: make the pages wider than the screen so small print can be read, then scroll
      var steps = [1, 1.5, 2, 2.5], step = 0, sheet = dialog.querySelector(".cv-pages");
      var zoomButtons = $all(".cv-viewer__zoom", dialog);
      function setZoom(next) {
        step = Math.max(0, Math.min(steps.length - 1, next));
        sheet.style.setProperty("--cv-zoom", steps[step]);
        zoomButtons.forEach(function (b) { b.disabled = (+b.getAttribute("data-zoom") < 0) ? step === 0 : step === steps.length - 1; });
      }
      zoomButtons.forEach(function (b) { b.addEventListener("click", function () { setZoom(step + (+b.getAttribute("data-zoom"))); }); });
      setZoom(0);
      dialog.addEventListener("click", function (e) {             // click beside the pages closes
        if (e.target === dialog || e.target.classList.contains("cv-viewer__scroll") || e.target.classList.contains("cv-pages")) dialog.close();
      });
      dialog.addEventListener("close", function () { root.classList.remove("cv-open"); });
      dialog.addEventListener("contextmenu", function (e) { if (e.target.closest(".cv-page")) e.preventDefault(); });
    }
    links.forEach(function (a) {
      a.removeAttribute("target");
      a.addEventListener("click", function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
        e.preventDefault();
        if (!dialog) build();
        root.classList.add("cv-open");
        dialog.showModal();
        dialog.querySelector(".cv-viewer__scroll").scrollTop = 0;
      });
    });
  }

  /* =================================================================
     HOME PAGE SECTIONS
     ================================================================= */
  function renderHighlights() {
    var el = $('[data-render="highlights"]');
    if (!el) return;
    var items = data.highlights || [];
    if (!items.length) { el.closest(".marquee").hidden = true; return; }
    var group = items.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    // two copies so the strip loops seamlessly; the copy is hidden from screen readers
    el.innerHTML = '<ul class="marquee__group">' + group + '</ul><ul class="marquee__group" aria-hidden="true">' + group + "</ul>";
  }

  function renderAboutStats() {
    var el = $('[data-render="aboutStats"]');
    if (!el) return;
    var stats = data.aboutStats || [];
    if (!stats.length) { el.hidden = true; return; }
    el.innerHTML = stats.map(function (st) {
      return '<div class="card stat reveal"><p class="stat__value">' + esc(st.value) + '</p><p class="stat__label">' + esc(st.label) + "</p></div>";
    }).join("");
  }

  function renderCompetencies() {
    if (!data.competencies) return;
    fill("competencies", data.competencies.map(function (g) {
      return '<div class="card skill-group reveal">' +
        '<h3 class="skill-group__title">' + esc(g.group) + "</h3>" +
        chips(g.items) + "</div>";
    }).join(""));
  }

  function renderExperience() {
    if (!data.experience) return;
    fill("experience", data.experience.map(function (j) {
      return '<li class="card job reveal">' +
        '<div class="job__top">' +
          "<div>" +
            '<h3 class="job__role">' + esc(j.role) + "</h3>" +
            '<p class="job__company"><strong>' + esc(j.company) + "</strong> · " + esc(j.location) + "</p>" +
          "</div>" +
          '<span class="job__dates">' + esc(j.start) + " – " + esc(j.end) + "</span>" +
        "</div>" +
        (j.summary ? '<p class="job__summary">' + esc(j.summary) + "</p>" : "") +
        (j.achievements && j.achievements.length
          ? '<h4 class="job__label">Key achievements</h4>' + list(j.achievements) : "") +
        (j.impact ? '<p class="job__impact"><strong>Business impact:</strong> ' + esc(j.impact) + "</p>" : "") +
        (j.responsibilities && j.responsibilities.length
          ? '<details class="details"><summary>Responsibilities (' + j.responsibilities.length + ")</summary>" + list(j.responsibilities) + "</details>"
          : "") +
        (j.tools && j.tools.length ? '<div class="job__tools">' + chips(j.tools) + "</div>" : "") +
        "</li>";
    }).join(""));
  }

  function renderProjects() {
    if (!data.projects) return;
    fill("projects", data.projects.map(function (p) {
      var url = BASE + "projects/" + p.slug + ".html";
      return '<article class="card project reveal">' +
        '<a class="project__media" href="' + url + '" tabindex="-1" aria-hidden="true">' +
          '<img src="' + esc(asset(p.image)) + '" alt="" width="1600" height="1000" loading="lazy" decoding="async">' +
        "</a>" +
        '<div class="project__body">' +
          '<ul class="tags">' + (p.categories || []).map(function (c) { return '<li class="tag">' + esc(c) + "</li>"; }).join("") + "</ul>" +
          '<h3 class="project__title"><a href="' + url + '">' + esc(p.shortTitle || p.title) + "</a></h3>" +
          '<p class="project__summary">' + esc(p.summary) + "</p>" +
          '<p class="project__meta"><strong>Tools:</strong> ' + esc((p.tools || []).join(", ")) + "</p>" +
          (p.skills && p.skills.length ? '<p class="project__meta"><strong>Skills:</strong> ' + esc(p.skills.join(", ")) + "</p>" : "") +
          '<div class="project__actions"><a class="btn btn--outline btn--small" href="' + url + '">View Case Study<span class="visually-hidden">: ' + esc(p.shortTitle || p.title) + "</span></a></div>" +
        "</div></article>";
    }).join(""));
  }

  function renderApproach() {
    if (!data.approach) return;
    fill("approach", data.approach.map(function (st, i) {
      return '<li class="card step reveal">' +
        '<span class="step__num" aria-hidden="true">' + String(i + 1).padStart(2, "0") + "</span>" +
        '<h3 class="step__title"><span class="visually-hidden">Step ' + (i + 1) + ": </span>" + esc(st.step) + "</h3>" +
        '<p class="step__text">' + esc(st.text) + "</p>" +
        (st.evidence ? '<p class="step__evidence"><b>Where I used it</b>' + esc(st.evidence) + "</p>" : "") +
        "</li>";
    }).join(""));
  }

  function renderResults() {
    var el = $('[data-render="results"]');
    if (!el) return;
    if (!data.results || !data.results.length) {
      el.hidden = true;
      var h = $("#results-title"); if (h) h.hidden = true;
      return;
    }
    el.innerHTML = data.results.map(function (r) {
      return '<div class="card result reveal">' +
        '<p class="result__value">' + esc(r.value) + "</p>" +
        '<p class="result__text">' + esc(r.text) + "</p>" +
        (r.where ? '<p class="result__where">' + esc(r.where) + "</p>" : "") +
        "</div>";
    }).join("");
  }

  /* The rotating phrases for the tagline (data.js → heroTypedPhrases) */
  function typedPhrases() {
    if (!data) return [];
    var list = data.heroTypedPhrases;
    if (!list || !list.length) list = data.heroTypedText ? [data.heroTypedText] : [];
    return list.filter(function (t) { return t && String(t).trim(); }).map(String);
  }

  /* Types each phrase, holds it, erases it, then moves to the next one.
     With one phrase it is typed once and stays. Skipped when the visitor
     prefers reduced motion: the first phrase is simply shown. */
  function initTyped() {
    var el = $('[data-hero="typed"]');
    if (!el) return;
    var phrases = typedPhrases();
    if (!phrases.length) phrases = [el.textContent];

    // Screen readers get one steady sentence instead of letter-by-letter changes
    var box = el.parentNode;
    var sr = document.createElement("span");
    sr.className = "visually-hidden";
    sr.textContent = " " + phrases[0];
    box.parentNode.insertBefore(sr, box);
    box.setAttribute("aria-hidden", "true");

    if (reduceMotion) { el.textContent = phrases[0]; return; }

    var TYPE = 55, ERASE = 28, HOLD = 2000, GAP = 380;
    var index = 0, pos = 0, erasing = false;
    el.textContent = "";
    (function tick() {
      var full = phrases[index];
      if (!erasing) {
        el.textContent = full.slice(0, ++pos);
        if (pos < full.length) return setTimeout(tick, TYPE);
        if (phrases.length < 2) return;           // single phrase: stop here
        erasing = true;
        return setTimeout(tick, HOLD);
      }
      el.textContent = full.slice(0, --pos);
      if (pos > 0) return setTimeout(tick, ERASE);
      erasing = false;
      index = (index + 1) % phrases.length;
      setTimeout(tick, GAP);
    })();
  }

  /* =================================================================
     FIRST SCREEN: keeps the skills strip visible without scrolling.
     style.css handles the usual screen sizes; this catches the rest by
     moving the strip under the header when the hero is too tall to fit.
     ================================================================= */
  function initFirstScreen() {
    var wrap = $(".first-screen");
    if (!wrap) return;
    var header = $(".site-header"), inner = $(".hero__inner", wrap), strip = $(".marquee", wrap);
    if (!inner || !strip) return;
    var queued = false;
    function fit() {
      queued = false;
      var room = window.innerHeight - (header ? header.offsetHeight : 0);
      wrap.classList.toggle("is-tall", inner.offsetHeight + strip.offsetHeight > room + 1);
    }
    function queue() { if (!queued) { queued = true; requestAnimationFrame(fit); } }
    fit();
    window.addEventListener("resize", queue);
    window.addEventListener("load", queue);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(queue);
    if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", queue);
  }

  /* =================================================================
     CURSOR GLOW: a soft light that trails the mouse.
     Only on devices with a mouse, and off when reduced motion is on.
     Colour and size are set in style.css (.cursor-glow, --cursor-glow).
     ================================================================= */
  function initCursorGlow() {
    if (reduceMotion || !window.matchMedia) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    var glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    body.appendChild(glow);

    var x = 0, y = 0, tx = 0, ty = 0, raf = 0, started = false;
    function frame() {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      glow.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
      raf = (Math.abs(tx - x) > 0.4 || Math.abs(ty - y) > 0.4) ? requestAnimationFrame(frame) : 0;
    }
    window.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      tx = e.clientX; ty = e.clientY;
      if (!started) { started = true; x = tx; y = ty; }
      glow.classList.add("is-on");
      if (!raf) raf = requestAnimationFrame(frame);
    }, { passive: true });
    document.documentElement.addEventListener("mouseleave", function () { glow.classList.remove("is-on"); });
    window.addEventListener("blur", function () { glow.classList.remove("is-on"); });
  }

  /* =================================================================
     CASE-STUDY PAGE  (projects/<slug>.html)
     ================================================================= */
  function renderCaseStudy() {
    var mount = $("#case-study");
    if (!mount) return;
    var slug = body.getAttribute("data-project");
    var projects = data.projects || [];
    var index = -1;
    for (var i = 0; i < projects.length; i++) { if (projects[i].slug === slug) { index = i; break; } }
    if (index === -1) {
      mount.innerHTML = '<div class="notice"><h1 class="case__title">Case study not found</h1>' +
        '<p class="case__summary">This page has no matching project in assets/js/data.js. Check that data-project on this page matches a project slug.</p>' +
        '<p style="margin-top:1.5rem"><a class="btn" href="' + BASE + 'index.html#projects">See all projects</a></p></div>';
      return;
    }
    var p = projects[index];
    var prev = projects[index - 1], next = projects[index + 1];
    document.title = (p.shortTitle || p.title) + " | Case study | " + (data.profile ? data.profile.shortName : "");

    var steps = [
      { id: "problem", title: "Business problem", html: paragraphs(p.problem) +
          "" },
      { id: "objective", title: "Objective", html: paragraphs(p.objective) },
      { id: "approach", title: "Approach", html: list(p.methodology) +
          (p.dataSource ? '<p class="case-step__note"><strong>Data.</strong> ' + esc(p.dataSource) + "</p>" : "") +
          chips(p.tools, "chips--small") },
      { id: "analysis", title: "Analysis", html: list(p.analysis) },
      { id: "findings", title: "Findings", html: list(p.findings) },
      { id: "recommendations", title: "Recommendations", html: list(p.recommendations) },
      { id: "outcome", title: "Outcome", html: paragraphs(p.outcome) + filesHtml(p) },
      { id: "impact", title: "Business impact", html: paragraphs(p.impact) }
    ].filter(function (s) { return s.html && s.html.replace(/<[^>]+>/g, "").trim(); });

    var figures = (p.keyFigures || []).map(function (f) {
      return '<div class="card figure"><p class="figure__value">' + esc(f.value) + '</p><p class="figure__label">' + esc(f.label) + "</p></div>";
    }).join("");

    mount.innerHTML =
      '<div class="case-hero">' +
        '<div class="hero__glow hero__glow--a" aria-hidden="true"></div><div class="hero__glow hero__glow--b" aria-hidden="true"></div>' +
        '<div class="container case">' +
          '<a class="case__back" href="' + BASE + 'index.html#projects">' +
            '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>All projects</a>' +
          '<header class="case__head">' +
            '<ul class="tags">' + (p.categories || []).map(function (c) { return '<li class="tag">' + esc(c) + "</li>"; }).join("") + "</ul>" +
            '<h1 class="case__title">' + esc(p.title) + "</h1>" +
            '<p class="case__summary">' + esc(p.summary) + "</p>" +
          "</header>" +
          '<dl class="case__meta">' +
            '<div class="card"><dt>My role</dt><dd>' + esc(p.role) + "</dd></div>" +
            (p.skills && p.skills.length ? '<div class="card"><dt>Skills shown</dt><dd>' + esc(p.skills.join(", ")) + "</dd></div>" : "") +
          "</dl>" +
        "</div>" +
      "</div>" +
      '<div class="container">' +
        '<figure class="case__cover"><img src="' + esc(asset(p.image)) + '" alt="' + esc(p.imageAlt || "") + '" width="1600" height="1000"></figure>' +
        (figures ? '<div class="figures" aria-label="Key figures">' + figures + "</div>" : "") +
        '<div class="case__body">' +
          '<nav class="toc" aria-label="Case study sections"><p class="toc__title">On this page</p><ol>' +
            steps.map(function (st, i) {
              return '<li><a href="#' + st.id + '"><span>' + (i + 1) + "</span>" + esc(st.title) + "</a></li>";
            }).join("") +
          "</ol></nav>" +
          '<div class="case__content">' +
            steps.map(function (st, i) {
              return '<section class="card case-step' + (st.id === "impact" ? " case-step--impact" : "") + '" id="' + st.id + '" aria-labelledby="' + st.id + '-h">' +
                '<div class="case-step__head"><span class="case-step__num" aria-hidden="true">' + (i + 1) + "</span>" +
                '<h2 class="case-step__title" id="' + st.id + '-h">' + esc(st.title) + "</h2></div>" +
                st.html + "</section>";
            }).join("") +
          "</div>" +
        "</div>" +
        '<nav class="case-nav" aria-label="More case studies">' +
          (prev ? '<a class="card" href="' + prev.slug + '.html"><span class="case-nav__dir">Previous case study</span><span class="case-nav__name">' + esc(prev.shortTitle || prev.title) + "</span></a>" : "") +
          (next ? '<a class="card case-nav__next" href="' + next.slug + '.html"><span class="case-nav__dir">Next case study</span><span class="case-nav__name">' + esc(next.shortTitle || next.title) + "</span></a>" : "") +
        "</nav>" +
      "</div>";

    // highlight the current section in the side menu
    if ("IntersectionObserver" in window) {
      var tocLinks = $all(".toc a");
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            tocLinks.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id); });
          }
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      $all(".case-step").forEach(function (s) { io.observe(s); });
    }
  }

  function filesHtml(p) {
    var docs = (p.documents || []).filter(function (d) { return d.file; });
    var links = p.links || {};
    var html = docs.map(function (d) {
      return '<a class="btn btn--ghost btn--small" href="' + esc(asset(d.file)) + '" download>Download ' + esc(d.label) + "</a>";
    }).join("");
    if (links.dashboard) html += '<a class="btn btn--ghost btn--small" href="' + esc(links.dashboard) + '" target="_blank" rel="noopener">Open live dashboard</a>';
    if (links.github) html += '<a class="btn btn--ghost btn--small" href="' + esc(links.github) + '" target="_blank" rel="noopener">View on GitHub</a>';
    return html ? '<div class="case__files">' + html + "</div>" : "";
  }

  /* =================================================================
     NAVIGATION
     ================================================================= */
  function initNav() {
    var header = $(".site-header");
    var toggle = $(".nav__toggle");
    var menu = $("#nav-menu");

    function setOpen(open) {
      if (!toggle || !menu) return;
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
    }
    if (toggle) {
      toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setOpen(false); toggle.focus(); }
      });
      document.addEventListener("click", function (e) {
        if (toggle.getAttribute("aria-expanded") === "true" && !header.contains(e.target)) setOpen(false);
      });
      $all("#nav-menu a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
      window.addEventListener("resize", function () { if (window.innerWidth > 960) setOpen(false); });
    }

    function onScroll() { if (header) header.classList.toggle("is-scrolled", window.scrollY > 8); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // highlight the section currently on screen (home page only)
    var links = $all('.nav__links a[href^="#"]');
    if (links.length && "IntersectionObserver" in window) {
      var map = {};
      links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
      var sections = Object.keys(map).map(function (id) { return document.getElementById(id); }).filter(Boolean);
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            links.forEach(function (a) { a.classList.remove("is-active"); a.removeAttribute("aria-current"); });
            var link = map[e.target.id];
            if (link) { link.classList.add("is-active"); link.setAttribute("aria-current", "true"); }
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { io.observe(s); });
    }
  }

  /* =================================================================
     THEME (light / dark), remembered in localStorage
     ================================================================= */
  function initTheme() {
    var btn = $(".theme-toggle");
    if (!btn) return;
    var label = btn.querySelector(".visually-hidden");
    function sync() {
      var dark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-pressed", String(dark));
      if (label) label.textContent = "Dark mode";
      btn.title = dark ? "Switch to light mode" : "Switch to dark mode";
    }
    sync();
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable: theme still changes for this visit */ }
      sync();
    });
  }

  /* =================================================================
     REVEAL ON SCROLL (subtle; skipped when reduced motion is on)
     ================================================================= */
  function initReveal() {
    $all(".section__head, .about__text, .contact").forEach(function (el) { el.classList.add("reveal"); });
    var items = $all(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  /* =================================================================
     CONTACT FORM (Formspree)
     ================================================================= */
  function initForm() {
    var form = $("#contact-form");
    if (!form) return;
    var status = $(".form__status", form);
    var button = $('button[type="submit"]', form);
    var buttonLabel = $(".btn__label", button);
    var email = data && data.profile ? data.profile.email : "";

    var rules = {
      name: function (v) { return v ? "" : "Enter your name."; },
      email: function (v) {
        if (!v) return "Enter your email address.";
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter an email address like name@example.com.";
      },
      subject: function (v) { return v ? "" : "Add a subject."; },
      message: function (v) { return v.length >= 10 ? "" : "Write a message of at least 10 characters."; }
    };

    function check(field) {
      var rule = rules[field.name];
      if (!rule) return true;
      var msg = rule(field.value.trim());
      var err = document.getElementById(field.id + "-error");
      field.setAttribute("aria-invalid", msg ? "true" : "false");
      if (err) { err.textContent = msg; err.hidden = !msg; }
      return !msg;
    }

    Object.keys(rules).forEach(function (name) {
      var f = form.elements[name];
      if (!f) return;
      f.addEventListener("input", function () { if (f.getAttribute("aria-invalid") === "true") check(f); });
    });

    function setStatus(text, type) {
      status.textContent = text;
      status.className = "form__status" + (type ? " is-" + type : "");
    }
    function setLoading(on) {
      button.classList.toggle("is-loading", on);
      button.disabled = on;
      buttonLabel.textContent = on ? "Sending…" : "Send message";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setStatus("", "");
      var firstBad = null;
      Object.keys(rules).forEach(function (name) {
        var f = form.elements[name];
        if (f && !check(f) && !firstBad) firstBad = f;
      });
      if (firstBad) { firstBad.focus(); setStatus("Please fix the highlighted fields.", "error"); return; }

      var endpoint = form.getAttribute("action") || "";
      if (!/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(endpoint) || /X{4,}/.test(endpoint)) {
        setStatus("The contact form isn't connected yet." + (email ? " Please email " + email + " instead." : ""), "error");
        return;
      }

      var subj = form.elements._subject;
      if (subj) subj.value = "Portfolio: " + form.elements.subject.value.trim();

      setLoading(true);
      fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            Object.keys(rules).forEach(function (n) { var f = form.elements[n]; if (f) f.removeAttribute("aria-invalid"); });
            setStatus("Message sent. Thank you, I'll reply by email.", "success");
            return;
          }
          return res.json().then(function (json) {
            var msg = json && json.errors ? json.errors.map(function (x) { return x.message; }).join(" ") : "";
            setStatus("Your message didn't send. " + (msg ? msg + " " : "") + "Try again" + (email ? ", or email " + email + "." : "."), "error");
          }, function () {
            setStatus("Your message didn't send. Try again" + (email ? ", or email " + email + "." : "."), "error");
          });
        })
        .catch(function () {
          setStatus("Your message didn't send because the connection failed. Check your internet connection and try again" + (email ? ", or email " + email + "." : "."), "error");
        })
        .then(function () { setLoading(false); });
    });
  }

  /* =================================================================
     START
     ================================================================= */
  if (data) {
    applyProfile();
    renderHighlights();
    renderAboutStats();
    renderCompetencies();
    renderExperience();
    renderProjects();
    renderApproach();
    renderResults();
    renderCaseStudy();
  }
  initNav();
  initTheme();
  initReveal();
  initTyped();
  initWordRing();
  initFirstScreen();
  initScrollTop();
  initResumeViewer();
  initCursorGlow();
  initForm();
  $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // If the page was opened with a #section link, jump there after content renders
  if (location.hash && body.getAttribute("data-page") === "home") {
    var target = document.getElementById(location.hash.slice(1));
    if (target) setTimeout(function () { target.scrollIntoView(); }, 0);
  }
})();
