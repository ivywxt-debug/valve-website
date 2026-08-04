const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
      "Your form layout is working. The next step is to connect it to an email or form service."
    );
  });
}