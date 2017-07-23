import $ from "jquery";
import { WOW } from "wowjs";
import magnificPopup from "magnific-popup";
import owlCarousel from "owl.carousel";

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