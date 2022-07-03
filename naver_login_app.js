// 언어 변경, 자동로그인 체크, 안전팝업창 삭제 

$(document).ready(function(){
    select_lang()
    login_maintain()
    delete_safe_popup()
})

function select_lang(){
    $(".lang>select").change(function(){
        var lang = $(".lang>select").val()
        
        //글자 바꾸기, 디자인 변경
        if(lang=="한국어"){
            korean_login_form()
            korean_more_easy_form()

        } else if(lang=="English"){
            english_login_form()
            english_more_easy_form()

        } else if(lang=="中文(简体)"){

        } else if(lang=="中文(台灣)"){

        }
    })
}

function korean_login_form(){
    $("#id").attr('placeholder', '아이디')
    $("#pw").attr('placeholder', '비밀번호')
    $("#login").attr('value', '로그인')
    $(".login_check>label").text('로그인 상태 유지')
}

function english_login_form(){
    $("#id").attr('placeholder', 'Username')
    $("#pw").attr('placeholder', 'Password')
    $("#login").attr('value', 'Log In')
    $(".login_check>label").text('Stay Signed In')
}

function korean_more_easy_form(){
    $(".more_easy>h1").text('더욱 간편한 로그인')
    $(".other_country").hide()
    $(".button_area").show()
    $(".whale_wrap").show()
    $(".more_easy").css({"height" : "138px"})
}

function english_more_easy_form(){
    $(".more_easy>h1").text('Easier Sign In')
    $(".button_area").hide()
    $(".whale_wrap").hide()
    $(".other_country").show()
    $(".more_easy").css({"height" : "70px"})
}

function korean_info_form(){

}

function english_info_form(){
    
}





function login_maintain(){
    var loginSpan = $(".login_check>span")
    loginSpan.click(function(){
        if(loginSpan.hasClass("login_on")===true){
            loginSpan.removeClass("login_on")
            loginSpan.addClass("login_off")
        } else if(loginSpan.hasClass("login_off")===true){
            loginSpan.removeClass("login_off")
            loginSpan.addClass("login_on")
        }
    })
}

function delete_safe_popup(){
    $(".safe_notice>img").click(function(){
        $(".safe_notice").hide()
    })
}