console.log("services.js loaded!");
const serviceModal = document.querySelector("#serviceModal");
const serviceModalTitle = document.querySelector("#serviceModalTitle");
const serviceModalBody = document.querySelector("#serviceModalBody");

const serviceButtons = document.querySelectorAll(
  ".service-more-button"
);

const serviceModalClose = document.querySelector(
  ".service-modal-close"
);
console.log(serviceModal);
const serviceModalSecondaryClose = document.querySelector(
  ".service-modal-secondary-close"
);

const serviceModalBackdrop = document.querySelector(
  ".service-modal-backdrop"
);


const serviceContent = {
  technical: {
    title: "Technical Support",
    
    body: `
    <div class="modal-section">

    <h3>Engineering Consultation</h3>

    <p>
        Our engineers help customers select the correct valve
        components according to pressure rating, working media,
        operating temperature and industry standards.
    </p>

</div>

<div class="modal-section">

    <h3>Technical Support Includes</h3>

    <ul class="modal-checklist">

        <li>Product Selection Consultation</li>
        <li>Technical Specification Review</li>
        <li>Material Recommendations</li>
        <li>Installation Guidance</li>
        <li>Commissioning Assistance</li>
        <li>Maintenance Consultation</li>
        <li>Replacement Part Recommendations</li>

    </ul>

</div>

<div class="modal-section">

    <h3>Technical Documents</h3>

    <div class="document-grid">

        <div>Material Certificates</div>
        <div>Inspection Reports</div>
        <div>Pressure Test Reports</div>
        <div>Dimensional Reports</div>
        <div>Quality Certificates</div>
        <div>Packing Documents</div>

    </div>

</div>

<div class="modal-section">

    <h3>Service Workflow</h3>

    <div class="process-flow">

        <span>Inquiry</span>
        <span>→</span>
        <span>Drawing Review</span>
        <span>→</span>
        <span>Quotation</span>
        <span>→</span>
        <span>Production</span>

    </div>

</div>
    `
  },


  oem: {
    title: "OEM Manufacturing",

    body: `
      <h3>Custom Production</h3>

      <p>
        We support custom manufacturing based on technical drawings,
        physical samples and confirmed product specifications.
      </p>

      <h3>Project Review</h3>

      <ul>
        <li>Drawing and dimensional review</li>
        <li>Tolerance evaluation</li>
        <li>Material selection</li>
        <li>Surface-treatment requirements</li>
        <li>Sample production</li>
        <li>Batch production planning</li>
        <li>Custom packaging requirements</li>
      </ul>

      <h3>Manufacturing Process</h3>

      <p>
        After reviewing the technical details, we provide a quotation,
        estimated production schedule and recommendations concerning
        manufacturing feasibility.
      </p>

      <p>
        When required, samples may be produced for confirmation before
        volume manufacturing begins.
      </p>
    `
  },


  quality: {
    title: "Quality Assurance",

    body: `
      <h3>Quality-Control Procedures</h3>

      <p>
        Raw-material purchasing, component manufacturing, dimensional
        inspection, final verification and packaging are managed
        according to our established quality-control procedures.
      </p>

      <h3>Inspection Support</h3>

      <ul>
        <li>Material verification</li>
        <li>Dimensional inspection</li>
        <li>In-process quality control</li>
        <li>Final inspection</li>
        <li>Packaging verification</li>
        <li>Inspection documentation when available</li>
      </ul>

      <h3>Project Requirements</h3>

      <p>
        Additional inspection, documentation or acceptance requirements
        should be discussed during the quotation and technical-review
        stage.
      </p>

      <p>
        For larger projects, inspection and testing can be coordinated
        according to confirmed technical documents and contractual
        requirements.
      </p>
    `
  },


  aftersales: {
    title: "After-Sales Service",

    body: `
      <h3>Warranty Support</h3>

      <p>
        Under proper storage, installation, maintenance and operating
        conditions, products that cannot function normally because of
        manufacturing-quality issues are covered by our warranty
        support.
      </p>

      <p>
        Depending on the circumstances, support may include repair,
        replacement parts, product replacement or another appropriate
        solution.
      </p>

      <h3>24-Hour Initial Response</h3>

      <p>
        Customer inquiries, quality complaints and technical-support
        requests receive an initial response within 24 hours.
      </p>

      <h3>Information to Provide</h3>

      <ul>
        <li>Product model or item name</li>
        <li>Product specification and material</li>
        <li>Application and operating conditions</li>
        <li>Description of the issue</li>
        <li>Purchase date or order reference</li>
        <li>Photos or videos when available</li>
      </ul>

      <h3>Service Process</h3>

      <p>
        Our team reviews the submitted information, evaluates the issue
        and proposes an appropriate solution. Follow-up support will be
        provided until the service request is completed.
      </p>
    
      `
  }
  }；


function openServiceModal(serviceKey) {
  const selectedService = serviceContent[serviceKey];

  if (
    !selectedService ||
    !serviceModal ||
    !serviceModalTitle ||
    !serviceModalBody
  ) {
    return;
  }

  serviceModalTitle.textContent = selectedService.title;
  serviceModalBody.innerHTML = selectedService.body;

  serviceModal.classList.add("active");
  serviceModal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  serviceModalBody.scrollTop = 0;
}


function closeServiceModal() {
  if (!serviceModal) {
    return;
  }

  serviceModal.classList.remove("active");
  serviceModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}


serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openServiceModal(button.dataset.service);
  });
});


if (serviceModalClose) {
  serviceModalClose.addEventListener(
    "click",
    closeServiceModal
  );
}


if (serviceModalSecondaryClose) {
  serviceModalSecondaryClose.addEventListener(
    "click",
    closeServiceModal
  );
}


if (serviceModalBackdrop) {
  serviceModalBackdrop.addEventListener(
    "click",
    closeServiceModal
  );
}


document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    serviceModal?.classList.contains("active")
  ) {
    closeServiceModal();
  }
});