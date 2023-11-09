jQuery(document).ready(function () {
    /// story section slider
    $("#slick-slider").slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        speed: 300,
        slidesToScroll: 1,
        pauseOnHover: true,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 1,
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 479,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 1,
                    slidesToShow: 1,
                },
            },
        ],
    });
});