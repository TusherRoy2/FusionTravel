'use strict';

// ? CODE START




// MY javascript

const resIcon = document.querySelector('header nav .resIcon i');

const menu = document.querySelector('header nav .menu');

const show = document.querySelector('.show');

const screenSize = window.innerWidth

resIcon.onclick = function (){
    menu.classList.toggle('show')
}

window.onresize = function (){
    const screenSize = window.innerWidth
    if (screenSize > 768){
        menu.classList.remove('show');
    }
}

$(document).ready(function() {

    $('#myCarousel_1').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 4000,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('#myCarousel_2').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 20000,
        navText:['<span><i class="fas fa-arrow-left"></i></span>' , '<span><i class="fas fa-arrow-right"></i></span>'],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('#myCarousel_3').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 20000,
        navText:['<span><i class="fas fa-arrow-left"></i></span>' , '<span><i class="fas fa-arrow-right"></i></span>'],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // ?Arrow Btn After Clicked TOP 0

    $(window).scroll(function() {
        let distance = $(window).scrollTop();

        if (distance > 100) {
            $('#arrowTopBtn .fa-fighter-jet').fadeIn()
            $('#arrowTopBtn .fa-fighter-jet').css({
                "display": "flex",
            })

        } else {
            $('#arrowTopBtn .fa-fighter-jet').fadeOut();
        }
    })






  
  
  })