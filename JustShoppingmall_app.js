$(document).ready(function(){
    menu()
    slide()
    // tab()
    tab_advanced()
    popup()
})

function menu(){
    $(".gnb>li").hover(
        function(){ // mouseover
            $(".lnb").stop().slideDown()
        },
        function(){ // mouseout
            $(".lnb").stop().slideUp()
        }
    )
}

function slide(){
    setInterval(slide_move, 3000)
}

var curTop = 0

function slide_move(){
    $("#slide_contents").animate({"top": curTop}, 400, 'swing')
    curTop -= 300
    if (curTop == -900) {
        curTop = 0
    }
}

function tab(){
    $(".tab_btn>a").eq(0).click(function(){
        $(".tab_contents>div").eq(1).hide()
        $(".tab_contents>div").eq(0).show()
    })
    $(".tab_btn>a").eq(1).click(function(){
        $(".tab_contents>div").eq(0).hide()
        $(".tab_contents>div").eq(1).show()
    })
}

var idx = 0

function tab_advanced(){
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