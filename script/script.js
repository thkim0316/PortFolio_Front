$(function(){

    // header menu
    $("header").mouseover(function(){
        $(".menu").stop().slideDown(500)
    })
    $("header").mouseout(function(){
        $(".menu").stop().slideUp(1000)
    })

    // header scroll menu
    var a = $(".box1").offset().top

    $(window).scroll(function(){
        if($(this).scrollTop() > a){
            $(".top_menu").addClass("fix")
            $(".top_menu").css({"display":"block"})
        }else{
            $(".top_menu").removeClass("fix")
            $(".top_menu").css({"display":"none"})
        }
    })

    // main mainimg, mainvideo
    setTimeout(function(){
        $(".mainimg img").delay(3000).fadeOut(300)
        $(".mainvideo").delay(3300).fadeIn(300)
        $(".mainvideo").delay(18000).fadeOut(1000)
        $(".mainimg img").delay(19300).fadeIn(1000)
    })

    // slide
    var MainSwiper = new Swiper('.main_slide .swiper-container')
    var SubSwiper = new Swiper('.sub_slide .swiper-container', {
        navigation : {
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev",
        },
    })

    MainSwiper.controller.control = SubSwiper;
    SubSwiper.controller.control = MainSwiper;


    $(".sub_slide .swiper-slide img:first-child").mouseover(function(){
        $(".sub_slide .swiper-slide img:last-child").stop().fadeIn(300)
    })
    $(".sub_slide .swiper-slide img:first-child").mouseout(function(){
        $(".sub_slide .swiper-slide img:last-child").stop().fadeOut(300)
    })

    // history
    $(".history .album_slide img").click(function(){
        let img = new Image()
        img.style.maxWidth = "750px"
        img.style.maxHeight = "700px"
        img.src = $(this).attr("src")
        $(".modalBox").html(img)
        $(".modal").show()

        $(".modal").click(function(){
            $(".modal").hide()
        })
    })

    // ourturn
    $(window).scroll(function(){
        var videoTop = $(".ourturn h3").offset().top
        var video = $(".ourturn .videobox video")

        if($(document).scrollTop() > videoTop){
            video.get(0).play()
            $(".ourturn .videobox div").delay(2400).fadeIn(500)
        }
    })
})