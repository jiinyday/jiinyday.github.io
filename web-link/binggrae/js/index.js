// 스크롤 이벤트 (스크롤 시 탭 메뉴 색깔 활성화)
const $header = $('.bing-header');
$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
        $header.addClass('active');
    } else {
        $header.removeClass('active');
    }
});

// 메뉴 호버 시 글자, after, before 요소 색 변경
const $drop_menu1 = $('.drop-down .depth.depth1');
const $menu1 = $('.bing-menu .middle-menu li .1');

const $drop_menu2 = $('.drop-down .depth.depth2');
const $menu2 = $('.bing-menu .middle-menu li .2');

const $drop_menu3 = $('.drop-down .depth.depth3');
const $menu3 = $('.bing-menu .middle-menu li .3');

const $drop_menu4 = $('.drop-down .depth.depth4');
const $menu4 = $('.bing-menu .middle-menu li .4');

const $drop_menu5 = $('.drop-down .depth.depth5');
const $menu5 = $('.bing-menu .middle-menu li .5');

const $drop_menu6 = $('.drop-down .depth.depth6');
const $menu6 = $('.bing-menu .middle-menu li .6');

$drop_menu1.mouseover(function () {
    $menu1.css({
        color: '#e0462e',
    });
    $drop_menu1.mouseleave(function () {
        $menu1.css({
            color: 'black',
        });
    });
});
$drop_menu2.mouseover(function () {
    $menu2.css({
        color: '#e0462e',
    });
    $drop_menu2.mouseleave(function () {
        $menu2.css({
            color: 'black',
        });
    });
});
$drop_menu3.mouseover(function () {
    $menu3.css({
        color: '#e0462e',
    });
    $drop_menu3.mouseleave(function () {
        $menu3.css({
            color: 'black',
        });
    });
});
$drop_menu4.mouseover(function () {
    $menu4.css({
        color: '#e0462e',
    });
    $drop_menu4.mouseleave(function () {
        $menu4.css({
            color: 'black',
        });
    });
});
$drop_menu5.mouseover(function () {
    $menu5.css({
        color: '#e0462e',
    });
    $drop_menu5.mouseleave(function () {
        $menu5.css({
            color: 'black',
        });
    });
});
$drop_menu6.mouseover(function () {
    $menu6.css({
        color: '#e0462e',
    });
    $drop_menu6.mouseleave(function () {
        $menu6.css({
            color: 'black',
        });
    });
});

// 스와이퍼
const carousel = new Swiper('.slider1 .swiper1', {
    loop: false,
    touchRatio: 0, //드래그 막기
    slidesPerView: 5,
    spaceBetween: 18,
    speed: 500,
    // 네비게이션
    navigation: {
        prevEl: '.nav-wrapper1 .swiper-button-prev',
        nextEl: '.nav-wrapper1 .swiper-button-next',
    },
    breakpoints: {
        1400: {
            slidesPerView: 6,
        },
    },
    observer: true,
    observeParents: true,
});

const carouse2 = new Swiper('.slider2 .swiper2', {
    loop: false,
    touchRatio: 0, //드래그 막기
    slidesPerView: 5,
    spaceBetween: 18,
    speed: 500,
    // 네비게이션
    navigation: {
        prevEl: '.nav-wrapper2 .swiper-button-prev',
        nextEl: '.nav-wrapper2 .swiper-button-next',
    },
    breakpoints: {
        1400: {
            slidesPerView: 6,
        },
    },
    observer: true,
    observeParents: true,
});

// 반응형 스와이퍼
const swiper = new Swiper('.mySwiper', {
    touchRatio: 0, //드래그 막기
    speed: 500,
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 8,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
const swiper2 = new Swiper('.mySwiper2', {
    touchRatio: 0, //드래그 막기
    speed: 500,
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 8,
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },
});

// 버튼 클릭 시 스크롤 맨 아래
// const $scroll = document.querySelector('.scroll-t');
// $scroll.onclick = () => {
//     window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: 'smooth',
//     });
// };

// 버튼 클릭 시 스크롤 맨 위
const $scroll = document.querySelector('.scroll-t');
$scroll.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
