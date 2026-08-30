document.addEventListener("DOMContentLoaded", () => {
  console.log("COMPANY SLIDER JS IS RUNNING");

  const slides = document.querySelectorAll(".company-slide");
  const dots = document.querySelectorAll(".company-slider-dot");
  const prevBtn = document.querySelector(".company-slider-prev");
  const nextBtn = document.querySelector(".company-slider-next");

  console.log("slides found:", slides.length);
  console.log("dots found:", dots.length);
  console.log("prev:", prevBtn);
  console.log("next:", nextBtn);

  let currentSlide = 0;

  function showSlide(index) {
    console.log("changing to slide:", index);

    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[index].classList.add("active");

    if (dots[index]) {
      dots[index].classList.add("active");
    }

    currentSlide = index;
  }

  nextBtn.addEventListener("click", () => {
    console.log("NEXT CLICKED");

    const nextIndex =
      (currentSlide + 1) % slides.length;

    showSlide(nextIndex);
  });

  prevBtn.addEventListener("click", () => {
    console.log("PREVIOUS CLICKED");

    const prevIndex =
      (currentSlide - 1 + slides.length) % slides.length;

    showSlide(prevIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      console.log("DOT CLICKED:", index);

      showSlide(index);
    });
  });
});