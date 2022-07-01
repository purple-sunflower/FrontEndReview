var slides = document.querySelectorAll("#slides>img")
var prev = document.getElementById("prev")
var prev = document.getElementById("next")

var current = 0;
showSlides(current) // 현재 이미지 표시
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n){
    for (var i = 0; i < slides.length ; i++) {
        slides[i].style.display = "none" 
        // 슬라이드 이미지의 display값을 none으로
    }
    slides[n].style.display = "block" // n번째 이미지만 표시
}

function prevSlide(){
    if (current>0) {
        current -= 1 // 이전 이미지를 보여줌
    } else {
        current = slides.length - 1 
        // 첫번째 이미지에서 이전 이미지는 맨 마지막 이미지임.
        // 맨 마지막 이미지의 인덱스는 총 길이 - 1
    }
    showSlides(current)
}

function nextSlide(){
    if (current < slides.length - 1) {
        current += 1
    } else {
        current = 0 
        // 맨마지막 다음 이미지는 맨 첫번째 이미지
        // 맨 첫번째 이미지의 인덱스는 0임.
    }
    showSlides(current)
}
