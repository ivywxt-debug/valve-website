
document.addEventListener("DOMContentLoaded", () => {

  const slider = document.querySelector(".materials-slider");

  if (!slider) return;

  const slides = slider.querySelectorAll(".materials-slide");
  const dotsContainer = slider.querySelector(".materials-dots");

  const prevBtn = slider.querySelector(".materials-prev");
  const nextBtn = slider.querySelector(".materials-next");

  if (!slides.length) return;

  let currentSlide = 0;
  let autoSlide;


/* ==========================================
   PRODUCT SHOWCASE
========================================== */

const productShowcase =
    document.querySelector(".product-showcase");

const productTrack =
    document.querySelector(".product-showcase-track");

const productPrev =
    document.querySelector(".product-showcase-arrow.prev");

const productNext =
    document.querySelector(".product-showcase-arrow.next");


/* ==========================================
   OPEN / CLOSE SHOWCASE
========================================== */

function openProductShowcase() {

    if (!productShowcase) return;

    productShowcase.classList.remove("is-hidden");
    productShowcase.classList.add("is-open");
}


function closeProductShowcase() {

    if (!productShowcase) return;

    productShowcase.classList.remove("is-open");
    productShowcase.classList.add("is-hidden");
}


/* Open automatically */

setTimeout(() => {

    openProductShowcase();

}, 250);


/* ==========================================
  HOVER TO OPEN
========================================== */
const productsNav =
    document.querySelector(".nav-products");
if (productsNav) {
    productsNav.addEventListener("mouseenter", () => {
        openProductShowcase();

    });

}


/* ==========================================
   PRODUCT SLIDER BUTTONS
========================================== */

if (productNext && productTrack) {

    productNext.addEventListener("click", (event) => {

        event.stopPropagation();

        productTrack.scrollBy({
            left: 320,
            behavior: "smooth"
        });

    });

}


if (productPrev && productTrack) {

    productPrev.addEventListener("click", (event) => {

        event.stopPropagation();

        productTrack.scrollBy({
            left: -320,
            behavior: "smooth"
        });

    });

}


/* ==========================================
   CLICK OUTSIDE TO CLOSE
========================================== */

document.addEventListener("click", (event) => {

    if (!productShowcase) return;

    if (!productShowcase.classList.contains("is-open")) {
        return;
    }

    const clickedInside =
        productShowcase.contains(event.target);

    if (!clickedInside) {

        closeProductShowcase();

    }

});


/* ==========================================
   SCROLL TO CLOSE
========================================== */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 100) {

            closeProductShowcase();

        }

    },
    { passive: true }
);


/* ==========================================
   ESCAPE TO CLOSE
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeProductShowcase();

    }

});
  
  // Create navigation dots
  slides.forEach((_, index) => {

    const dot = document.createElement("button");

    dot.classList.add("materials-dot");
    dot.setAttribute("aria-label", `Go to image ${index + 1}`);

    dot.addEventListener("click", () => {
      showSlide(index);
      resetAutoSlide();
    });

    dotsContainer.appendChild(dot);

  });

  const dots = dotsContainer.querySelectorAll(".materials-dot");

  function showSlide(index) {

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

  }

  function startAutoSlide() {

    if (slides.length < 2) return;

    autoSlide = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);

  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    resetAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
    resetAutoSlide();
  });

  showSlide(0);
  startAutoSlide();

});

const productSliders = document.querySelectorAll(".product-slider");

productSliders.forEach((slider) => {

    const slides = slider.querySelectorAll(".product-slide");
    const dots = slider.querySelectorAll(".slide-dot");

    const prevButton = slider.querySelector(
        ".product-slide-arrow.prev"
    );

    const nextButton = slider.querySelector(
        ".product-slide-arrow.next"
    );

    let currentSlide = 0;


    function updateSlider() {

        slides.forEach((slide, index) => {
            slide.classList.toggle(
                "active",
                index === currentSlide
            );
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle(
                "active",
                index === currentSlide
            );
        });

    }


    nextButton.addEventListener("click", () => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        updateSlider();

    });


    prevButton.addEventListener("click", () => {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        updateSlider();

    });


    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            updateSlider();

        });

    });

});

