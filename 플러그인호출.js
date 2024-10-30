// 메뉴영역 스와이퍼 적용
let nav_swiper = new Swiper('#gnb',{
    wrapperClass:'menu',
    slideClass:'menu_li',
    slidesPerView:'auto',   // auto:각 버튼의 크기만큼 영역(크기 자동설정)

});


//메인페이지 스와이퍼 적용
let main_swiper = new Swiper('#wrap',{
    wrapperClass: 'container',      // 슬라이드 영역을 감싸는 요소
    slideClass: 'sec',              // 각 슬라이드 영역의 공통 클래스명 
    direction:'vertical',           // 슬라이드 영역 정렬방향
    mousewheel:true,                // true, false는 따옴표 쓰지말기
    speed:800,                      // 숫자도 따옴표 쓰지말기
    pagination:{
        el:'.pager',                // 페이지 버튼
        bulletActiveClass:'active', // 활성화된 요소에 추가되는 클래스
        clickable:true,             // 클릭시 슬라이드 이동
    },
    thumbs:{                        // 썸네일
        swiper: nav_swiper,         // 메뉴버튼영역의 스와이퍼 지정
        slideThumbActiveClass:'active',
    }


});