// Get the navbar
var navbar = document.querySelector(".nav__box");
var navBox = document.querySelector("#nav");
var navLogo = document.querySelector(".nav__logo");
var navIcon = document.querySelector(".nav__icon");
var test1 = document.querySelector("#xo-1")


// Get the offset height of the navBox
var sticky = navBox.offsetHeight+60;


// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function myFunction() {

  if (window.scrollY >= sticky) {
    navIcon.classList.add("sticky__icon");
    

  } else {
    navIcon.classList.remove("sticky__icon");

  }
}

$('.nav__box a').click(function() {
    $('.js--nav__icon').click();
});


window.addEventListener("scroll", myFunction);

$('.js--nav__icon').click(function() {
    var nav = $('.js--nav__box');
    var logo = $('.nav__logo');
    var icon = $('.js--nav__icon i');
    var box = $('nav__box');



    nav.slideToggle(200);

    if(icon.hasClass('fa-times')) {
        icon.addClass('fa-bars');
        icon.removeClass('fa-times')
        box.addClass('margin-down--small')
        navbar.classList.add("sticky");
        navLogo.classList.remove("sticky__logo");
        test1.classList.add("xo-1-text");
        test1.classList.remove("xo-1");
    } else {
        navbar.classList.remove("sticky");
        navLogo.classList.add("sticky__logo");
        icon.addClass('fa-times');
        icon.removeClass('fa-bars');
        box.removeClass('margin-down--small')
        test1.classList.remove("xo-1-text");
        test1.classList.add("xo-1");
    }
});

