$(function () {

    //ボタンのサイズ変更
    $('#js-click-btn').on('click', function () {
        $(this).addClass('large-btn');
    });

    //ボタンの色変更
    $('#js-hover-btn').on('mouseover', function () {
        $(this).addClass('opacity');
    }).on('mouseleave', function () {
        $(this).removeClass('opacity');
    })

    //要素の表示切り替え
    // $('#js-hide-btn').on('click', function () {
    //     $('#js-target-element').fadeOut(1000);
    //()内の数字は時間（ミリ秒）
    // });
    // $('#js-show-btn').on('click', function () {
    //     $('#js-target-element').fadeIn(1000);
    // });
    $('#js-hide-btn').on('click', function () {
        $('#js-target-element').slideUp(1000);
    });
    $('#js-show-btn').on('click', function () {
        $('#js-target-element').slideDown(1000);
    });

    //要素の追加 外側・内側
    $('#js-add-btn').on('click', function () {
        $(this).before('<li class="btn">ここに追加</li>'); //外側 前に追加
        // $(this).after('<li class="btn">ここに追加</li>'); //外側 後に追加
    });
    $('#js-add-btn2').on('click', function () {
        $(this).prepend("前"); //内側 前に追加
        // $(this).append("後"); //内側 後に追加
    });

    //toggleメニュー
    $('.js-toggle').on('click', function () {
        $(this).toggleClass('on');
        $(this)
            .siblings()
            .slideToggle();
    });

    //ハンバーガーメニュー
    $('.js-hamburger').on('click', function () {
        $(this).toggleClass('on');
    });

    // //スムーススクロール
    // $('.js-scroll').on('click', function () {
    //     $('body, html').animate({ scrollTop: 0 }, 500); //body or html のみでも可
    // });

    $(".js-scroll").on("click", function () {
        $("body, html").animate(
            { scrollTop: 0, paddingLeft: '1000px' }, 10000);
        // height
        // width
    });

    //モーダル
    $('.js-modal').on('click', function () {
        $('body').addClass('modal-open');
        $('.modal-content').fadeIn('slow');
        $('#modal-bg').fadeIn('slow');
    });

    $('.js-modal-close').on('click', function () {
        $('body').removeClass('modal-open');
        $('.modal-content').fadeOut(1000);
        $('#modal-bg').fadeOut(1000);
    });

    //タブメニュー
    $('.tab-nav a').on('click', function () {
        if ($(this).hasClass('active')) {
            return false;
        }

        console.log(this.hash);

        // タブメニューを初期化
        $('.tab-nav a').removeClass('active');
        $(this).addClass('active');

        // タブコンテンツを初期化
        $('.tab-content > div').removeClass('active');
        $('.tab-content > div')
            //tab-content直下のdivの中から、同じhashのclassを探し、activeにする
            .filter(this.hash)
            .addClass('active');

        return false;
    });

    //スライダー
    let slideWidth = $('.slide').outerWidth();
    let slideNum = $('.slide').length;
    let slideWrapperWidth = slideWidth * slideNum;
    let currentSlide = 0;
    $('.slide-wrapper').css('width', slideWrapperWidth);

    //次へ
    $('.next-slider').on('click', function () {
        //最後のスライドだった場合
        if (currentSlide >= slideNum - 1) {
            return false;
        }
        currentSlide++;
        slide();
    });

    //前へ
    $('.prev-slider').on('click', function () {
        //最初のスライドだった場合
        if (currentSlide <= 0) {
            return false;
        }
        currentSlide--;
        slide();
    });

    function slide() {
        console.log(currentSlide * -slideWidth);
        $('.slide-wrapper')
            .stop()
            .animate({
                left: currentSlide * -slideWidth
            });
    }


    //selfハンバーガーメニュー
    $('.js-hamburger2').on('click', function () {
        $(this).toggleClass('on');
    });


    //selfタブメニュー
    $('.menu-tab a').on('click', function () {
        if ($(this).hasClass('active')) {
            return false;
        }

        console.log(this.hash);

        // var type = window.location.hash.substr(1);
        // console.log(type);

        // var urlHash = location.hash;
        // console.log(urlHash);

        // $('.image[src="assets/img/menu01.jpg"]').attr('src',"assets/img/" + type + ".jpg");

        $('.menu-tab a').removeClass('active');
        $(this).addClass('active');

        $('.menu-content > div').removeClass('active');
        $('.menu-content > div')
            .filter(this.hash)
            .addClass('active');

        return false;

 
    });


});