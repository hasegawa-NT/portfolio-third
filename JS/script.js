$(function() {
    var imgHeight = $('.key-visual').outerHeight();/* キービジュアルの画像の高さを取得 */
    var bgHeight = $('.first-view'.outerHeight);/* ファーストビューの高さを取得 */


    $('.burger_btn').on('click', function() {
       if( $(window).scrollTop() < imgHeight -50)/* ハンバーガーボタンがfirst-viewより 上 にある時 */ {
           $('.bar').toggleClass('cross');/* ハンバーガーボタンのラインをクロスさせるCSSを当てたり、外したりする */
           $('.header-nav').toggleClass('open');/* ナビゲーションが開くCSSを当てたり、外したりする */
           $('.burger-musk').fadeToggle('300');/* 背景を暗くするマスクをフェードイン・フェードアウトさせる */
           $('body').toggleClass('no-scroll');/* ハンバーガーメニューを開いた時に、スクロールしないようにする */
       } else {/* ハンバーガーボタンがfirst-viewより 下 にある時 */
            $(this).toggleClass('black');/* .burger-btnに.blackを当てたり、外したりする ハンバーガーボタンが黒くなったり、白くなったりする */
            /* 上記と同じ記述 */
            $('.bar').toggleClass('cross');
            $('.header-nav').toggleClass('open');
            $('.burger-musk').fadeToggle('300');
            $('body').toggleClass('no-scroll');
            /* // 上記と同じ記述 */
       }
    });

    /* スクロールしたら、サイトロゴとハンバーガーボタンの色が変わる */
    $(window).on('load scroll', function(){
        if ($(window).scrollTop() < imgHeight -50) {/* ハンバーガーボタンが first-viewより 上 にある時 */
            $('.site-logo').removeClass('black');/* メインビジュアル内にいるので、.blackを外す */
        } else {/* メインビジュアルの 下 までスクロールしたので、クラスをつけて色を変える */
            $('.site-logo').addClass('black');
        }

        if( $(window).scrollTop() < bgHeight -50) {
            $('.burger_btn').removeClass('black');/* メインビジュアル内にいるので、クラスを外す */
        } else {
            $('.burger_btn').addClass('black');/* メインビジュアルより 下 にスクロールしたので、クラスをつけて、色を変える */
        }
        
    });
});