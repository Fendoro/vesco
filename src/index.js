import $ from "jquery";
import { WOW } from "wowjs";
import magnificPopup from "magnific-popup";

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