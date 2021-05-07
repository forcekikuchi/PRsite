'usu strict'
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 60;
        const target = rect + offset - gap;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}


$('.slider').slick({
    arrows: false,//左右の矢印はなし
    autoplay: true,//自動的に動き出すか。
    autoplaySpeed: 3000,//自動的に動き出す待ち時間。
    speed: 6900,//スライドのスピード。
    infinite: true,//スライドをループさせるかどうか。
    pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。
    pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。
    cssEase: 'linear',//動き方。
    slidesToShow: 4,//スライドを画面に4枚見せる
    slidesToScroll: 1,//1回のスライドで動かす要素数
    responsive: [
        {
            breakpoint: 769,//モニターの横幅が769px以下の見せ方
            settings: {
                slidesToShow: 2,//スライドを画面に2枚見せる
            }
        },
        {
            breakpoint: 426,//モニターの横幅が426px以下の見せ方
            settings: {
                slidesToShow: 1.5,//スライドを画面に1.5枚見せる
            }
        }
    ]
});