// gnb메뉴 호버 시 서브메뉴 색 변경
const $gnb_menu = $('.gnb_inner .gnb .1');
const $sub_menu = $('.hover_menu .depth1');
$gnb_menu.mouseover(function () {
    $sub_menu.css({
        'background-color': 'white',
    });
    $gnb_menu.mouseleave(function () {
        $sub_menu.css({
            'background-color': '#f9f9f9',
        });
    });
});
$sub_menu.mouseover(function () {
    $sub_menu.css({
        'background-color': 'white',
    });
    $sub_menu.mouseleave(function () {
        $sub_menu.css({
            'background-color': '#f9f9f9',
        });
    });
});
const $gnb_menu2 = $('.gnb_inner .gnb .2');
const $sub_menu2 = $('.hover_menu .depth2');
$gnb_menu2.mouseover(function () {
    $sub_menu2.css({
        'background-color': 'white',
    });
    $gnb_menu2.mouseleave(function () {
        $sub_menu2.css({
            'background-color': '#f9f9f9',
        });
    });
});
$sub_menu2.mouseover(function () {
    $sub_menu2.css({
        'background-color': 'white',
    });
    $sub_menu2.mouseleave(function () {
        $sub_menu2.css({
            'background-color': '#f9f9f9',
        });
    });
});
const $gnb_menu3 = $('.gnb_inner .gnb .3');
const $sub_menu3 = $('.hover_menu .depth3');
$gnb_menu3.mouseover(function () {
    $sub_menu3.css({
        'background-color': 'white',
    });
    $gnb_menu3.mouseleave(function () {
        $sub_menu3.css({
            'background-color': '#f9f9f9',
        });
    });
});
$sub_menu3.mouseover(function () {
    $sub_menu3.css({
        'background-color': 'white',
    });
    $sub_menu3.mouseleave(function () {
        $sub_menu3.css({
            'background-color': '#f9f9f9',
        });
    });
});
const $gnb_menu4 = $('.gnb_inner .gnb .4');
const $sub_menu4 = $('.hover_menu .depth4');
$gnb_menu4.mouseover(function () {
    $sub_menu4.css({
        'background-color': 'white',
    });
    $gnb_menu4.mouseleave(function () {
        $sub_menu4.css({
            'background-color': '#f9f9f9',
        });
    });
});
$sub_menu4.mouseover(function () {
    $sub_menu4.css({
        'background-color': 'white',
    });
    $sub_menu4.mouseleave(function () {
        $sub_menu4.css({
            'background-color': '#f9f9f9',
        });
    });
});
const $gnb_menu5 = $('.gnb_inner .gnb .5');
const $sub_menu5 = $('.hover_menu .depth5');
$gnb_menu5.mouseover(function () {
    $sub_menu5.css({
        'background-color': 'white',
    });
    $gnb_menu5.mouseleave(function () {
        $sub_menu5.css({
            'background-color': '#f9f9f9',
        });
    });
});
$sub_menu5.mouseover(function () {
    $sub_menu5.css({
        'background-color': 'white',
    });
    $sub_menu5.mouseleave(function () {
        $sub_menu5.css({
            'background-color': '#f9f9f9',
        });
    });
});
const $gnb_menu6 = $('.gnb_inner .gnb .6');
const $sub_menu6 = $('.hover_menu .depth6');
$gnb_menu6.mouseover(function () {
    $sub_menu6.css({
        'background-color': 'white',
    });
    $gnb_menu6.mouseleave(function () {
        $sub_menu6.css({
            'background-color': '#f9f9f9',
        });
    });
});
$sub_menu6.mouseover(function () {
    $sub_menu6.css({
        'background-color': 'white',
    });
    $sub_menu6.mouseleave(function () {
        $sub_menu6.css({
            'background-color': '#f9f9f9',
        });
    });
});

// 스와이퍼 슬라이드1
const slide1 = new Swiper('.sec1 .swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.slide1-pagination',
        type: 'fraction',
    },
    navigation: {
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
    },
});
// 슬라이드 정지버튼
const $play_stop = $('.control .play-stop');
$play_stop.on('click', function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        slide1.autoplay.start();
    }
    // 없을 때
    // 기본값 = 없음 = 슬라이드는 플레이 되고 있는 상태
    // 눌렀을 때 정지를 시키기, 클래스 on을 생성
    else {
        $(this).addClass('on');
        slide1.autoplay.stop();
    }
});

// 스와이퍼 슬라이드2
const slide2 = new Swiper('.swiper2', {
    loop: true,
    speed: 700,
    navigation: {
        prevEl: '.prev_btn',
        nextEl: '.next_btn',
    },
    slidesPerView: 3,
    spaceBetween: 25,
});

// 스와이퍼 슬라이드3
const slide3 = new Swiper('.swiper3', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.slide3-pagination',
        type: 'fraction',
    },
    navigation: {
        prevEl: '.btn-prev2',
        nextEl: '.btn-next2',
    },
});
// 슬라이드 정지버튼
const $play_stop2 = $('.popup-control .play-stop2');
$play_stop2.on('click', function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        slide3.autoplay.start();
    }
    // 없을 때
    // 기본값 = 없음 = 슬라이드는 플레이 되고 있는 상태
    // 눌렀을 때 정지를 시키기, 클래스 on을 생성
    else {
        $(this).addClass('on');
        slide3.autoplay.stop();
    }
});

// 버튼 클릭 시 스크롤 맨 위
const $scroll = document.querySelector('.top');
$scroll.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
