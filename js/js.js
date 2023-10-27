/* menu*/
$(document).ready(function () {
    $(".on").click(function () {
        $('.alert').css({
            'transform': 'translateX(0)',
        });
    });

    $(".close").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    });

    $(".out").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    })
})

$(document).ready(function () {
    $(".on").click(function () {
        $('.alert').css({
            'transform': 'translateX(0)',
        });
    });

    $(".close").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    });

    $(".out").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    })
})

/* slider */


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Auto carousel
var slideInterval = setInterval(function () { plusSlides(1) }, 5000);



var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index > slides.length - 1) {
        index = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dot[i].classList.remove("active");
    }

    slides[index].style.display = "block";
    dot[index].classList.add("active");

    index++;

    setTimeout(changeSlide, 3500);

}


changeSlide();

ScrollReveal({ reset: true });
ScrollReveal().reveal('.banner', { easing: "ease-in", delay: 100 });
ScrollReveal().reveal('.shop', { easing: "ease-in", delay: 200 });
ScrollReveal().reveal('.about', { easing: "ease-in", delay: 200 });
ScrollReveal().reveal('.contacts', { easing: "ease-in", delay: 200 });
function togglePopup() {
    var popup = document.getElementById("popup");

    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'flex' : 'none';
    if (popup.style.display === 'flex') {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }


}
function togglePopup1() {
    var popup = document.getElementById("popup1");
    var body = document.getElementsByTagName('body')
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'flex' : 'none';
    if (popup.style.display === 'flex') {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }


}
function togglePopup2() {
    var popup = document.getElementById("popup2");

    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'flex' : 'none';
    if (popup.style.display === 'flex') {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }

}
function togglePopup3() {
    var popup = document.getElementById("popup3");

    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'flex' : 'none';
    if (popup.style.display === 'flex') {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }

}


