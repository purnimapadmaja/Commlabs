let redbuttonel = document.getElementById("redbutton");
const modal = createModal();

let redbuttontwoel = document.getElementById("redbuttontwo");
const modaltwo = createModal();

let redbuttonthreeel = document.getElementById("redbuttonthree");
const modalthree = createModal();

function createModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  const closeModalSpan = document.createElement("span");
  closeModalSpan.textContent = "×";
  closeModalSpan.style.float = "left";
  closeModalSpan.style.cursor = "pointer";
  modalContent.appendChild(closeModalSpan);
  const modalHeader = document.createElement("h2");
  modalHeader.textContent = "Registration for the free webinar";
  modalContent.appendChild(modalHeader);
  const form = document.createElement("form");
  form.innerHTML = `
                <label for="First Name">First Name:</label>
                <input type="text" id="name" name="name" required>
<br>
                <label for="Last Name">Last Name:</label>
                <input type="text" id="lastname" name="lastname" required>
                <br>

                <label for="Businees E-mail">Email :</label>
                <input type="email" id="email" name="email" required>
                <br>

                <label for="phone">Phone :</label>
                <input type="tel" id="phone" name="phone">
                <br>
                <input type="submit" value="SECURE YOUR SEAT" style="background-color: orange; color: white">
            `;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    console.log(
      "Name:",
      name,
      "Last Name:",
      lastname,
      "Email:",
      email,
      "Phone:",
      phone
    );
    closeRegistrationModal(modal);
  });
  modalContent.appendChild(form);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  closeModalSpan.addEventListener("click", function () {
    closeRegistrationModal(modal);
  });
  return modal;
}

function openRegistrationModal(modal) {
  modal.style.display = "block";
}

function closeRegistrationModal(modal) {
  modal.style.display = "none";
}
redbuttonel.addEventListener("click", () => openRegistrationModal(modal));
redbuttontwoel.addEventListener("click", () => openRegistrationModal(modaltwo));
redbuttonthreeel.addEventListener("click", () =>
  openRegistrationModal(modalthree)
);
window.addEventListener("click", function (event) {
  if (
    event.target === modal ||
    event.target === modaltwo ||
    event.target === modalthree
  ) {
    closeRegistrationModal(modal);
    closeRegistrationModal(modaltwo);
    closeRegistrationModal(modalthree);
  }
});
