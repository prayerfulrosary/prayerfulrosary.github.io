// Prayerful Rosary — shared blog article behavior
(function () {
  var yEl = document.getElementById('y');
  if (yEl) yEl.textContent = new Date().getFullYear();

  var nav = document.getElementById('nav');
  var hero = document.querySelector('.page-hero');
  if (nav) {
    var onScroll = function () {
      var threshold = hero ? hero.offsetHeight - 72 : 400;
      nav.classList.toggle('scrolled', window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
