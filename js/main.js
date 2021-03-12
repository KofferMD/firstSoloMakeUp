const anchors = document.querySelectorAll('a[href*="#menu__anchor"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

$(function () {

    $('.reviews__slider-item').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});


function initMap() {

    const uluru = {
        lat: -25.344,
        lng: 131.036
    };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });

    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}