document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('#menu');
  const container = document.querySelector('.container');
  const main = document.querySelector('main');
  const drawer = document.querySelector('#drawer');

  menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
  });

  container.addEventListener('click', function () {
    drawer.classList.remove('open');
  });

  main.addEventListener('click', function () {
    drawer.classList.remove('open');
  });

  // Add scrollspy to <body>
document.querySelector('body').scrollspy({
  target: 'nav',
  offset: 50,
});

// Add smooth scrolling on all links inside the navbar
document.querySelectorAll('#drawer a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const hash = link.hash;
    const target = document.querySelector(hash);

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });

      window.location.hash = hash;
    }
  });
});
});
