$(document).ready(function(){
    menu()
    init()
    slide()
    tab()
    popup()
})

function menu(){
    var idx = 0
    $(".gnb>li").hover(
        function(){
            idx = $(this).index()
            $(".gnb>li").eq(idx).find(".lnb").stop().slideDown()
        },
        function(){
            $(".lnb").stop().slideUp()
        }
    )
}

function init(){
    for(var i = 0; i <= 2; i++){
        $("#slide_contents>img").eq(i).hide()
    }
    $("#slide_contents>img").eq(0).show()
}

function slide(){
    setInterval(slide_fade, 3000)
}

var slideIdx = 0

function slide_fade(){
    $("#slide_contents>img").eq(slideIdx).fadeOut(1000)
    if (slideIdx == 2){
        slideIdx = 0
        $("#slide_contents>img").eq(slideIdx).fadeIn(1000)
    } else {
        $("#slide_contents>img").eq(slideIdx+1).fadeIn(1000)
        slideIdx++
    }
}

function tab(){
    var idx = 0
    $(".tab_btn>a").click(function(){
        idx = $(this).index()
        $(".tab_contents>div").hide()
        $(".tab_contents>div").eq(idx).show()
    })
}

function popup(){
    $(".pop").click(function(){
        $("#popup").show()
    })
    $("#closeBtn").click(function(){
        $("#popup").hide()
    })
}