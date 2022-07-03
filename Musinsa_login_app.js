$(document).ready(function(){
    auto_login_check()
    nonmember_check()
    tab()
})

function auto_login_check(){
    $(".auto_check").click(function(){
        var stat = $(".auto_check").hasClass("off")
        if (stat===true){ // off
            var result = confirm("공용 PC에서 자동로그인은 위험합니다.")
            if(result===true){
                $(".auto_check").removeClass("off")
                $(".auto_check").addClass("on")
                $(".auto_check>a>img").attr("src", "./images/check_small_on.png")
            }
        } else if (stat===false){ //on
            $(".auto_check").removeClass("on")
            $(".auto_check").addClass("off")
            $(".auto_check>a>img").attr("src", "./images/check_small_off.png")
        }
    })
}

function nonmember_check(){
    $(".non_member_check").addClass("off")
    $(".non_member_check").click(function(){
        var stat = $(".non_member_check").hasClass("off")
        if (stat===true){ // off
            $(".non_member_check").removeClass("off")
            $(".non_member_check").addClass("on")
            $(".non_member_check>a>img").attr("src", "./images/check_small_on.png")
        } else if (stat===false){ //on
            $(".non_member_check").removeClass("on")
            $(".non_member_check").addClass("off")
            $(".non_member_check>a>img").attr("src", "./images/check_small_off.png")
        }
    })
}

function tab(){
    $("#tab_btn>a").click(function(){
        var idx = $(this).index()
        $("#tab_contents>div").hide()
        $("#tab_contents>div").eq(idx).show()

        $("#tab_btn>a").css({background: "#F1F1F1", color: "#AAAA"})
        $("#tab_btn>a").eq(idx).css({background: "white", color: "black"})
    })
}