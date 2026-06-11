// Highlight active nav link + expand/collapse helpers
(function () {
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav a.nav-link').forEach(function (a) {
    var href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
    // character sub-pages highlight the Characters tab
    if (location.pathname.indexOf('/characters/') !== -1 && href === 'characters.html') {
      a.classList.add('active');
    }
  });

  // "Expand all / collapse all" buttons for chapter pages
  document.querySelectorAll('[data-expand-all]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('data-expand-all') === 'true';
      document.querySelectorAll('details.chapter').forEach(function (d) { d.open = open; });
    });
  });
})();
