$(function() {
    //节流阀
    var flag = true;

    var toolTop = $('.recommend').offset().top;
    //显示电梯导航
    toggleTool();
    function toggleTool() {
        if($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        }else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function() {
        toggleTool();
        //
        if(flag) {
            $('.floor .w').each(function(i,e) {
                if($(document).scrollTop() >= $(e).offset().top) {
                    // console.log(i);
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            })
        }
    })
    $('.fixedtool li').on('click',function() {
        // console.log($(this).index());
        flag = false;
        var current = $('.floor .w').eq($(this).index()).offset().top;
        $('body,html').animate({
            scrollTop:current
        },function() {
            flag = true;
        })
        //点击之后让当前的类名显示
        $(this).addClass('current').siblings().removeClass()
    })
})

