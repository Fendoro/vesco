import $ from "jquery";
import bootstrap from "bootstrap";
import { WOW } from "wowjs";
import magnificPopup from "magnific-popup";
import owlCarousel from "owl.carousel";
import waypoints from "waypoints/lib/jquery.waypoints";
import counterUp from "jquery.counterup";
import easing from "jquery.easing";

//init WOW plugin
$(() => {
    new WOW().init();
});

//init magnificPopup plugin for work section
$(() => {
    $("#work").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

//init owlCarousel plugin for team section
$(() => {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

//init owlCarousel plugin for customers section
$(() => {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

//init counterUp plugin for stats section
$(() => {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

//init owlCarousel plugin for clients section
$(() => {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

// show/hide transparent black navigation
$(() => {
    $(window).scroll(() => {
        if ($(window).scrollTop() < 50) {
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// setup smooth scrolling
$(() => {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        const section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});