$(function () {

    $(window).resize(function () {
        if ($(window).width() < 1300) {
            $('.header__map svg').attr('viewBox', '0 0 1504 496')
        }
        else {
            $('.header__map svg').attr('viewBox', '0 0 1004 496')
        }
    })

    $(window).resize(function () {
        if ($(window).width() < 500) {
            $('.header__map svg').attr('viewBox', '0 0 2204 496')
        }

        else {
            $('.header__map svg').attr('viewBox', '0 0 1504 496')
        }
    })


    $(window).resize(function () {
        if ($(window).width() > 1300) {
            $('.header__map svg').attr('viewBox', '0 0 1004 496')
        }
        else if ($(window).width() < 500) {
            $('.header__map svg').attr('viewBox', '0 0 2204 496')
        }
    })

    if ($(window).width() > 1300) {

        $('.header__map svg').attr('viewBox', '0 0 1004 496')
    }

    if ($(window).width() < 500) {

        $('.header__map svg').attr('viewBox', '0 0 2204 496')
    }

    if ($(window).width() < 1300) {

        $('.header__map svg').attr('viewBox', '0 0 1504 496')
    }

    $('.header__slider').slick({
        asNavFor: '.header__list',
        prevArrow: '<img class="slider-arrow slider-arrow-prev" src="img/arrow-right.svg" alt="">',
        nextArrow: '<img class="slider-arrow slider-arrow-next" src="img/arrow-right.svg" alt="">',
        fade: true,
    })

    $('.header__list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        asNavFor: '.header__slider',
    })

    $('.header__slider').on('beforeChange', function (event, { slideCount: count }, currentSlide, nextSlide) {
        let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
        $('.slick-now').removeClass('slick-now');
        $(selectors).addClass('slick-now');
        if ($('#slider-item1').parent().parent().hasClass('slick-now')) {
            $('#roadmap1').addClass('roadmap--active');
        } else {
            $('#roadmap1').removeClass('roadmap--active');
        }
        if ($('#slider-item2').parent().parent().hasClass('slick-now')) {
            $('#roadmap4').addClass('roadmap--active');
        } else {
            $('#roadmap4').removeClass('roadmap--active');
        }
        if ($('#slider-item3').parent().parent().hasClass('slick-now')) {
            $('#roadmap2').addClass('roadmap--active');
        } else {
            $('#roadmap2').removeClass('roadmap--active');
        }
        if ($('#slider-item4').parent().parent().hasClass('slick-now')) {
            $('#roadmap3').addClass('roadmap--active');
        } else {
            $('#roadmap3').removeClass('roadmap--active');
        }
    });

    $('[data-slick-index="0"]').addClass('slick-now');

    if ($('#slider-item1').parent().parent().hasClass('slick-now')) {
        $('#roadmap1').addClass('roadmap--active');
    } else {
        $('#roadmap1').removeClass('roadmap--active');
    }
    if ($('#slider-item2').parent().parent().hasClass('slick-now')) {
        $('#roadmap2').addClass('roadmap--active');
    } else {
        $('#roadmap2').removeClass('roadmap--active');
    }
    if ($('#slider-item3').parent().parent().hasClass('slick-now')) {
        $('#roadmap3').addClass('roadmap--active');
    } else {
        $('#roadmap3').removeClass('roadmap--active');
    }
    if ($('#slider-item4').parent().parent().hasClass('slick-now')) {
        $('#roadmap4').addClass('roadmap--active');
    } else {
        $('#roadmap4').removeClass('roadmap--active');
    }

    $('.header__arrow-down').hover(function () {
        $(this).toggleClass('animate__animated')
    })

    $('.header__slider').on('beforeChange', function (event, { slideCount: count }, currentSlide, nextSlide) {
        let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
        $('.slick-now').removeClass('slick-now');
        $(selectors).addClass('slick-now');
        if ($('#slider-item1').parent().parent().hasClass('slick-now')) {
            $('#description1').addClass('map-description--active');
        } else {
            $('#description1').removeClass('map-description--active');
        }
        if ($('#slider-item2').parent().parent().hasClass('slick-now')) {
            $('#description2').addClass('map-description--active');
        } else {
            $('#description2').removeClass('map-description--active');
        }
        if ($('#slider-item3').parent().parent().hasClass('slick-now')) {
            $('#description3').addClass('map-description--active');
        } else {
            $('#description3').removeClass('map-description--active');
        }
        if ($('#slider-item4').parent().parent().hasClass('slick-now')) {
            $('#description4').addClass('map-description--active');
        } else {
            $('#description4').removeClass('map-description--active');
        }

    });

    if ($('#slider-item1').parent().parent().hasClass('slick-now')) {
        $('#description1').addClass('map-description--active');
    } else {
        $('#description1').removeClass('map-description--active');
    }
    if ($('#slider-item2').parent().parent().hasClass('slick-now')) {
        $('#description2').addClass('map-description--active');
    } else {
        $('#description2').removeClass('map-description--active');
    }
    if ($('#slider-item3').parent().parent().hasClass('slick-now')) {
        $('#description3').addClass('map-description--active');
    } else {
        $('#description3').removeClass('map-description--active');
    }
    if ($('#slider-item4').parent().parent().hasClass('slick-now')) {
        $('#description4').addClass('map-description--active');
    } else {
        $('#description4').removeClass('map-description--active');
    }

    $('.header__slider').on('beforeChange', function (event, { slideCount: count }, currentSlide, nextSlide) {
        let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
        $('.slick-now').removeClass('slick-now');
        $(selectors).addClass('slick-now');
        if ($('#slider-item1').parent().parent().hasClass('slick-now')) {
            $('#circle1').removeClass('map-point');
            $('#circle1').addClass('map-point--active');
        } else {
            $('#circle1').removeClass('map-point--active');
        }
        if ($('#slider-item2').parent().parent().hasClass('slick-now')) {
            $('#circle2').removeClass('map-point');
            $('#circle2').addClass('map-point--active');
        } else {
            $('#circle2').removeClass('map-point--active');
        }
        if ($('#slider-item3').parent().parent().hasClass('slick-now')) {
            $('#circle3').removeClass('map-point');
            $('#circle3').addClass('map-point--active');
        } else {
            $('#circle3').removeClass('map-point--active');
        }
        if ($('#slider-item4').parent().parent().hasClass('slick-now')) {
            $('#circle4').removeClass('map-point');
            $('#circle4').addClass('map-point--active');
        } else {
            $('#circle4').removeClass('map-point--active');
        }

    });

    setTimeout(function () {
        $('#circle1').css("opacity", 1);
    }, 1000);

    if ($('#slider-item1').parent().parent().hasClass('slick-now')) {
        $('#circle1').addClass('map-point--active');
    } else {
        $('#circle1').removeClass('map-point--active');
    }
    if ($('#slider-item2').parent().parent().hasClass('slick-now')) {
        $('#circle2').addClass('map-point--active');
    } else {
        $('#circle2').removeClass('map-point--active');
    }
    if ($('#slider-item3').parent().parent().hasClass('slick-now')) {
        $('#circle3').addClass('map-point--active');
    } else {
        $('#circle3').removeClass('map-point--active');
    }
    if ($('#slider-item4').parent().parent().hasClass('slick-now')) {
        $('#circle4').addClass('map-point--active');
    } else {
        $('#circle4').removeClass('map-point--active');
    }


    $('#map-img__point1').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info1').addClass('map__info--active')
    })
    $('#map-img__point2').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info2').addClass('map__info--active')
    })
    $('#map-img__point3').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info3').addClass('map__info--active')
    })
    $('#map-img__point4').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info4').addClass('map__info--active')
    })
    $('#map-img__point5').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info5').addClass('map__info--active')
    })
    $('#map-img__point6').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info6').addClass('map__info--active')
    })
    $('#map-img__point7').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info7').addClass('map__info--active')
    })
    $('#map-img__point8').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info8').addClass('map__info--active')
    })
    $('#map-img__point9').on('click', function () {
        $('.map__info').removeClass('map__info--active')
        $('#map__info9').addClass('map__info--active')
    })

    $(document).mouseup(function (e) {
        var elem = $(".map__info");
        if (e.target != elem[0] && !elem.has(e.target).length) { elem.removeClass('map__info--active'); }
    })



    $('.surf-slider__items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrow slider-arrow-prev" src="img/arrow-right.svg" alt="">',
        nextArrow: '<img class="slider-arrow slider-arrow-next" src="img/arrow-right.svg" alt="">',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $('.offer-section__slider-inner').slick({
        prevArrow: '<img class="slider-arrow slider-arrow-prev" src="img/arrow-right.svg" alt="">',
        nextArrow: '<img class="slider-arrow slider-arrow-next" src="img/arrow-right.svg" alt="">',
        fade: true,
    })

    $('.minus').click(function () {
        var $input = $(this).parent().siblings().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().siblings().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.product__option-point').on('click', function () {
        $(this).toggleClass('product__option-point--active');
        $(this).siblings('.product__option-text').toggleClass('product__option-text--active');
    })


    $('.shop__slider').slick({
        prevArrow: '<img class="slider-arrow slider-arrow-prev" src="img/arrow-right.svg" alt="">',
        nextArrow: '<img class="slider-arrow slider-arrow-next" src="img/arrow-right.svg" alt="">',
    })

    $('.header__menu-btn').on('click', function () {
        $(this).siblings('.header__menu-list-wrapper').find('.header__menu-list').toggleClass('header__menu-list--active')
    })

    new WOW().init();

});