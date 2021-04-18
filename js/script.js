
//loading animation
$(document).ready(function() {
  $('.js--loader').removeClass('loader');
  $('.js--loader__box').removeClass('loader__box');
  $(window).load()
});

//init AOS
AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});

//scroll function
function autoScrollTo(el) {
  var top = $(el).offset().top;
  $('html, body').animate({
      scrollTop: top-100
  }, 1200);
};

//progress bar
window.onload = function onLoad() {
  var circle = new ProgressBar.Circle('#progress', {
      color: '#FCB03C',
      duration: 3000,
      easing: 'easeInOut'
  });

  circle.animate(1);
};


