/* ================= LOADER ================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        document
            .getElementById("loader")
            .classList
            .add("hide");

    }, 700);

});


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


menuBtn.addEventListener("click", function () {

    nav.classList.toggle("open");

});


/* Close menu after clicking */

document
    .querySelectorAll(".nav a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("open");

        });

    });


/* ================= SCROLL ANIMATION ================= */

const revealItems =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealItems.forEach(function (item) {

    observer.observe(item);

});


/* ================= HEART / WISHLIST ================= */

document
    .querySelectorAll(".heart")
    .forEach(function (button) {

        button.addEventListener("click", function () {

            button.classList.toggle("active");

            if (
                button.classList.contains("active")
            ) {

                button.textContent = "♥";

            } else {

                button.textContent = "♡";

            }

        });

    });


/* ================= PARALLAX ================= */

window.addEventListener("scroll", function () {

    const sections =
        document.querySelectorAll(
            ".feature-section"
        );


    sections.forEach(function (section) {

        const rect =
            section.getBoundingClientRect();

        const image =
            section.querySelector(
                ".feature-image"
            );


        if (
            rect.top < window.innerHeight &&
            rect.bottom > 0
        ) {

            const movement =
                (
                    window.innerHeight / 2 -
                    (rect.top + rect.height / 2)
                ) * 0.035;


            image.style.transform =
                `scale(1.03) translateY(${movement}px)`;

        }

    });

});