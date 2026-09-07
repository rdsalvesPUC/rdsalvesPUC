// Reveal plugin cards as they enter the viewport.
// Progressive enhancement: cards are visible by default in CSS. Only once we
// know IntersectionObserver works do we opt a card into the hidden starting
// state, right before observing it — so a slow or failed script never leaves
// content invisible.
(function () {
  var cards = document.querySelectorAll(".plugin-card");

  if (!("IntersectionObserver" in window) || cards.length === 0) {
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
    { threshold: 0.15 }
  );

  cards.forEach(function (card) {
    card.classList.add("reveal-ready");
    observer.observe(card);
  });
})();
