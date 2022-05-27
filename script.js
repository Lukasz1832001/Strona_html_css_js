$(document).ready(function () {
    $(".entry").fadeIn();

    $(".entry>.entry-content>.button").click(function(){
        $(".entry").fadeOut();

    })
    
    $(".menuTrigger").click(function () {
        $('.navigPhone').slideDown("slow");
        $('.navigPhone').css("display", "flex");
        $(".menuTrigger").hide();
    });
    $(".hideBtn").click(function () {
        $(".menuTrigger").show();
        $('.navigPhone').slideUp();
    });
    $(window).resize(function () {
        $('.navigPhone').hide();
        $(".menuTrigger").hide();
        var width = $(document).width();
        if (width < 984) {
            $(".menuTrigger").show();
        }

    });
    $(".logInBtn").click(function () {
        $('#logInMenu').toggle("slide");
    });
    $("#logInHideBtn").click(function () {
        $('#logInMenu').hide("slide");
    });

});

function toggleText(button_id) {
    $('#hiddenText').slideToggle(200);
    var text = document.getElementById(button_id).firstChild;
    text.data = text.data == "Więcej" ? "Mniej" : "Więcej";
}

//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sliderItem");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

window.onload = function countdown(){
    const countDate = new Date("July 28, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = countDate - now;

    const seconds = 1000;
    const minute = seconds*60;
    const hour = minute*60;
    const day = hour*24;

    const textDay = Math.floor(difference/day);
    const textHour = Math.floor((difference%day)/hour);
    const textMinute = Math.floor((difference%hour)/minute);
    const textSecond = Math.floor((difference%minute)/seconds);

    document.getElementById("day").innerText = textDay;
    document.getElementById("hour").innerText = textHour;
    document.getElementById("minute").innerText = textMinute;
    document.getElementById("seconds").innerText = textSecond;
    
    setTimeout(function () { countdown() }, 1000);
}


