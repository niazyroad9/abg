$(document).ready(function () {

    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 1);
    });

    let menuItemWithChild = $('.with-children a')

    if (menuItemWithChild.length) {
        menuItemWithChild.on('click', function (e) {
            e.preventDefault();
            let submenu = $(this).siblings('.submenu')
            submenu.slideToggle()
        })
    }



    if ($('.home-header-swiper').length) {
        const headerSwiper = new Swiper('.home-header-swiper', {
            navigation: {
                nextEl: ".header-home .swiper-button-next",
                prevEl: ".header-home .swiper-button-prev",
            },
            loop: true,
        });
    }

    if ($('.services-swiper-mobile').length) {
        const serviceMobileSwiper = new Swiper('.services-swiper-mobile', {
            spaceBetween: 25,
            loop: true,
        });
    }



    if ($('.solutions .swiper').length) {
        const solutionsSwiper = new Swiper('.solutions .swiper', {
            navigation: {
                nextEl: ".solutions .swiper-button-next",
                prevEl: ".solutions .swiper-button-prev",
            },
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });
    }


    if ($('.services .thumbnail-slider').length) {
        var galleryThumbs = new Swiper(".services .thumbnail-slider", {
            centeredSlides: true,
            centeredSlidesBounds: true,
            slidesPerView: 3,
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: 'vertical'
        });

        var galleryMain = new Swiper(".services .main-slider", {
            watchOverflow: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            preventInteractionOnTransition: true,
            navigation: {
                nextEl: '.services .swiper-button-next',
                prevEl: '.services .swiper-button-prev',
            },

            fadeEffect: {
                crossFade: true
            },
            thumbs: {
                swiper: galleryThumbs
            }
        });

        galleryMain.on('slideChangeTransitionStart', function () {
            galleryThumbs.slideTo(galleryMain.activeIndex);
        });

        galleryThumbs.on('transitionStart', function () {
            galleryMain.slideTo(galleryThumbs.activeIndex);
        });
    }

})

window.addEventListener('load', function () {

    var logoSwiper = new Swiper('.logos-slider .slider-cont', {
        slidesPerView: 'auto',
        spaceBetween: 50,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
        speed: 10000,
        direction: 'horizontal',
    });
})