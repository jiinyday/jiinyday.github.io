// 누리집 정보 펼치기
const $btn_nuri = $('.btn-nuri');
const $nuri_info = $('.nuri-info .nuri-main');

$btn_nuri.on('click', function () {
    if ($(this).hasClass('on')) {
        // 있을때
        $(this).removeClass('on');
        $nuri_info.slideUp();
    } else {
        // 없을때
        $(this).addClass('on');
        $nuri_info.slideDown();
    }
});

// 브라우저사이트 체크
// 창 = window
window.addEventListener('resize', function () {
    // 창의 크기를 가져와야됨
    // innerWidth : 브라우저 가로크기
    let window_x = window.innerWidth;
    console.log(window_x);
});

// header util menu
const util_btn = $('.btn-util');
const util_sub = $('.util-sub');
console.log(util_btn);
// 유틸메뉴 서브박스 숨기기
util_sub.hide();
util_btn.each(function (i) {
    // 버튼에 클릭이벤트 생성
    util_btn.eq(i).on('click', function (e) {
        util_sub.hide();
        $(this).next().show();
        return false;
    });
});
$(document).on('click', function () {
    util_sub.hide();
});

// gnb
const $gnb_depth2 = $('.depth2');
const $gnb_link = $('.gnb > li');
$gnb_depth2.hide();
$gnb_link.on('mouseenter', function () {
    $('.h-gnb').addClass('on');
    $gnb_depth2.show();
});
$gnb_link.on('mouseleave', function () {
    $('.h-gnb').removeClass('on');
    $gnb_depth2.hide();
});

// 통합검색
const search_box = $('.search-box');
const btn_search = $('.btn-search');
const btn_close = $('.btn-close');
search_box.hide();
btn_search.on('click', function () {
    search_box.fadeIn(150);
    // 스크롤바 영역 제거
    $('body').css('overflow', 'hidden');
});
btn_close.on('click', function () {
    search_box.fadeOut(150);
    $('body').css('overflow', 'auto');
});

// 개인, 사업장 버튼
const freq_service_btn = $('.freq-service-box .btn-list button');
freq_service_btn.on('click', function () {
    // parent() = 부모요소
    // li의 모든요소 on클래스 제거
    freq_service_btn.parent().removeClass('on');
    // 클릭한 버튼의 부모요소 li만 on클래스 생성
    $(this).parent().addClass('on');
});

// 뉴스, 새소식 버튼
const $news_btn = $('.btn-list li button');
$news_btn.on('click', function () {
    // 전체버튼의 on클래스 제거
    $news_btn.removeClass('on');
    // 클릭한 대상의 버튼에만 on클래스 생성
    $(this).addClass('on');
});

// 스와이퍼 슬라이드
const banner_slide = new Swiper('.swiper', {
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    pagination: {
        el: '.my-pagination',
        type: 'fraction',
    },
    navigation: {
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
    },
});
// 슬라이드 재생, 정지
const $btn_play_stop = $('.play-stop');
$btn_play_stop.on('click', function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        banner_slide.autoplay.start();
    } else {
        $(this).addClass('on');
        banner_slide.autoplay.stop();
    }
});

// section5 스와이퍼 슬라이드
const sec5_slider = new Swiper('.sec5-slider .sec5-swiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        prevEl: '.prev',
        nextEl: '.next',
    },
    pagination: {
        el: '.sec5-custom',
        type: 'fraction',
    },
});
// 슬라이드 재생, 정지
const $stopPlay = $('.stop-play');
$stopPlay.on('click', function () {
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
        sec5_slider.autoplay.start();
    } else {
        $(this).addClass('on');
        sec5_slider.autoplay.stop();
    }
});

// 버튼 클릭 시 스크롤 맨 위
const $scroll = document.querySelector('.quick-2 .top');
$scroll.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
