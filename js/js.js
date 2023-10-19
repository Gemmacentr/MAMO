function changeLanguage() {
    var langSelect = document.getElementById("lingua");
    var selectedValue = langSelect.options[langSelect.selectedIndex].value;

    if (selectedValue === "italiano") {
        document.getElementsByClassName("descrizione-slider").innerText = "Un capo di abbigliamento necessita di accessori per affermare la propria personalità";

    } else if (selectedValue === "inglese") {
        document.getElementsByClassName("descrizione-slider").innerText = "A piece of clothing requires accessories to assert its personality";

    }
}

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

    setTimeout(changeSlide, 2000);

}


changeSlide();

ScrollReveal({ reset: true });
ScrollReveal().reveal('.banner', { easing: "ease-in", delay: 100 });
ScrollReveal().reveal('.shop', { easing: "ease-in", delay: 200 });
ScrollReveal().reveal('.about', { easing: "ease-in", delay: 200 });
ScrollReveal().reveal('.contacts', { easing: "ease-in", delay: 200 });