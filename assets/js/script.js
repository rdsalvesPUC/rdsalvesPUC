// Reveal sections as they enter the viewport.
// Progressive enhancement: everything is visible by default in CSS. Only once
// we know IntersectionObserver works do we opt an element into the hidden
// starting state, right before observing it — so a slow or failed script
// never leaves content invisible.
(function () {
  var targets = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window) || targets.length === 0) {
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(function (el) {
    el.classList.add("reveal-ready");
    observer.observe(el);
  });
})();

// Bilingual toggle (PT is the written source; EN lives inline in data-en).
// Progressive enhancement: with no JS the page stays in Portuguese. We swap
// innerHTML on toggle (so titles with <em> keep working) and remember the
// choice in localStorage across pages.
(function () {
  var STORE = "lang";
  var nodes = document.querySelectorAll("title[data-en], body [data-en]");
  var meta = document.querySelector('meta[name="description"][data-en]');
  if (nodes.length === 0 && !meta) return;

  function apply(lang) {
    var en = lang === "en";
    document.documentElement.lang = en ? "en" : "pt-BR";
    nodes.forEach(function (el) {
      if (el.dataset.pt == null) el.dataset.pt = el.innerHTML;
      el.innerHTML = en ? el.dataset.en : el.dataset.pt;
    });
    if (meta) {
      if (meta.dataset.pt == null) meta.dataset.pt = meta.getAttribute("content");
      meta.setAttribute("content", en ? meta.dataset.en : meta.dataset.pt);
    }
    document.querySelectorAll("[data-lang-set]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang-set") === lang ? "true" : "false");
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }

  var saved = "pt";
  try { saved = localStorage.getItem(STORE) || "pt"; } catch (e) {}
  apply(saved === "en" ? "en" : "pt");

  document.querySelectorAll("[data-lang-set]").forEach(function (b) {
    b.addEventListener("click", function () {
      apply(b.getAttribute("data-lang-set"));
    });
  });
})();
