$(document).ready(function() {
    // Window scroll event
    $(window).scroll(function() {
        if (window.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (window.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button click event
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    // Navbar menu item click event
    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });

    // Menu button click event
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typed.js instances
    var typed1 = new Typed(".typing", {
        strings: [
            "Licensed By The Central Bank of Nigeria.",
            "NEXT GEN' Real-time Updates Of Currency Exchange Rates.",
            "NEXT GEN' High Secure Transactions.",
            "Multi-Platform Accessibility.",
            "Transparent Fees."
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: [
            "Licensed By The Central Bank of Nigeria.",
            "NEXT GEN' Real-time Updates Of Currency Exchange Rates.",
            "NEXT GEN' High Secure Transactions.",
            "Multi-Platform Accessibility.",
            "Transparent Fees."
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
