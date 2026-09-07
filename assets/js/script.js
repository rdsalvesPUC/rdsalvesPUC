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
