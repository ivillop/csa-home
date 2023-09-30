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
});
