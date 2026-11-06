
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. TYPED.JS ANIMATION
    // =====================================

    const typedElement = document.querySelector(".multiple-text");

    if (typedElement && typeof Typed !== "undefined") {
        new Typed(".multiple-text", {
            strings: [
                "4th Year Student",
                "Aspiring Web Developer",
                "Future Web Developer"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }


    // =====================================
    // 2. VANTA NET BACKGROUND
    // =====================================

    const vantaBackground = document.querySelector("#vanta-bg");

    if (
        vantaBackground &&
        typeof window.VANTA !== "undefined" &&
        typeof window.THREE !== "undefined" &&
        typeof window.VANTA.NET === "function"
    ) {

        // Prevent duplicate initialization
        if (window.vantaEffect) {
            window.vantaEffect.destroy();
        }

        window.vantaEffect = window.VANTA.NET({
            el: "#vanta-bg",

            mouseControls: true,
            touchControls: true,
            gyroControls: false,

            minHeight: 200.00,
            minWidth: 200.00,

            scale: 1.00,
            scaleMobile: 1.00,

            color: 0xded4d4,
            backgroundColor: 0x090909,

            points: 13.00,
            maxDistance: 21.00,
            spacing: 17.00
        });

    } else {
        console.error("Vanta NET could not be initialized. Check your library imports.");
    }


    // =====================================
    // 3. MY WORKS IMAGE SLIDER
    // =====================================

    const slides = document.querySelectorAll(".work-slide");
    const dotsContainer = document.querySelector(".slider-dots");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (
        slides.length > 0 &&
        dotsContainer &&
        prevBtn &&
        nextBtn
    ) {

        let currentSlide = 0;

        // Remove previously generated dots
        dotsContainer.innerHTML = "";

        // Create one navigation circle per project
        slides.forEach(function (slide, index) {

            const dot = document.createElement("span");

            dot.classList.add("dot");

            if (index === 0) {
                dot.classList.add("active");
            }

            dot.setAttribute("aria-label", "Go to project " + (index + 1));
            dot.setAttribute("role", "button");
            dot.setAttribute("tabindex", "0");

            // Click navigation
            dot.addEventListener("click", function () {
                showSlide(index);
            });

            // Keyboard navigation for dots
            dot.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    showSlide(index);
                }
            });

            dotsContainer.appendChild(dot);

        });

        const dots = dotsContainer.querySelectorAll(".dot");

        // Display selected project
        function showSlide(index) {

            slides[currentSlide].classList.remove("active");
            dots[currentSlide].classList.remove("active");

            currentSlide = (index + slides.length) % slides.length;

            slides[currentSlide].classList.add("active");
            dots[currentSlide].classList.add("active");

        }

        // Next project
        nextBtn.addEventListener("click", function () {
            showSlide(currentSlide + 1);
        });

        // Previous project
        prevBtn.addEventListener("click", function () {
            showSlide(currentSlide - 1);
        });

        // Keyboard arrow navigation
        document.addEventListener("keydown", function (event) {

            // Avoid changing slides while typing in input fields
            if (
                event.target.tagName === "INPUT" ||
                event.target.tagName === "TEXTAREA"
            ) {
                return;
            }

            if (event.key === "ArrowRight") {
                showSlide(currentSlide + 1);
            }

            if (event.key === "ArrowLeft") {
                showSlide(currentSlide - 1);
            }

        });

    }

});
