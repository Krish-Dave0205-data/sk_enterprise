document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', function(e){

    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

  });

});

// Animation effects
function loaderAnimation() {
  const loader = document.querySelector("#loader");

  setTimeout(() => {
    loader.style.top = "-100%";
  }, 3000);
}

const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
loaderAnimation();

/* Smooth Scroll */
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });

/* Loader */
setTimeout(() => {
  document.querySelector("#loader").style.top = "-100%";
}, 3000);
