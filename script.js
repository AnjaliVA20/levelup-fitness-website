// Future enhancements like animations or form validation
console.log("Level Up website loaded");

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const status = document.getElementById("formStatus");
  const spinner = document.getElementById("loadingSpinner");

  status.textContent = "";
  spinner.style.display = "inline-block";

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbyEn8ARDbPXhlXg7CHKtj56PJmwxnbvX_O-eIZImwovy7-ETE-nUN2MrBaDV4tfBYvz/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(text => {
    spinner.style.display = "none";

    if (text === "Success") {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();

      // WhatsApp redirect (optional)
      window.open(
        "https://wa.me/919074696122?text=New enquiry received from website",
        "_blank"
      );
    } else {
      throw new Error(text);
    }
  })
  .catch(() => {
    spinner.style.display = "none";
    status.textContent = "❌ Something went wrong. Please try again.";
    status.style.color = "red";
  });
});
