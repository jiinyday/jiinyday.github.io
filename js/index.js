// 현재 스크롤 위치 값 가져오기
// $(window).scroll(function () {
//     $scrollValue = $(document).scrollTop();
//     console.log($scrollValue);
// });

// 새로고침 시 첫 화면 보이기
window.onload = function () {
    setTimeout(function () {
        scrollTo(0, 0);
    }, 200);
};

// 스크롤 이벤트 (메뉴 투명도)
$menu = $('.menu-box');
$(window).on('scroll', function () {
    if ($(document).scrollTop() > 1) {
        $menu.addClass('active');
    } else {
        $menu.removeClass('active');
    }
});

// 스크롤 이벤트 (탭 메뉴, 메뉴 색깔 활성화)
const $page = $('.page');
const $link = $('.menu-box .menu li a');
$(window).on('scroll', function () {
    $page.each(function (index) {
        // 현재창의 높이
        let $windowHeight = $(window).height();
        // 각페이지의 offset().top
        let $pageOffsetTop = $('.page').eq(index).offset().top;
        // 스크롤값 구하기
        let $scrollOffset = $(window).scrollTop();
        if ($pageOffsetTop < $windowHeight + $scrollOffset) {
            $link.removeClass('active');
            $link.eq(index).addClass('active');
        }
    });
});

// about-resume 폴더 클릭 시 요소 보이기
const $folder1 = $('.folder.folder1');
const $folder2 = $('.folder.folder2');
const $folder3 = $('.folder.folder3');
const $close = $('.dt-box button');
const $dtBox = $('.dt-box');
const $dtBox1 = $('.dt-box.box1');
const $dtBox2 = $('.dt-box.box2');
const $dtBox3 = $('.dt-box.box3');
const $txtBox = $('.dt-box .txt-box');
$dtBox.hide();
$folder1.on('click', function () {
    $dtBox1.show();
});
$folder2.on('click', function () {
    $dtBox2.show();
});
$folder3.on('click', function () {
    $dtBox3.show();
});
// about-resume close 버튼 클릭 시 요소 닫기
$close.on('click', function () {
    $dtBox.hide();
});

// portfolio 스와이퍼
const carousel = new Swiper('.pf-box .swiper', {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // 패이지네비
    pagination: {
        el: '.pagination',
        clickable: true,
    },
});
