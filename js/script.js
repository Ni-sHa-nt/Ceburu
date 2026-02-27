// Fancy Box
Fancybox.bind("[data-fancybox]", {
    dragToClose: false,
    closeButton: "top",
});


// Ceburu Overview Section
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,

    loop: true,   // important for smooth continuous slide

    autoplay: {
        delay: 2500,   // 2.5 seconds
        disableOnInteraction: false,
    },

    speed: 800,  // smooth animation speed

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 3
        }
    }
});


// Testimonials Section
var testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    speed: 1000,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});


//  Our Clients
var clientSwiper = new Swiper(".clientSwiper", {
    slidesPerView: 6,
    spaceBetween: 40,
    loop: true,

    speed: 4000, // very important (controls smoothness)

    autoplay: {
        delay: 0, // must be 0 for continuous
        disableOnInteraction: false,
    },

    freeMode: true, // makes it smooth
    freeModeMomentum: false, // stop bouncing effect

    breakpoints: {
        320: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 }
    }
});