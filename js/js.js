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



ScrollReveal({ reset: true });
ScrollReveal().reveal('.banner', { easing: "ease-in", delay: 100 });
ScrollReveal().reveal('.shop', { easing: "ease-in", delay: 200 });
ScrollReveal().reveal('.about', { easing: "ease-in", delay: 200 });
ScrollReveal().reveal('.contacts', { easing: "ease-in", delay: 200 });