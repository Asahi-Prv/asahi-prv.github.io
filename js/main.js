// StaticGen minimal client-side JS
(function () {
  // highlight current nav link
  var links = document.querySelectorAll('.site-nav a');
  links.forEach(function (a) {
    if (a.getAttribute('href') === location.pathname.split('/').pop()) {
      a.style.fontWeight = 'bold';
    }
  });
})();
