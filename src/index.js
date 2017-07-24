import $ from "jquery";
import { WOW } from "wowjs";
import magnificPopup from "magnific-popup";
import owlCarousel from "owl.carousel";
import waypoints from "waypoints/lib/jquery.waypoints";
import counterUp from "jquery.counterup";

$(() => {
    new WOW().init();
});

$(() => {
    $("#work").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });
});

$(() => {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

$(() => {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

$(() => {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

$(() => {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});