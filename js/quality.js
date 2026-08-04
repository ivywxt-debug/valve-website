const certificateButtons = document.querySelectorAll(
  ".certificate-button"
);

const certificateModal = document.querySelector(
  "#certificateModal"
);

const certificateModalImage = document.querySelector(
  "#certificateModalImage"
);

const certificateModalTitle = document.querySelector(
  "#certificateModalTitle"
);

const certificateModalClose = document.querySelector(
  ".certificate-modal-close"
);

const certificateModalOverlay = document.querySelector(
  ".certificate-modal-overlay"
);


function openCertificateModal(imageSource, title) {
  if (
    !certificateModal ||
    !certificateModalImage ||
    !certificateModalTitle
  ) {
    return;
  }

  certificateModalImage.src = imageSource;
  certificateModalImage.alt = title;
  certificateModalTitle.textContent = title;

  certificateModal.classList.add("active");
  certificateModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}


function closeCertificateModal() {
  if (!certificateModal || !certificateModalImage) {
    return;
  }

  certificateModal.classList.remove("active");
  certificateModal.setAttribute("aria-hidden", "true");

  certificateModalImage.src = "";

  document.body.style.overflow = "";
}


certificateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const imageSource = button.dataset.image;
    const title = button.dataset.title;

    openCertificateModal(imageSource, title);
  });
});


if (certificateModalClose) {
  certificateModalClose.addEventListener(
    "click",
    closeCertificateModal
  );
}


if (certificateModalOverlay) {
  certificateModalOverlay.addEventListener(
    "click",
    closeCertificateModal
  );
}


document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    certificateModal?.classList.contains("active")
  ) {
    closeCertificateModal();
  }
});