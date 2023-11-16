
// Funzione per impostare un cookie
function setCookie(name, value, days) {
    var expires = "";

    // Se il numero di giorni è specificato, calcola la data di scadenza
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    // Imposta il cookie con il nome, il valore e l'opzione di scadenza
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Esempio di utilizzo: Imposta un cookie chiamato "username" con il valore "john_doe" valido per 7 giorni
setCookie("username", "john_doe", 7);

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


